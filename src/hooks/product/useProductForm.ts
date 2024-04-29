import { useState } from "react";
import { IProductFormData } from "@/types/types";
import { validateProductName } from "@/utils/validation";
import { validateProductDescription } from "@/utils/validation";
import { validateProductPrice } from "@/utils/validation";

export const useProductForm = (initialState: IProductFormData, setMsg: (setStateAction: string) => void) => {
    const [productFormData, setProductFormData] = useState<IProductFormData>(initialState);

    const inputChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        setMsg('');

        setProductFormData({
            ...productFormData,
            [e.target.name]: e.target.value
        });
    };

    const validateProductForm = () => {

        // 상품명 검증
        if (!validateProductName(productFormData.productName)) {
            setMsg('상품명을 입력해주세요.');
            return false;
        }
        // 가격 검증
        if (!validateProductPrice(productFormData.productPrice)) {
            setMsg('유효한 가격을 입력해주세요.');
            return false;
        }
        // 상품 설명 검증
        if (!validateProductDescription(productFormData.productDescription)) {
            setMsg('상품 설명은 최소 10자 이상이어야 합니다.');
            return false;
        }

        setMsg(''); // 모든 검증을 통과하면 메시지를 초기화
        return true;
    };



    return {
        productFormData,
        setProductFormData,
        inputChange,
        validateProductForm,
    };
};
