import { create } from 'zustand'
import { devtools, persist, createJSONStorage } from 'zustand/middleware'
import { collection, doc, setDoc } from 'firebase/firestore'
import { CartStore } from './types'
import { auth, db } from '../firebase'

const cartToFirebase = async (cart: string[]) => {
  const userId = auth.currentUser?.uid
  if (userId) {
    const cartDocRef = doc(collection(db, 'carts'), userId)
    await setDoc(cartDocRef, { items: cart })
  } else {
    console.log('cartToFirebase error')
  }
}

const cartStore = create<CartStore>()(
  persist(
    devtools((set, get) => ({
      cart: [],
      cartLength: () => get().cart.length,
      setCart: (productId) => set({ cart: [productId] }),
      addCart: (productId) => {
        const { cart } = get()
        if (!cart.includes(productId)) {
          const newCart = [...cart, productId]
          set({ cart: newCart })
          cartToFirebase(newCart)
        } else {
          console.log('카트에 상품이 이미 있습니다.')
        }
      },
      removeCart: (productId) => {
        const { cart } = get()
        const newCart = cart.filter((product) => product !== productId)
        set({ cart: newCart })
        cartToFirebase(newCart)
      },
    })),
    {
      name: 'cartStorage',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
)

export default cartStore
