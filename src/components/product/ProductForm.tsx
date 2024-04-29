import { Dispatch, SetStateAction } from 'react';
import { Nav } from "../common/Nav";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { InputImages } from "./InputImages";
import { IProductFormData } from "@/types/types";
import { TeamModal } from "./TeamModal";

interface IProductFormProps {
    productFormData: IProductFormData;
    setProductFormData: Dispatch<SetStateAction<IProductFormData>>;
    inputChange: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void;
    showImages: string[];
    handleAddImages: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleDeleteImage: (index: number) => void;
    handleSubmit: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    msg: string;
}

export const ProductForm = ({ productFormData, setProductFormData, inputChange, showImages, handleAddImages, handleDeleteImage, handleSubmit, msg }: IProductFormProps) => {
    return (
        <>
            <Nav />
            <div className="pt-10 flex flex-col items-center min-h-screen">
                <div className="grid w-2/3 max-w-sm items-center gap-1.5 mb-5">
                    <Label htmlFor="name" className="font-bold">상품명</Label>
                    <Input type="text" id="name" placeholder="상품명을 입력해주세요" name="productName" value={productFormData.productName} onChange={inputChange} />
                </div>
                <div className="grid w-2/3 max-w-sm items-center gap-1.5 mb-5">
                    <Label htmlFor="price" className="font-bold">가격</Label>
                    <Input type="text" id="price" placeholder="상품가격을 입력해주세요" name="productPrice" value={productFormData.productPrice} onChange={inputChange} />
                </div>
                <div className="grid w-2/3 max-w-sm items-center gap-1.5 mb-5">
                    <TeamModal setProductFormData={setProductFormData} productFormData={productFormData}></TeamModal>
                </div>
                <div className="grid w-2/3 max-w-sm items-center gap-1.5 mb-5">
                    <Label htmlFor="explain" className="font-bold">상품설명</Label>
                    <Textarea placeholder="상품설명을 입력해주세요" id="explain" name="productDescription" value={productFormData.productDescription} onChange={inputChange} />
                </div>

                <InputImages showImages={showImages} handleAddImages={handleAddImages} handleDeleteImage={handleDeleteImage}></InputImages>

                {msg && <div className="text-red-500 mt-5 text-sm font-bold">{msg}</div>}
                <div className="text-center">
                    <button className="bg-main w-32 h-12 mt-4 py-2 px-4 rounded-md text-white font-bold rounded" onClick={handleSubmit}>
                        등록하기
                    </button>
                </div>
            </div>
        </>
    );
};
