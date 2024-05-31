import { doc, deleteDoc, getDoc } from 'firebase/firestore'
import { ref, deleteObject, listAll } from 'firebase/storage'
import { db, storage } from '@/firebase'

const useDeleteProduct = () => {
  const deleteProductById = async (
    productId: string,
    userEmail: string,
    productName: string,
  ) => {
    const productRef = doc(db, 'products', productId)
    try {
      const docSnap = await getDoc(productRef)
      if (docSnap.exists()) {
        // Firebase Storage 경로 구성
        const folderPath = `products/${userEmail}/${productName}`
        const folderRef = ref(storage, folderPath)

        // 폴더 안의 모든 파일을 리스팅
        const listResponse = await listAll(folderRef)
        const deletePromises = listResponse.items.map((itemRef) =>
          deleteObject(itemRef),
        )

        // 모든 파일 삭제
        await Promise.all(deletePromises)
        console.log('Storage에서 폴더와 파일들 삭제 완료')

        // Firestore 문서 삭제
        await deleteDoc(productRef)
        console.log('Firestore에서 문서 삭제 완료:', productId)
      } else {
        console.log('해당 문서를 찾을 수 없습니다:', productId)
      }
    } catch (error) {
      console.log('삭제 실패:', error)
    }
  }

  return deleteProductById
}

export default useDeleteProduct
