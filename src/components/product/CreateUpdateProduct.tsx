import * as React from "react"
import { Nav } from "@/components/common/Nav";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea";
import { useUploadProduct } from "@/hooks/product/useUploadProduct";
import { useProductId } from "@/hooks/product/useProductId";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { userStore } from "@/store/store";
import { IProductFormData } from "@/types/types";
import { InputImages } from "./InputImages";

export const CreateUpdateProduct = () => {

    //update시
    const { productId } = useParams();
    const product = useProductId(productId);
    useEffect(() => {
        if (product) {
            setProductFormData(product);
        }
    }, [product]);


    const user = userStore(state => state.user);
    const today = new Date()
    const [productFormData, setProductFormData] = useState<IProductFormData>({
        userEmail: user.email,
        productName: '',
        productPrice: '',
        productDescription: '',
        productImages: [],
        createdAt: today,
        updatedAt: today
    });

    const inputChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        setProductFormData({
            ...productFormData,
            [e.target.name]: e.target.value
        })
    }

    const { showImages, handleAddImages, handleDeleteImage, handleSubmit } = useUploadProduct(productFormData);

    return (
        <>
            <Nav />
            <div className="pt-10 flex flex-col items-center min-h-screen">
                <div className="grid w-2/3 max-w-sm items-center gap-1.5 mb-5">
                    <Label htmlFor="name">상품명</Label>
                    <Input type="text" id="name" placeholder="상품명을 입력해주세요" name="productName" value={productFormData.productName} onChange={inputChange} />
                </div>
                <div className="grid w-2/3 max-w-sm items-center gap-1.5 mb-5">
                    <Label htmlFor="price">가격</Label>
                    <Input type="text" id="price" placeholder="상품가격을 입력해주세요" name="productPrice" value={productFormData.productPrice} onChange={inputChange} />
                </div>
                <div className="grid w-2/3 gap-1.5 mb-5">
                    <Label htmlFor="explain">상품설명</Label>
                    <Textarea placeholder="상품설명을 입력해주세요" id="explain" name="productDescription" value={productFormData.productDescription} onChange={inputChange} />
                </div>

                <InputImages showImages={showImages} handleAddImages={handleAddImages} handleDeleteImage={handleDeleteImage}></InputImages>

                <div className="text-center">
                    <button className="mt-4 ml-4 font-bold py-2 px-4 rounded" onClick={handleSubmit}>
                        등록하기
                    </button>
                </div>
            </div>
        </>
    );
} 