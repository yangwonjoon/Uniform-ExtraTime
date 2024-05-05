import { useEffect, useState } from 'react';
import { Nav } from "../../components/common/Nav";
import { teams } from "@/constants/team";
import { collection, getDocs, query, orderBy, where } from "firebase/firestore";
import { db } from "@/firebase";
import { IProductFormData } from '@/types/types';
import { cartStore } from '@/store/cartStore';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark as bookmark } from '@fortawesome/free-regular-svg-icons';
import { faBookmark as filledBookmark } from '@fortawesome/free-solid-svg-icons';
import { userStore } from '@/store/userStore';

export const Team = () => {
    const [products, setProducts] = useState<IProductFormData[]>([]);
    const [teamSelected, setTeamSelected] = useState(0)
    const [expanded, setExpanded] = useState(false);
    const { cart, removeCart, addCart } = cartStore()
    const { user } = userStore()

    const handleToggle = () => {
        setExpanded(!expanded);
    };

    useEffect(() => {
        const readTeamProducts = async () => {
            const productsRef = collection(db, "products");
            const q = query(productsRef, where("productCategory", "==", teamSelected), orderBy("createdAt", "desc"));
            try {
                const querySnapshot = await getDocs(q);
                const fetchedProducts = querySnapshot.docs.map(doc => ({
                    productId: doc.id,
                    ...doc.data() as IProductFormData
                }));
                setProducts(fetchedProducts);
            } catch (error) {
                console.log('readTeamProducts 에러')
                console.log('readTeamProducts 에러:', error)
            }
        };
        readTeamProducts();
    }, [teamSelected])

    const handleToggleCart = (productId: string | undefined) => {
        if (!productId) {
            alert('제품 정보가 올바르지 않습니다.');
            return;
        }
        if (user.email && !user.isSeller) {
            if (cart.includes(productId)) {
                removeCart(productId)
            } else {
                addCart(productId)
            }
        } else {
            alert('구매자 아이디로 로그인해주세요!');
        }
    }

    console.log(products)

    return (
        <div>
            <Nav />
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
                    <button className='text-sm' onClick={handleToggle}>
                        {expanded ? '숨기기' : '더보기'}
                    </button>
                )}
            </div>
            <div className="grid grid-cols-3 gap-4 mt-5">
                {products && (
                    products.map((product, i) => (
                        <div key={i} className="mx-auto mb-3 w-48 h-72 overflow-hidden">
                            <div className="flex items-center justify-center h-48 shadow-lg rounded-lg border border-black relative">
                                <img src={product.productImages[0]} alt="메인 이미지" className="object-contain h-full" />
                                {
                                    product.productId && cart.includes(product.productId) ?
                                        <FontAwesomeIcon icon={filledBookmark} className="absolute bottom-0 right-0 m-2" onClick={() => handleToggleCart(product.productId)} />
                                        : <FontAwesomeIcon icon={bookmark} className="absolute bottom-0 right-0 m-2" onClick={() => handleToggleCart(product.productId)} />
                                }
                            </div>
                            <div className="flex flex-col p-3">
                                <h1 className="text-sm font-bold mb-1">{product.productName}</h1>
                                <p className="text-sm font-semibold">{product.productPrice}원</p>
                                {/* <p className="text-sm mb-2">{product.productDescription}</p> */}
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};
