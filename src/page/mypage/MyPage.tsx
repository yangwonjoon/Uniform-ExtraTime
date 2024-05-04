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
import { useLogout } from "@/hooks/logout/useLogout";

export const Mypage = () => {

    const { user } = userStore()
    const { cart, addCart, removeCart } = cartStore()
    const [products, setProducts] = useState<IProductFormData[]>([])
    // const navigate = useNavigate()
    // const { logout } = useLogout()

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

    useEffect(() => {
        const productsFromCart = async () => {
            if (user.uid) {
                const productArr = [];

                for (const productId of cart) {
                    const docRef = doc(db, "products", productId);
                    const docSnap = await getDoc(docRef);

                    if (docSnap.exists()) {
                        productArr.push({ ...docSnap.data(), productId: docSnap.id } as IProductFormData);
                    } else {
                        console.log("product 정보 없음");
                    }
                }
                setProducts(productArr)
            } else {
                console.log('사용자 정보 찾을 수 없음')
            }
        }
        productsFromCart()
    }, [cart])

    return (
        <>
            <div>
                <Nav></Nav>
                {/* <div className="my-10">
                    {
                        !user.uid && <><div><button onClick={() => navigate('/signup')}>회원가입</button></div>
                            <div><button onClick={() => navigate('/login')}>로그인</button></div></>
                    }
                    {
                        user.uid && <><div><button onClick={logout}>로그아웃</button></div></>
                    }
                </div> */}
                <div className="w-full h-96 border border-black p-3">
                    <h1 className="text-lg font-bold mb-5">구매 내역</h1>
                </div>
                <div className="w-full h-96 border border-black p-3">
                    <h1 className="text-lg font-bold mb-5">관심 상품</h1>
                    <Carousel opts={{ align: "start", }} className="w-full">
                        <CarouselContent>
                            {products.map((product, index) => (
                                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                    <div className="p-1">
                                        <Card>
                                            <CardContent className="flex aspect-square items-center justify-center p-6 relative">
                                                <div key={index} className="mx-auto my-5 w-48 h-72 overflow-hidden">
                                                    <div className="flex items-center justify-center h-48 shadow-lg rounded-lg border border-black relative">
                                                        <img src={product.productImages[0]} alt="메인 이미지" className="object-contain h-full" />
                                                        {
                                                            product.productId && cart.includes(product.productId) ?
                                                                <FontAwesomeIcon icon={filledBookmark} className="absolute bottom-0 right-0 m-2" onClick={() => handleToggleCart(product.productId)} />
                                                                : <FontAwesomeIcon icon={bookmark} className="absolute bottom-0 right-0 m-2" onClick={() => handleToggleCart(product.productId)} />
                                                        }
                                                    </div>
                                                    <div className="flex flex-col p-3">
                                                        <h1 className="text-sm font-bold">{product.productName}</h1>
                                                        <p className="text-sm mb-2">{product.productDescription}</p>
                                                        <p className="text-sm font-semibold">{product.productPrice}원</p>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        {products.length > 3 && <CarouselPrevious />}
                        {products.length > 3 && <CarouselNext />}
                    </Carousel>
                </div>
            </div >
        </>
    )
}