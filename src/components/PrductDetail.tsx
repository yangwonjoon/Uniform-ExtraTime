import { useParams } from "react-router-dom";
import { useGetProductFormData } from "@/hooks/product/useGetProductById";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { handlePayment } from "@/api/handlePayment";
import { useState } from "react";
import { AlertDialog, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input";
import { validateEmail, validateName, validateTel } from "@/utils/validation";


export const ProductDetail = () => {
    const { productId } = useParams();
    const product = useGetProductFormData(productId as string);
    const [msg, setMsg] = useState('')
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [paymentForm, setPaymentForm] = useState({
        name: '',
        tel: '',
        email: ''
    })

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
        handlePayment(paymentForm);
    };
    const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPaymentForm({ ...paymentForm, [e.target.name]: e.target.value })
    }
    const handleClose = () => {
        setIsDialogOpen(false);
        setPaymentForm({ name: '', tel: '', email: '' });
    };

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
            <div className="flex-1 p-5 ml-5">
                <h1 className="text-lg font-bold mb-5">{product?.productName}</h1>
                <h2 className="text-lg font-bold">{product?.productPrice}원</h2>
                <p className="mb-10">{product?.productDescription}</p>
                <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                    <AlertDialogTrigger asChild>
                        <Button variant="outline" onClick={() => setIsDialogOpen(true)}>구매하기</Button>
                    </AlertDialogTrigger>
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
            </div>
        </div>
    );
};
