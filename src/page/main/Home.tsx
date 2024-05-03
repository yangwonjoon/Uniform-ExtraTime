import { Nav } from "../../components/common/Nav";
import { useEffect, useState } from "react";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "@/firebase";
import { IProductFormData } from "@/types/types";

export const Home = () => {
    const [products, setProducts] = useState<IProductFormData[]>([]);
    useEffect(() => {
        const readProducts = async () => {
            const productsRef = collection(db, "products");
            const q = query(productsRef, orderBy("createdAt", "desc"));
            try {
                const querySnapshot = await getDocs(q);
                const fetchedProducts = querySnapshot.docs.map(doc => ({
                    productId: doc.id,
                    ...doc.data() as IProductFormData
                }));
                setProducts(fetchedProducts);
            } catch (error) {
                console.log('useReadProduct 에러')
                console.log('useReadProduct 에러:', error)
            }
        };
        readProducts();
    }, []);

    return (
        <div>
            <Nav></Nav>
            <div className="container mx-auto">
                <div className="grid grid-cols-3 gap-4">
                    {products && (
                        products.map((product, i) => (
                            <div key={i} className="mx-auto my-5  w-48">
                                <div className="flex items-center justify-center p-3 h-48 shadow-lg rounded-lg border border-black relative">
                                    <div className="w-full h-full ">
                                        <img src={product.productImages[0]} alt="메인 이미지" className="object-contain w-full h-full" />
                                        <button className="absolute bottom-0 right-0 m-2 py-1 bg-black text-white rounded-md">찜</button>
                                    </div>
                                </div>
                                <div className="flex flex-col p-3">
                                    <h1 className="font-bold">{product.productName}</h1>
                                    <p className="mb-2">{product.productDescription}</p>
                                    <p className="font-semibold text-md">{product.productPrice}원</p>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>

    )
}


{/* <div className="flex justify-between mt-4">
                                            <button className="px-4 py-2 bg-green-500 text-white rounded-md">구매하기</button>
                                            <button className="px-4 py-2 bg-yellow-500 text-white rounded-md">장바구니</button>
                                           </div> */}