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
            <form onSubmit={handleSubmit}>
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

                    <div className="flex flex-wrap justify-center items-center mt-4 mb-4">
                        {showImages.map((image, i) => (
                            <div key={i} className="w-48 h-32 p-2 border flex flex-col justify-center items-center">
                                <p className="self-end" onClick={() => handleDeleteImage(i)}>삭제</p>
                                <img src={image} alt={`사진 ${i + 1}`} className="max-w-full max-h-full" />
                            </div>
                        ))}
                    </div>

                    <div className="text-center">
                        <label htmlFor="input-file" className="cursor-pointer mt-4 inline-block font-bold py-2 px-4 rounded">
                            이미지 추가하기
                            <input type="file" id="input-file" multiple onChange={handleAddImages} className="hidden" />
                        </label>
                    </div>

                    <div className="text-center">
                        <button className="mt-4 ml-4 font-bold py-2 px-4 rounded" type="submit">
                            등록하기
                        </button>
                    </div>
                </div>
            </form>
        </>
    );
} 