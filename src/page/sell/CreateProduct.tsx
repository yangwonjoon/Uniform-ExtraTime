import useProductForm from '@/hooks/sell/useProductForm'
import useUploadProduct from '@/hooks/sell/useUploadProduct'
import ProductUploadForm from '@/components/sell/SellerProductForm'
import userStore from '@/store/userStore'
import { useState } from 'react'

const CreateProduct = () => {
  const user = userStore((state) => state.user)
  const [msg, setMsg] = useState('')
  const {
    productFormData,
    setProductFormData,
    inputChange,
    validateProductForm,
  } = useProductForm(
    {
      userEmail: user.email,
      productName: '',
      productPrice: '',
      productCategory: 0,
      productDescription: '',
      productImages: [],
      createdAt: new Date(),
      updatedAt: new Date(),
      isSell: false,
    },
    setMsg,
  )

  const { showImages, handleAddImages, handleDeleteImage, handleSubmit } =
    useUploadProduct({
      productFormData,
      validateProductForm,
      setMsg,
      setProductFormData,
    })

  return (
    <ProductUploadForm
      productFormData={productFormData}
      setProductFormData={setProductFormData}
      inputChange={inputChange}
      showImages={showImages}
      handleAddImages={handleAddImages}
      handleDeleteImage={handleDeleteImage}
      handleSubmit={handleSubmit}
      msg={msg}
    />
  )
}

export default CreateProduct
