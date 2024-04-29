import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "@/firebase";

export const uploadProductImageFiles = async (file: File, userEmail: string, productName: string) => {

    const PRODUCT_NAME = productName.replace(/\//g, '_');
    const FILE_NAME = file.name.replace(/\//g, '_');
    const storageRef = ref(storage, `products/${userEmail}/${PRODUCT_NAME}/${FILE_NAME}`);

    try {
        await uploadBytes(storageRef, file);
        const imageUrl = await getDownloadURL(storageRef);
        return `${imageUrl}?timestamp=${new Date().getTime()}`;
    } catch (error) {
        console.log("uploadProductImageFiles 에러");
    }
};