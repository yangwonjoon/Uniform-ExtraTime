import { useState, useEffect } from "react";
import { userStore } from "@/store/store";
import { IProductFormData } from "@/types/types";
import { useNavigate } from "react-router-dom";
import { uploadProductImageFiles } from "@/api/product/uploadProductImageFiles";
import { deleteProductImage } from "@/api/product/deleteProductImage";
import { uploadProductFormData } from "@/api/product/uploadProductFormData";
import { Dispatch, SetStateAction } from 'react';

interface Props {
    productFormData: IProductFormData;
    validateProductForm: () => boolean;
    setMsg: Dispatch<SetStateAction<string>>;
}

export const useUploadProduct = ({ productFormData, validateProductForm, setMsg }: Props) => {
    const navigate = useNavigate();
    const user = userStore(state => state.user);
    const [showImages, setShowImages] = useState<string[]>(productFormData.productImages || []);
    const [imageFiles, setImageFiles] = useState<File[]>([]);
    console.log(productFormData)

    useEffect(() => {
        setShowImages(productFormData.productImages);
    }, [productFormData.productImages]);

    // 이미지 추가
    const handleAddImages = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const files = e.target.files;
        if (files) {
            const newImageFiles = Array.from(files);
            // 기존 Blob URL 해제
            showImages.forEach(url => url.startsWith('blob:') && URL.revokeObjectURL(url));

            const newShowImages = newImageFiles.map(file => URL.createObjectURL(file));

            setShowImages(prevImages => [...prevImages, ...newShowImages]);
            setImageFiles(prevFiles => [...prevFiles, ...newImageFiles]);
        }
    };

    const handleDeleteImage = async (index: number) => {
        const imageUrl = showImages[index];
        const isBlob = imageUrl.startsWith('blob:');
        // Blob URL 해제
        if (isBlob) {
            URL.revokeObjectURL(imageUrl);
        } else {
            // Firebase Storage에서 이미지 삭제
            try {
                await deleteProductImage(imageUrl);
            } catch (error) {
                console.error('Error deleting image', error);
                alert('이미지 삭제 에러');
                return;
            }
        }
        // showImages 및 imageFiles에서 해당 인덱스의 항목 제거
        setShowImages(prev => prev.filter((_, idx) => idx !== index));
        setImageFiles(prev => prev.filter((_, idx) => idx !== index));
    };


    // 폼 전송 및 업로드
    const handleSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (!validateProductForm()) {
            return;
        }

        const INPUT_IMG_LENGTH = showImages.length
        if (INPUT_IMG_LENGTH < 4) {
            setMsg('이미지는 최소 4개 이상 업로드해야 합니다.');
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
