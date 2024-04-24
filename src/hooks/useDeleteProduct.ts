import { doc, deleteDoc } from "firebase/firestore";
import { db } from "@/firebase";

//product의 id 받으면 해당 doc 삭제
export const useDeleteProduct = () => {

    const deleteProductById = async (productId: string) => {
        const productRef = getProductRef(productId);
        try {
            await deleteDoc(productRef);
            console.log("삭제 완료:", productId)
        } catch (error) {
            console.log("삭제 실패:", error);
        }
    };

    //product의 id값 넣으면 해당 doc 반환
    const getProductRef = (productId: string) => {
        return doc(db, "products", productId);
    };

    return deleteProductById;
};
