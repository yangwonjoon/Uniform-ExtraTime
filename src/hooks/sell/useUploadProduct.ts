import { useState, useEffect, Dispatch, SetStateAction } from 'react'
import userStore from '@/store/userStore'
import { IProductFormData } from '@/types/types'
import { useNavigate } from 'react-router-dom'
import uploadProductImageFiles from '@/api/sell/uploadProductImageFiles'
import deleteProductImage from '@/api/sell/deleteProductImage'
import uploadProductFormData from '@/api/sell/uploadProductFormData'

interface Props {
  productFormData: IProductFormData
  validateProductForm: () => boolean
  setMsg: Dispatch<SetStateAction<string>>
  setProductFormData: Dispatch<SetStateAction<IProductFormData>>
}

const useUploadProduct = ({
  productFormData,
  validateProductForm,
  setMsg,
}: Props) => {
  const navigate = useNavigate()
  const user = userStore((state) => state.user)
  const [showImages, setShowImages] = useState<string[]>(
    productFormData.productImages || [],
  )
  const [imageFiles, setImageFiles] = useState<File[]>([])
  const [fileNames, setFileNames] = useState<string[]>([]) // 파일 이름을 저장하는 배열

  useEffect(() => {
    setShowImages(productFormData.productImages)
    // 파일 이름을 추출하여 초기화합니다.
    setFileNames(
      productFormData.productImages.map((url) => url.split('/').pop() || ''),
    )
  }, [productFormData.productImages])

  // 이미지 추가
  const handleAddImages = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    const files = Array.from(e.target.files || [])
    files.forEach((file) => {
      const fileName = file.name
      if (!fileNames.includes(fileName)) {
        const newImageUrl = URL.createObjectURL(file)
        setShowImages((prev) => [...prev, newImageUrl])
        setImageFiles((prev) => [...prev, file])
        setFileNames((prev) => [...prev, fileName])
      }
    })
  }

  // 이미지 삭제
  const handleDeleteImage = async (index: number) => {
    const imageUrl = showImages[index]
    const isBlob = imageUrl.startsWith('blob:')
    if (isBlob) {
      URL.revokeObjectURL(imageUrl)
    } else {
      try {
        await deleteProductImage(imageUrl)
      } catch (error) {
        console.error('Error deleting image', error)
        alert('이미지 삭제 에러')
        return
      }
    }
    setShowImages((prev) => prev.filter((_, idx) => idx !== index))
    setImageFiles((prev) => prev.filter((_, idx) => idx !== index))
    setFileNames((prev) => prev.filter((_, idx) => idx !== index))
  }

  // 폼 전송 및 업로드
  const handleSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (!validateProductForm()) {
      return
    }
    if (showImages.length < 4 || new Set(fileNames).size < 4) {
      setMsg('이미지는 최소 4개 이상의 유니크한 파일이어야 합니다.')
      return
    }
    try {
      const imageUrls = await Promise.all(
        imageFiles.map((file) =>
          uploadProductImageFiles(
            file,
            user.email,
            productFormData.productName,
          ),
        ),
      )
      const finalImageUrls = [
        ...imageUrls,
        ...productFormData.productImages.filter((url) =>
          showImages.includes(url),
        ),
      ]
      const finalProductFormData: IProductFormData = {
        ...productFormData,
        productImages: finalImageUrls as string[],
      }
      await uploadProductFormData(
        finalProductFormData,
        productFormData.productId as string,
      )

      // Blob URL 해제
      imageFiles.forEach((file) => {
        if (file instanceof Blob) {
          URL.revokeObjectURL(URL.createObjectURL(file))
        }
      })

      alert('업로드 성공')
      navigate('/sell')
    } catch (error) {
      alert('업로드 에러')
    }
  }

  return {
    showImages,
    handleAddImages,
    handleDeleteImage,
    handleSubmit,
  }
}

export default useUploadProduct
