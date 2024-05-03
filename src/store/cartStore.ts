import { create } from 'zustand';
import { devtools, persist, createJSONStorage } from 'zustand/middleware';
import { CartStore, } from './types';
import { IProductFormData } from '@/types/types';
import { collection, doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../firebase'

export const cartStore = create<CartStore>()(
    persist(
        devtools((set, get) => ({
            cart: [],
            setCart: (productId: string) => set({ cart: [productId] }),
            addCart: (productId: string) => {
                const { cart } = get();
                const newCart = [...cart, productId];
                set({ cart: newCart });
                cartToFirebase(newCart);
            },
            removeCart: (productId: string) => {
                const { cart } = get();
                const newCart = cart.filter(product => product !== productId);
                set({ cart: newCart });
                cartToFirebase(newCart);
            }
        })),
        {
            name: 'cartStorage',
            storage: createJSONStorage(() => sessionStorage),
        }
    ));

const cartToFirebase = async (cart: string[]) => {
    const userId = auth.currentUser?.uid;
    if (userId) {
        const cartDocRef = doc(collection(db, "carts"), userId);
        await setDoc(cartDocRef, { items: cart });
    } else {
        console.log("cartToFirebase error");
    }
}