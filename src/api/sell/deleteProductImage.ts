import { ref, deleteObject } from 'firebase/storage'
import { storage } from '@/firebase'

const deleteProductImage = async (url: string) => {
  try {
    const imageRef = ref(storage, url)
    await deleteObject(imageRef)
    console.log('Image successfully deleted from Firebase Storage:', url)
  } catch (error) {
    console.error('Failed to delete image from Firebase Storage:', url, error)
  }
}

export default deleteProductImage
