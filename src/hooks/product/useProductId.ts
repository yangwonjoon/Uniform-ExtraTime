import { useEffect, useState } from 'react';
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase";
import { IProduct } from '@/page/seller/IProduct';

export const useProductId = (id: string | undefined) => {

    const [product, setProduct] = useState<IProduct | undefined>();


    useEffect(() => {
        if (!id) return;

        const updateProduct = async () => {
            const docRef = doc(db, "products", id);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                setProduct({ id: docSnap.id, ...docSnap.data() as IProduct });
            } else {
                console.error("useProductId error");
            }
        };

        updateProduct();
    }, [id]);

    return product;
};
