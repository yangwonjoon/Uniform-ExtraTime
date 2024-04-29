import { useProductForm } from "@/hooks/product/useProductForm";
import { useUploadProduct } from "@/hooks/product/useUploadProduct";
import { ProductForm } from "@/components/product/ProductForm";
import { userStore } from "@/store/store";
import { useState } from "react";

export const CreateProduct = () => {

    const user = userStore(state => state.user);
    const [msg, setMsg] = useState('');
    const { productFormData, setProductFormData, inputChange, validateProductForm } = useProductForm({
        userEmail: user.email,
        productName: '',
        productPrice: '',
        productDescription: '',
        productCategory: 0,
        productImages: [],
        createdAt: new Date(),
        updatedAt: new Date()
    }, setMsg);
    console.log(productFormData)
    const { showImages, handleAddImages, handleDeleteImage, handleSubmit } = useUploadProduct({ productFormData, validateProductForm, setMsg, setProductFormData });

    return (
        <ProductForm
            productFormData={productFormData}
            setProductFormData={setProductFormData}
            inputChange={inputChange}
            showImages={showImages}
            handleAddImages={handleAddImages}
            handleDeleteImage={handleDeleteImage}
            handleSubmit={handleSubmit}
            msg={msg}
        />
    );
};
