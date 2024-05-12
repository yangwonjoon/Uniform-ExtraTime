import { useParams } from "react-router-dom";
import { useGetProductFormData } from "@/hooks/sell/useGetProductById";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { handlePayment } from "@/api/payment/handlePayment";
import { useState, useEffect } from "react";
import { AlertDialog, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog"
import { Input } from "@/components/ui/input";
import { validateEmail, validateName, validateTel } from "@/utils/validation";
import { userStore } from "@/store/userStore";
import { useQuery } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase";
import { IProductFormData } from "@/types/types";

const fetchProductData = async (productId: string) => {
    const docRef = doc(db, "products", productId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return {
            productId: docSnap.id,
            ...docSnap.data() as IProductFormData
        };
    } else {
        throw new Error("Product not found");
    }
};

export const ProductDetail = () => {
    const { user } = userStore()
    // const { productId } = useParams();
    // const product = useGetProductFormData(productId as string);

    const { productId } = useParams();
    const queryClient = useQueryClient();
    const { data: product, isLoading, error } = useQuery({
        queryKey: ['product', productId],
        queryFn: () => fetchProductData(productId as string),
        initialData: () => queryClient.getQueryData(['product', productId]),
        staleTime: 5000
    });

    const [msg, setMsg] = useState('')
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [paymentForm, setPaymentForm] = useState({
        name: '',
        tel: '',
        email: '',
        product: product,
        user: user
    })

    useEffect(() => {
        if (product) {
            setPaymentForm(prevForm => ({
                ...prevForm,
                product: product
            }));
        }
    }, [product]);

    const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPaymentForm({ ...paymentForm, [e.target.name]: e.target.value })
    }

    const handleOpen = () => {
        if (!user.email) {
            alert("구매자 아이디 로그인이 필요합니다.");
        } else if (user.isSeller) {
            alert("구매자 아이디 로그인이 필요합니다.");
        } else {
            setIsDialogOpen(true);
        }
    };

    const handleClose = () => {
        setIsDialogOpen(false);
        setPaymentForm({ name: '', tel: '', email: '', user: user, product: product });
    };

    const handleSubmit = () => {
        if (!validateName(paymentForm.name)) {
            setMsg("이름을 입력해주세요");
            return;
        }
        if (!validateTel(paymentForm.tel)) {
            setMsg("휴대폰 번호를 입력해주세요");
            return;
        }
        if (!validateEmail(paymentForm.email)) {
            setMsg("email 형식에 맞춰 주세요");
            return;
        }
        setIsDialogOpen(false);
        handlePayment(paymentForm);
    };

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error fetching product details.</div>;

    return (
        <div className="flex w-full h-full pt-10">
            <div className="flex-1 py-6 relative">
                <Carousel className="w-full max-w-xs mx-auto">
                    <CarouselContent>
                        {product && product.productImages.map((image, index) => (
                            <CarouselItem key={index}>
                                <Card>
                                    <CardContent className="flex aspect-square items-center justify-center p-3">
                                        <img src={image} alt={`Product image ${index + 1}`} className="object-cover"></img>
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 text-2xl z-10 cursor-pointer"></CarouselPrevious>
                    <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 text-2xl z-10 cursor-pointer"></CarouselNext>
                </Carousel>
            </div>
            <div className="flex-1 p-5 ml-5 flex flex-col justify-items-center">
                <p>즉시 구매가</p>
                <h2 className="text-2xl font-bold mb-10">{product?.productPrice}원</h2>

                <h1 className="text-lg font-bold">{product?.productName}</h1>
                <p className="mb-10">{product?.productDescription}</p>
                {
                    !product?.isSell
                    && <><AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                        <button onClick={handleOpen} className="text-base font-medium py-2 px-4 border border-gray text-gray-800 rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50">주문하기</button>
                        <AlertDialogContent>
                            <AlertDialogHeader className="mb-5">
                                <AlertDialogTitle>주문 정보</AlertDialogTitle>
                            </AlertDialogHeader>
                            <Input type="NAME" name="name" placeholder="NAME" className="w-full h-12 mb-4" onChange={inputChange} />
                            <Input type="TEL" name="tel" placeholder="PHONE" className="w-full h-12 mb-4" onChange={inputChange} />
                            <Input type="EMAIL" name="email" placeholder="EMAIL" className="w-full h-12 mb-4" onChange={inputChange} />
                            <div className="text-center pt-5">
                                {msg && <p className="text-red-500 pb-5 font-bold">{msg}</p>}
                            </div>
                            <AlertDialogFooter>
                                <button onClick={handleSubmit} className="text-base font-medium py-2 px-4 border border-gray text-gray-800 rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50">Order</button>
                                <button onClick={handleClose} className="text-base font-medium py-2 px-4 border border-gray-300 text-gray-800 rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50">Cancel</button>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
                        <button className="text-base font-medium py-2 px-4 border border-gray text-gray-800 rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 mt-3">장바구니</button>
                    </>
                }
            </div>
        </div>
    );
};
