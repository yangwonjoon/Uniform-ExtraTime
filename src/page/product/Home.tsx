import { Nav } from "../../components/common/Nav";
import { useEffect, useState } from "react";
import { collection, getDocs, query, orderBy, where } from "firebase/firestore";
import { db } from "@/firebase";
import { IProductFormData } from "@/types/types";
import { ProductView } from "@/components/product/ProductView";

export const Home = () => {
    const [products, setProducts] = useState<IProductFormData[]>([]);

    useEffect(() => {
        const readProducts = async () => {
            const productsRef = collection(db, "products");
            const q = query(productsRef, where("isSell", "==", false), orderBy("createdAt", "desc"));
            try {
                const querySnapshot = await getDocs(q);
                const fetchedProducts = querySnapshot.docs.map(doc => ({
                    productId: doc.id,
                    ...doc.data() as IProductFormData
                }));
                setProducts(fetchedProducts);
            } catch (error) {
                console.log('ReadProduct 에러')
            }
        };
        readProducts();
    }, []);

    return (
        <div>
            <div className="container mx-auto">
                <div className="grid grid-cols-3 gap-4 mt-5">
                    {products && (
                        products.map((product, i) => (
                            <ProductView product={product} key={i}></ProductView>
                        ))
                    )}
                </div>
            </div>
        </div>

    )
}