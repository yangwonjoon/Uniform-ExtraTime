import { useProductForm } from "@/hooks/product/useProductForm";
import { useUploadProduct } from "@/hooks/product/useUploadProduct";
import { ProductForm } from "@/components/product/ProductForm";
import { userStore } from "@/store/store";
import { useState } from "react";

export const CreateProduct = () => {

    const user = userStore(state => state.user);
    const [msg, setMsg] = useState('');
    const { productFormData, inputChange, validateProductForm } = useProductForm({
        userEmail: user.email,
        productName: '',
        productPrice: '',
        productDescription: '',
        productImages: [],
        createdAt: new Date(),
        updatedAt: new Date()
    }, setMsg);
    const { showImages, handleAddImages, handleDeleteImage, handleSubmit } = useUploadProduct({ productFormData, validateProductForm, setMsg });

    return (
        <ProductForm
            productFormData={productFormData}
            inputChange={inputChange}
            showImages={showImages}
            handleAddImages={handleAddImages}
            handleDeleteImage={handleDeleteImage}
            handleSubmit={handleSubmit}
            msg={msg}
        />
    );
};
