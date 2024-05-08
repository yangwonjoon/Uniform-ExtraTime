import { Nav } from "../../components/common/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark as bookmark } from '@fortawesome/free-regular-svg-icons';
import { faBookmark as filledBookmark } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from "react";
import { collection, getDocs, query, orderBy, where } from "firebase/firestore";
import { db } from "@/firebase";
import { IProductFormData } from "@/types/types";
import { cartStore } from "@/store/cartStore";
import { userStore } from "@/store/userStore";
import { useNavigate } from "react-router-dom";

export const Home = () => {
    const [products, setProducts] = useState<IProductFormData[]>([]);
    const navigate = useNavigate()
    const { cart, addCart, removeCart } = cartStore()
    const { user } = userStore()

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
                console.log('useReadProduct 에러')
                console.log('useReadProduct 에러:', error)
            }
        };
        readProducts();
    }, []);

    const handleToggleCart = (productId: string | undefined, e: React.MouseEvent) => {
        e.stopPropagation();
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

    return (
        <div>
            <Nav></Nav>
            <div className="container mx-auto">
                <div className="grid grid-cols-3 gap-4">
                    {products && (
                        products.map((product, i) => (
                            <div key={i} className="mx-auto mb-3 w-48 h-72 overflow-hidden" onClick={() => navigate(`/${product.productId}`)}>
                                <div className="flex items-center justify-center h-48 shadow-lg rounded-lg border border-black relative">
                                    <img src={product.productImages[0]} alt="메인 이미지" className="object-contain h-full" />
                                    {
                                        product.productId && cart.includes(product.productId) ?
                                            <FontAwesomeIcon icon={filledBookmark} className="absolute bottom-0 right-0 m-2" onClick={(e) => handleToggleCart(product.productId, e)} />
                                            : <FontAwesomeIcon icon={bookmark} className="absolute bottom-0 right-0 m-2" onClick={(e) => handleToggleCart(product.productId, e)} />
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
        </div>

    )
}




{/* <div className="flex justify-between mt-4">
                                            <button className="px-4 py-2 bg-green-500 text-white rounded-md">구매하기</button>
                                            <button className="px-4 py-2 bg-yellow-500 text-white rounded-md">장바구니</button>
                                           </div> */}