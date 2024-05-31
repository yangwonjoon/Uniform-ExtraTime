import { db } from '@/firebase'
import { IProductFormData } from '@/types/types'
import { addDoc, collection, doc, setDoc } from 'firebase/firestore'

const uploadProductFormData = async (
  ProductFormData: IProductFormData,
  productId: string,
) => {
  try {
    if (productId) {
      const productRef = doc(db, 'products', productId)
      await setDoc(productRef, ProductFormData, { merge: true })
      return true
    }
    const productRef = collection(db, 'products')
    await addDoc(productRef, ProductFormData)
    return true
  } catch {
    return false
  }
}

export default uploadProductFormData
