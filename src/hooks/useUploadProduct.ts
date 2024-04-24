import { useState, useEffect } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { storage, db } from "@/firebase";
import { userStore } from "@/store/store";
import { IProduct } from "@/page/seller/IProduct";
import { useNavigate } from "react-router-dom";

export const useUploadProduct = (productFormData: IProduct) => {

    const navigate = useNavigate()
    const user = userStore(state => state.user);

    useEffect(() => {
        setShowImages(productFormData.images || []);
    }, [productFormData]);

    const [showImages, setShowImages] = useState<string[]>(productFormData.images || []);
    const [imageFiles, setImageFiles] = useState<File[]>([]);

    //이미지 추가
    const handleAddImages = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        if (e.target.files && e.target.files.length > 0) {
            const filesArray = Array.from(e.target.files);
            const newImageUrls = filesArray.map(file => URL.createObjectURL(file));
            const newImageFiles = filesArray.slice(0, 5);

            setShowImages(prevImages => [...prevImages, ...newImageUrls.slice(0, 5)]);
            setImageFiles(prevFiles => [...prevFiles, ...newImageFiles]);
        }
    };

    //이미지 삭제
    const handleDeleteImage = (index: number) => {
        setShowImages(showImages.filter((_, idx) => idx !== index));
        setImageFiles(imageFiles.filter((_, idx) => idx !== index));
    };

    //form 전송
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const uploadStorage = imageFiles.map(async (file) => {
            const storageRef = ref(storage, `products/${user.email}/${productFormData.name}/${file.name}`);
            //storage에 파일저장
            await uploadBytes(storageRef, file);
            //파일이미지 url반환
            return getDownloadURL(storageRef);
        });

        try {
            //각 파일을 비동기로 uploadStorage함
            const imageUrls = await Promise.all(uploadStorage);
            const newProductData = {
                ...productFormData,
                images: imageUrls
            };
            console.log("Uploading new product data:", newProductData);

            //product id가 있으면 update
            if (productFormData.id) {
                const productRef = doc(db, "products", productFormData.id);
                await setDoc(productRef, newProductData);
            } else {
                // 없으면 create
                const productRef = collection(db, 'products');
                await addDoc(productRef, newProductData);
            }
            alert('이미지 업로드 완료')
            navigate('/sell')
        } catch (error) {
            alert('이미지 업로드 실패')
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
