import { useState } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { addDoc, collection } from "firebase/firestore";
import { storage, db } from "@/firebase";
import { userStore } from "@/store/store";
import { IProduct } from "@/page/seller/IProduct";

export const useUploadProduct = (initialState: IProduct) => {

    const user = userStore(state => state.user);
    const [productFormData, setProductFormData] = useState<IProduct>(initialState);
    const [showImages, setShowImages] = useState<string[]>([]);
    const [imageFiles, setImageFiles] = useState<File[]>([]);

    const handleAddImages = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            const filesArray = Array.from(event.target.files);
            const newImageUrls = filesArray.map(file => URL.createObjectURL(file));
            const newImageFiles = filesArray.slice(0, 5);

            if (newImageUrls.length > 5) {
                alert('Only the first 5 images are accepted');
            }

            setShowImages(newImageUrls.slice(0, 5));
            setImageFiles(newImageFiles);
        }
    };

    const handleDeleteImage = (index: number) => {
        setShowImages(showImages.filter((_, idx) => idx !== index));
        setImageFiles(imageFiles.filter((_, idx) => idx !== index));
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const uploadPromises = imageFiles.map(async (file) => {
            const storageRef = ref(storage, `products/${user.email}/${productFormData.name}/${file.name}`);
            await uploadBytes(storageRef, file);
            return getDownloadURL(storageRef);
        });

        try {
            const imageUrls = await Promise.all(uploadPromises);
            const productRef = collection(db, 'products');
            await addDoc(productRef, {
                ...productFormData,
                images: imageUrls
            });
            console.log("Image upload successful");
            setShowImages([]);
            setImageFiles([]);

        } catch (error) {
            console.error("Image upload failed", error);
            alert('Failed to upload images.'); // Notify user of the error
        }
    };

    return {
        productFormData,
        showImages,
        handleAddImages,
        handleDeleteImage,
        handleSubmit,
        setProductFormData
    };
};
