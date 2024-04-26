import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/firebase";
import { IProductFormData } from "@/types/types";

//이메일 넣으면 product 정보 반환
export const useReadProduct = (email: string) => {

    const [products, setProducts] = useState<IProductFormData[]>([]);

    useEffect(() => {

        const readProducts = async () => {

            if (!email) return;
            //fireStore의 products db 담음
            const productsRef = collection(db, "products");
            //products db 중 user.email(현재 로그인한 유저 이메일) 선택 쿼리
            const q = query(productsRef, where("userEmail", "==", email));
            try {
                //user.email의 db데이터 querySnapshot에 담아서 setProducts에 담음
                const querySnapshot = await getDocs(q);
                const fetchedProducts = querySnapshot.docs.map(doc => ({
                    id: doc.id,  // 자동 생성 document.id
                    ...doc.data() as IProductFormData
                }));

                setProducts(fetchedProducts);
            } catch (error) {
                console.log('useReadProduct 에러')
            }
        };
        readProducts();
    }, [email]);

    //완성된 products 반환
    return products;
};
