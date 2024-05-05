import { RequestPayParams, RequestPayResponse } from 'iamport-typings';

interface IPaymentForm {
    name: string;
    tel: string;
    email: string;
}

export const handlePayment = ({ name, tel, email }: IPaymentForm) => {
    if (!window.IMP) return;

    const { IMP } = window;
    IMP?.init('imp48760701')

    const data: RequestPayParams = {
        pg: "html5_inicis", // PG사 
        pay_method: "card", // 결제수단
        merchant_uid: `mid_${new Date().getTime()}`, // 주문번호
        amount: 1, // 결제금액
        name: '홍길동', // 주문명
        buyer_name: 'name', // 구매자 이름
        buyer_tel: 'tel', // 구매자 전화번호
        buyer_email: 'email', // 구매자 이메일
    };
    IMP.request_pay(data, callback);
}

function callback(response: RequestPayResponse) {
    const { success, error_msg, imp_uid } = response;

    if (success) {
        console.log('결제 성공', imp_uid);
        alert("결제 성공");
        // 성공 후 예상되는 행동 추가, 예: 페이지 리디렉션
    } else {
        console.error('결제 실패:', error_msg);
        alert(`결제 실패: ${error_msg}`);
    }
}

