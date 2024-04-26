import { useState, useEffect } from "react";
import { userStore } from "@/store/store";
import { IProductFormData } from "@/types/types";
import { useNavigate } from "react-router-dom";
import { uploadProductImageFiles } from "@/api/product/uploadProductImageFiles";
import { uploadProductFormData } from "@/api/product/uploadProductFormData";

export const useUploadProduct = (productFormData: IProductFormData) => {

    useEffect(() => {
        setShowImages(productFormData.productImages || []);
    }, [productFormData]);

    const navigate = useNavigate()
    const user = userStore(state => state.user);
    const [showImages, setShowImages] = useState<string[]>(productFormData.productImages || []);
    const [imageFiles, setImageFiles] = useState<File[]>([]);

    //이미지 추가
    const handleAddImages = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
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

    //이미지 삭제(0)
    const handleDeleteImage = (index: number) => {
        setShowImages(showImages.filter((_, idx) => idx !== index));
        setImageFiles(imageFiles.filter((_, idx) => idx !== index));
    };

    //폼전송
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const IMG_FILES_NUM = imageFiles.length
        if (!IMG_FILES_NUM) {
            alert('이미지를 넣어주세요');
            return;
        }

        try {
            const imageUrls = await Promise.all(imageFiles.map(file => uploadProductImageFiles(file, user.email, productFormData.productName)))
            const finalImageUrls = [...imageUrls, ...productFormData.productImages];
            const finalProductFormData: IProductFormData = { ...productFormData, productImages: finalImageUrls as string[] };
            uploadProductFormData(finalProductFormData, productFormData.productId as string)

            alert('업로드 성공');
            navigate('/sell');
        } catch (error) {
            alert('업로드 에러');
        }
    };

    return {
        productFormData,
        showImages,
        handleAddImages,
        handleDeleteImage,
        handleSubmit,
    };
};
