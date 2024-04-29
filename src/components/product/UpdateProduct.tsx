import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useProductForm } from "@/hooks/product/useProductForm";
import { useGetProductFormData } from "@/hooks/product/useGetProductFormData";
import { useUploadProduct } from "@/hooks/product/useUploadProduct";
import { ProductForm } from "@/components/product/ProductForm";

export const UpdateProduct = () => {

    const { productId } = useParams();
    const product = useGetProductFormData(productId as string);
    const [msg, setMsg] = useState('');
    const { productFormData, setProductFormData, validateProductForm, inputChange } = useProductForm(product || {
        userEmail: '',
        productName: '',
        productPrice: '',
        productDescription: '',
        productImages: [],
        createdAt: new Date(),
        updatedAt: new Date()
    }, setMsg);

    useEffect(() => {
        if (product) {
            setProductFormData(product);
        }
    }, [product]);

    useEffect(() => {
        if (product) {
            setProductFormData({
                ...product,
                updatedAt: new Date()
            });
        }
    }, [product]);

    const { showImages, handleAddImages, handleDeleteImage, handleSubmit } = useUploadProduct({ productFormData, validateProductForm, setMsg, setProductFormData });

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
