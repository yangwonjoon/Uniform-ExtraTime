import { useEffect, useState } from 'react';
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase";
import { IProductFormData } from '@/types/types';

export const useGetProductById = (productId: string | undefined) => {

    const [product, setProduct] = useState<IProductFormData | undefined>();

    useEffect(() => {
        if (!productId) return;

        const updateProduct = async () => {
            const docRef = doc(db, "products", productId);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                setProduct({ productId: docSnap.id, ...docSnap.data() as IProductFormData });
            } else {
                console.error("useProductId error");
            }
        };

        updateProduct();
    }, [productId]);

    return product;
};