import { Nav } from "../common/Nav";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { InputImages } from "./InputImages";
import { IProductFormData } from "@/types/types";

interface IProductFormProps {
    productFormData: IProductFormData;
    inputChange: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void;
    showImages: string[];
    handleAddImages: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleDeleteImage: (index: number) => void;
    handleSubmit: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const ProductForm = ({ productFormData, inputChange, showImages, handleAddImages, handleDeleteImage, handleSubmit }: IProductFormProps) => {
    console.log(showImages)
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
};
