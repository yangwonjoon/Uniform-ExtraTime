import { useState } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { addDoc, collection } from "firebase/firestore";
import { storage, db } from "@/firebase";
import { userStore } from "@/store/store";
import { IProduct } from "@/page/seller/IProduct";
import { useNavigate } from "react-router-dom";

export const useUploadProduct = () => {

    const navigate = useNavigate()
    const user = userStore(state => state.user);
    const [productFormData, setProductFormData] = useState<IProduct>({
        email: user.email,
        name: '',
        price: '',
        explain: '',
        images: []
    });
    const [showImages, setShowImages] = useState<string[]>([]);
    const [imageFiles, setImageFiles] = useState<File[]>([]);
    console.log(productFormData, showImages, imageFiles)

    //이미지 추가
    const handleAddImages = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        if (e.target.files && e.target.files.length > 0) {
            const filesArray = Array.from(e.target.files);
            const newImageUrls = filesArray.map(file => URL.createObjectURL(file));
            const newImageFiles = filesArray.slice(0, 5);

            //이미지 url 저장
            setShowImages(newImageUrls.slice(0, 5));
            //이미지 파일 저장
            setImageFiles(newImageFiles);
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
            //db products에 저장
            const productRef = collection(db, 'products');
            await addDoc(productRef, {
                ...productFormData,
                images: imageUrls
            });
            alert('이미지 업로드 완료')
            navigate('/sell')
        } catch (error) {
            alert('이미지 업로드 실패')
        }
    };

    //form input onchange
    const inputChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        setProductFormData({
            ...productFormData,
            [e.target.name]: e.target.value
        })
    }

    return {
        productFormData,
        showImages,
        handleAddImages,
        handleDeleteImage,
        handleSubmit,
        setProductFormData,
        inputChange
    };
};
