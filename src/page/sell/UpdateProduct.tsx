import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import useProductForm from '@/hooks/sell/useProductForm'
import useGetProductFormData from '@/hooks/sell/useGetProductFormData'
import useUploadProduct from '@/hooks/sell/useUploadProduct'
import ProductUploadForm from '@/components/sell/SellerProductForm'

const UpdateProduct = () => {
  const { productId } = useParams()
  const product = useGetProductFormData(productId as string)
  const [msg, setMsg] = useState('')
  const {
    productFormData,
    setProductFormData,
    validateProductForm,
    inputChange,
  } = useProductForm(
    product || {
      userEmail: '',
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

  useEffect(() => {
    if (product) {
      setProductFormData(product)
    }
  }, [product, setProductFormData])

  useEffect(() => {
    if (product) {
      setProductFormData({
        ...product,
        updatedAt: new Date(),
      })
    }
  }, [product, setProductFormData])

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

export default UpdateProduct
