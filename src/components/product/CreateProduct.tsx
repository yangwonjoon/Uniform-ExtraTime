import { useProductForm } from "@/hooks/product/useProductForm";
import { useUploadProduct } from "@/hooks/product/useUploadProduct";
import { ProductForm } from "@/components/product/ProductForm";
import { userStore } from "@/store/store";

export const CreateProduct = () => {

    const user = userStore(state => state.user);
    const { productFormData, inputChange } = useProductForm({
        userEmail: user.email,
        productName: '',
        productPrice: '',
        productDescription: '',
        productImages: [],
        createdAt: new Date(),
        updatedAt: new Date()
    });
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
