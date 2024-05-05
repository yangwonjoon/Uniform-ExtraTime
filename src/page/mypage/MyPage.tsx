import { cartStore } from "@/store/cartStore";
import { Nav } from "../../components/common/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark as bookmark } from '@fortawesome/free-regular-svg-icons';
import { faBookmark as filledBookmark } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from "react";
import { userStore } from "@/store/userStore";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase";
import { IProductFormData } from "@/types/types";
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useNavigate } from "react-router-dom";
import { collection, query, where, getDocs } from "firebase/firestore";
// import { useLogout } from "@/hooks/logout/useLogout";

export const Mypage = () => {

    const { user } = userStore()
    const { cart, addCart, removeCart } = cartStore()
    const [cartProducts, setCartProducts] = useState<IProductFormData[]>([])
    const [orderProducts, setOrderProducts] = useState<IProductFormData[]>([])
    const navigate = useNavigate()
    // const { logout } = useLogout()

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

    useEffect(() => {
        const productFromCart = async () => {
            if (!user.uid) return;
            const productArr = [];

            for (const productId of cart) {
                const docRef = doc(db, "products", productId);
                const docSnap = await getDoc(docRef);
                console.log(docSnap.data())
                if (docSnap.exists() && !docSnap.data().isSell) {
                    productArr.push({ ...docSnap.data(), productId: docSnap.id } as IProductFormData);
                } else {
                    console.log("cart product 정보 없음");
                }
            }
            setCartProducts(productArr)

        }
        productFromCart()
    }, [cart])

    useEffect(() => {
        const productFromOrders = async () => {
            if (!user.uid) return;

            const ordersRef = collection(db, "orders");
            const q = query(ordersRef, where("buyerId", "==", user.email));
            const ordersQuerySnapshot = await getDocs(q);

            const productIds = ordersQuerySnapshot.docs.map(doc => doc.data().productId);
            const productDetails = [];

            for (const id of productIds) {
                const productRef = doc(db, "products", id);
                const productSnap = await getDoc(productRef);

                if (productSnap.exists()) {
                    productDetails.push({ ...productSnap.data(), productId: id } as IProductFormData);
                }
            }
            setOrderProducts(productDetails);
        }
        productFromOrders()
    }, [])

    return (
        <>
            <div>
                <Nav></Nav>
                <div className="w-full p-3">
                    <h1 className="text-lg font-bold mb-5">구매 내역</h1>
                    <Carousel opts={{ align: "start", }} className="w-full">
                        <CarouselContent>
                            {orderProducts.map((product, index) => (
                                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                    <div className="p-1">
                                        <Card>
                                            <CardContent className="flex aspect-square items-center justify-center p-6 relative">
                                                <div className="mx-auto mb-3 w-48 h-72 overflow-hidden" onClick={() => navigate(`/${product.productId}`)}>
                                                    <div className="flex items-center justify-center h-48 shadow-lg rounded-lg border border-black relative">
                                                        <img src={product.productImages[0]} alt="메인 이미지" className="object-contain h-full" />
                                                    </div>
                                                    <div className="flex flex-col p-3">
                                                        <h1 className="text-sm font-bold mb-1">{product.productName}</h1>
                                                        <p className="text-sm font-semibold">{product.productPrice}원</p>
                                                        {/* <p className="text-sm mb-2">{product.productDescription}</p> */}
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        {orderProducts.length > 3 && <CarouselPrevious />}
                        {orderProducts.length > 3 && <CarouselNext />}
                    </Carousel>
                </div>
                <div className="w-full p-3">
                    <h1 className="text-lg font-bold mb-5">관심 상품</h1>
                    <Carousel opts={{ align: "start", }} className="w-full">
                        <CarouselContent>
                            {cartProducts.map((product, index) => (
                                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                    <div className="p-1">
                                        <Card>
                                            <CardContent className="flex aspect-square items-center justify-center p-6 relative">
                                                <div className="mx-auto mb-3 w-48 h-72 overflow-hidden" onClick={() => navigate(`/${product.productId}`)}>
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
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        {cartProducts.length > 3 && <CarouselPrevious />}
                        {cartProducts.length > 3 && <CarouselNext />}
                    </Carousel>
                </div>
            </div >
        </>
    )
}