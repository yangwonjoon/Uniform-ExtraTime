import { useEffect, useState } from 'react';
import { teams } from "@/constants/team";
import { collection, getDocs, query, orderBy, where } from "firebase/firestore";
import { db } from "@/firebase";
import { IProductFormData } from '@/types/types';
import { ProductView } from '@/components/product/ProductView';

export const Team = () => {
    const [products, setProducts] = useState<IProductFormData[]>([]);
    const [teamSelected, setTeamSelected] = useState(0)
    const [expanded, setExpanded] = useState(false);

    const handleExpandedToggle = () => {
        setExpanded(!expanded);
    };

    useEffect(() => {
        const readTeamProducts = async () => {
            const productsRef = collection(db, "products");
            const q = query(productsRef, where("isSell", "==", false), where("productCategory", "==", teamSelected), orderBy("createdAt", "desc"));
            try {
                const querySnapshot = await getDocs(q);
                const fetchedProducts = querySnapshot.docs.map(doc => ({
                    productId: doc.id,
                    ...doc.data() as IProductFormData
                }));
                setProducts(fetchedProducts);
            } catch (error) {
                console.log('readTeamProducts 에러')
            }
        };
        readTeamProducts();
    }, [teamSelected])

    return (
        <div>
            <div className="container mx-auto grid grid-cols-4 gap-4 mt-10">
                {teams.slice(0, expanded ? teams.length : 4).map((team, index) => (
                    <div key={index} className="text-center">
                        <p className="text-sm text-gray-500 cursor-pointer font-bold"
                            onClick={() => setTeamSelected(team.id)}
                        >#{team.koreanName}</p>
                    </div>
                ))}
            </div>
            <div className="text-right mt-4">
                {teams.length > 4 && (
                    <button className='text-sm' onClick={handleExpandedToggle}>
                        {expanded ? '숨기기' : '더보기'}
                    </button>
                )}
            </div>
            <div className="grid grid-cols-3 gap-4 mt-5">
                {products && (
                    products.map((product, i) => (
                        <ProductView product={product} key={i}></ProductView>
                    ))
                )}
            </div>
        </div>
    );
};
