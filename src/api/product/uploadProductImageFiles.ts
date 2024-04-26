import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "@/firebase";

export const uploadProductImageFiles = async (file: File, userEmail: string, productName: string) => {
    const storageRef = ref(storage, `products/${userEmail}/${productName}/${file.name}`);
    try {
        await uploadBytes(storageRef, file);
        const imageUrl = await getDownloadURL(storageRef);
        return `${imageUrl}?timestamp=${new Date().getTime()}`;
    } catch (error) {
        console.log("uploadProductImageFiles 에러");
    }
};