import { useState } from "react";
import { IProductFormData } from "@/types/types";

export const useProductForm = (initialState: IProductFormData) => {

    const [productFormData, setProductFormData] = useState<IProductFormData>(initialState);

    const inputChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        setProductFormData({
            ...productFormData,
            [e.target.name]: e.target.value
        });
    };

    return {
        productFormData,
        setProductFormData,
        inputChange
    };
};