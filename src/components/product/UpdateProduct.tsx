import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useProductForm } from "@/hooks/product/useProductForm";
import { useGetProductById } from "@/hooks/product/useGetProductById";
import { useUploadProduct } from "@/hooks/product/useUploadProduct";
import { ProductForm } from "@/components/product/ProductForm";

export const UpdateProduct = () => {

    const { productId } = useParams();
    const product = useGetProductById(productId);
    const { productFormData, setProductFormData, inputChange } = useProductForm(product || {
        userEmail: '',
        productName: '',
        productPrice: '',
        productDescription: '',
        productImages: [],
        createdAt: new Date(),
        updatedAt: new Date()
    });

    useEffect(() => {
        if (product) {
            setProductFormData(product);
        }
    }, [product]);

    const { showImages, handleAddImages, handleDeleteImage, handleSubmit } = useUploadProduct(productFormData);

    return (
        <ProductForm
            productFormData={productFormData}
            inputChange={inputChange}
            showImages={showImages}
            handleAddImages={handleAddImages}
            handleDeleteImage={handleDeleteImage}
            handleSubmit={handleSubmit}
        />
    );
};
