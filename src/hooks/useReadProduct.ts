import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/firebase";
import { IProduct } from "@/page/seller/IProduct";

export const useReadProduct = (user_email: string) => {

    const [products, setProducts] = useState<IProduct[]>([]);

    useEffect(() => {

        const readProducts = async () => {

            if (!user_email) return;
            //fireStore의 products db 담음
            const productsRef = collection(db, "products");
            //products db 중 user.email(현재 로그인한 유저 이메일) 선택 쿼리
            const q = query(productsRef, where("user_email", "==", user_email));
            try {
                //user.email의 db데이터 querySnapshot에 담아서 setProducts에 담음
                const querySnapshot = await getDocs(q);
                const fetchedProducts = querySnapshot.docs.map(doc => ({
                    id: doc.id,  // 자동 생성 document.id
                    ...doc.data() as IProduct
                }));
                console.log(fetchedProducts)
                setProducts(fetchedProducts);
            } catch (error) {
                console.log('useReadProduct 에러')
            }
        };
        readProducts();
    }, [user_email]);

    //완성된 products 반환
    return products;
};
