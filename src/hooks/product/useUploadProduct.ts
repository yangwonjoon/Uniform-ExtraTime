import { useState, useEffect } from "react";
import { userStore } from "@/store/store";
import { IProductFormData } from "@/types/types";
import { useNavigate } from "react-router-dom";
import { uploadProductImageFiles } from "@/api/product/uploadProductImageFiles";
import { deleteProductImage } from "@/api/product/deleteProductImage";
import { uploadProductFormData } from "@/api/product/uploadProductFormData";

export const useUploadProduct = (productFormData: IProductFormData) => {
    const navigate = useNavigate();
    const user = userStore(state => state.user);
    const [showImages, setShowImages] = useState<string[]>(productFormData.productImages || []);
    const [imageFiles, setImageFiles] = useState<File[]>([]);

    useEffect(() => {
        setShowImages(productFormData.productImages);
    }, [productFormData.productImages]);


    // 이미지 추가
    const handleAddImages = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const IMG_FILES = e.target.files;
        if (IMG_FILES) {
            const totalFileCount = imageFiles.length + IMG_FILES.length;
            if (totalFileCount > 5) {
                alert('이미지 파일은 5개까지 업로드 가능합니다');
                return;
            }
            const newImageFiles = Array.from(IMG_FILES);
            const newShowImages = newImageFiles.map(file => URL.createObjectURL(file));

            setShowImages(prevImages => [...prevImages, ...newShowImages]);
            setImageFiles(prevFiles => [...prevFiles, ...newImageFiles]);
        }
    };

    // 이미지 삭제
    const handleDeleteImage = async (index: number) => {
        const oldImageUrl = showImages[index];
        try {
            await deleteProductImage(oldImageUrl); // Firebase에서 이미지 파일 삭제
        } catch (error) {
            alert('이미지 삭제 에러');
            return;
        }

        setShowImages(showImages.filter((_, idx) => idx !== index));
        setImageFiles(imageFiles.filter((_, idx) => idx !== index));
    };

    // 폼 전송 및 업로드
    const handleSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (imageFiles.length === 0 && productFormData.productImages.length === 0) {
            alert('이미지를 넣어주세요');
            return;
        }

        try {
            const imageUrls = await Promise.all(imageFiles.map(file => uploadProductImageFiles(file, user.email, productFormData.productName)));
            const finalImageUrls = [...imageUrls, ...productFormData.productImages.filter(url => showImages.includes(url))];
            const finalProductFormData: IProductFormData = { ...productFormData, productImages: finalImageUrls as string[] };
            await uploadProductFormData(finalProductFormData, productFormData.productId as string);

            alert('업로드 성공');
            navigate('/sell');
        } catch (error) {
            console.error('Error uploading product data', error);
            alert('업로드 에러');
        }
    };

    return {
        showImages,
        handleAddImages,
        handleDeleteImage,
        handleSubmit,
    };
};
