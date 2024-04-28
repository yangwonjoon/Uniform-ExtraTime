import { ref, deleteObject } from "firebase/storage";
import { storage } from "@/firebase";

export const deleteProductImage = async (url: string) => {
    // Blob URL이면 삭제 요청을 보내지 않음
    if (url.startsWith('blob:')) {
        console.log("Skipping blob URL:", url);
        return;
    }

    try {
        const imageRef = ref(storage, url);
        await deleteObject(imageRef);
        console.log("Image successfully deleted from Firebase Storage:", url);
    } catch (error) {
        console.error("Failed to delete image from Firebase Storage:", url, error);
    }
};
