import { RequestPayParams, RequestPayResponse } from 'iamport-typings';
import { db } from "@/firebase";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { IProductFormData } from '@/types/types';
import { User } from '@/store/types';
import { useNavigate } from 'react-router-dom';

interface IPaymentFormProps {
    name: string;
    tel: string;
    email: string;
    product?: IProductFormData;
    user: User
}

export const handlePayment = ({ name, tel, email, product, user }: IPaymentFormProps) => {
    const navigate = useNavigate()
    if (!window.IMP) return;

    const { IMP } = window;
    IMP?.init('imp48760701')

    const data: RequestPayParams = {
        pg: "html5_inicis", // PG사 
        pay_method: "card", // 결제수단
        merchant_uid: `mid_${new Date().getTime()}`, // 주문번호
        amount: 1, // 결제금액
        name: product?.productName, // 주문명
        buyer_name: name, // 구매자 이름
        buyer_tel: tel, // 구매자 전화번호
        buyer_email: email, // 구매자 이메일
    };

    IMP.request_pay(data, async (response: RequestPayResponse) => {

        const { success, error_msg, imp_uid } = response;
        if (success) {
            console.log('결제 성공', imp_uid);
            // 결제 성공 시 주문 정보 생성
            try {
                const orderData = {
                    sellerId: product?.userEmail,
                    buyerId: user.email,
                    productId: product?.productId,
                    status: '주문 완료',
                    updatedAt: new Date(),
                    createdAt: new Date(),
                };

                const orderRef = collection(db, "orders");
                const docRef = await addDoc(orderRef, orderData);
                console.log("Order created with ID: ", docRef.id);

                if (product?.productId) {
                    const productRef = doc(db, "products", product.productId);
                    await updateDoc(productRef, { isSell: true });
                    console.log("Product updated to sold: ", product.productId);
                }
                alert("결제 성공: 주문이 완료되었습니다.");
                navigate('/mypage')
            } catch (error) {
                console.error("Order creation failed:", error);
            }

            alert("결제 성공");
        } else {
            console.error('결제 실패:', error_msg);
            alert(`결제 실패: ${error_msg}`);
        }
    }
    )
}