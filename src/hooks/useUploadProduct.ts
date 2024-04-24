import { useState, useEffect } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { storage, db } from "@/firebase";
import { userStore } from "@/store/store";
import { IProduct } from "@/page/seller/IProduct";
import { useNavigate } from "react-router-dom";

export const useUploadProduct = (productFormData: IProduct) => {

    useEffect(() => {
        setShowImages(productFormData.images || []);
    }, [productFormData]);

    const navigate = useNavigate()
    const user = userStore(state => state.user);
    const [showImages, setShowImages] = useState<string[]>(productFormData.images || []);
    const [imageFiles, setImageFiles] = useState<File[]>([]);

    //이미지 추가
    const handleAddImages = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        if (e.target.files && e.target.files.length > 0) {
            const filesArray = Array.from(e.target.files);
            const newShowImages = filesArray.map(file => URL.createObjectURL(file));
            const newImageFiles = filesArray.slice(0, 5);

            setShowImages(prevImages => [...prevImages, ...newShowImages.slice(0, 5)]);
            setImageFiles(prevFiles => [...prevFiles, ...newImageFiles]);
        }
    };

    //이미지 삭제
    const handleDeleteImage = (index: number) => {
        setShowImages(showImages.filter((_, idx) => idx !== index));
        setImageFiles(imageFiles.filter((_, idx) => idx !== index));
    };

    //이미지 업로드
    const uploadImage = async (file: File) => {
        const storageRef = ref(storage, `products/${user.email}/${productFormData.name}/${file.name}`);
        try {
            await uploadBytes(storageRef, file);
            const imageUrl = await getDownloadURL(storageRef);

            return `${imageUrl}?timestamp=${new Date().getTime()}`;
        } catch (error) {
            console.log("uploadImage 에러");
        }
    };

    //폼전송
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const newImageUrls = imageFiles.length > 0
                ? await Promise.all(imageFiles.map(file => uploadImage(file)))
                : [];

            const finalImageUrls = [...newImageUrls, ...productFormData.images.filter(url => {
                return showImages.includes(url);
            })];

            const newProductData = {
                ...productFormData,
                images: finalImageUrls
            };

            if (productFormData.id) {
                const productRef = doc(db, "products", productFormData.id);
                await setDoc(productRef, newProductData, { merge: true });
            } else {
                const productRef = collection(db, 'products');
                await addDoc(productRef, newProductData);
            }
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
