import { Nav } from "../../components/common/Nav";
import { useEffect, useState } from "react";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "@/firebase";
import { IProductFormData } from "@/types/types";
import { ProductView } from "@/components/product/ProductView";

export const Home = () => {
    const [products, setProducts] = useState<IProductFormData[]>([]);
    useEffect(() => {

        const readProducts = async () => {

            const productsRef = collection(db, "products");
            const q = query(productsRef, orderBy("updatedAt", "desc"));
            try {
                const querySnapshot = await getDocs(q);
                const fetchedProducts = querySnapshot.docs.map(doc => ({
                    productId: doc.id,
                    ...doc.data() as IProductFormData
                }));
                setProducts(fetchedProducts);
            } catch (error) {
                console.log('useReadProduct 에러')
            }
        };
        readProducts();
    }, [products]);

    return (
        <div>
            <Nav></Nav>
            {products && (
                products.map((product, i) => (
                    <ProductView product={product} i={i}></ProductView>
                )))
            }
        </div>
    )
}