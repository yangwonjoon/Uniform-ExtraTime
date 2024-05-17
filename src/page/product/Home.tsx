import { useQuery } from "@tanstack/react-query";
import { collection, getDocs, query, orderBy, where } from "firebase/firestore";
import { db } from "@/firebase";
import { IProductFormData } from "@/types/types";
import { ProductView } from "@/components/product/ProductView";
import homeimage from '../../assets/homeimage.jpg'
import { Loading } from "@/components/common/Loading";
import { Error } from "@/components/common/Error";

const homePageProducts = async () => {
    const productsRef = collection(db, "products");
    const q = query(productsRef, where("isSell", "==", false), orderBy("createdAt", "desc"));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
        productId: doc.id,
        ...doc.data() as IProductFormData
    }));
};

export const Home = () => {

    const { data: products, isLoading, error } = useQuery({
        queryKey: ["HomePageProducts"],
        queryFn: homePageProducts,
        staleTime: 1000 * 10, // 10초 동안 캐싱
        refetchOnMount: false, // 마운트 시 리패칭하지 않음
        refetchOnWindowFocus: false, // 윈도우 포커스 시 리패칭하지 않음
    });

    if (isLoading) return <Loading></Loading>;
    if (error) return <Error></Error>;

    return (
        <div>
            <div className="w-full h-80 bg-no-repeat bg-cover" style={{ backgroundImage: `url(${homeimage})` }}></div>
            <div className="container mx-auto my-5">
                <h1 className="font-bold text-xl">All products</h1>
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
