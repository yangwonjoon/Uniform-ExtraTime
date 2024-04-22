import React, { useState } from "react";
import { Nav } from "@/components/common/nav";
import { storage } from "../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea";
import { setDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";
import { userStore } from "@/store/store";

interface IProductFormData {
    name: string,
    price: string,
    explain: string,
    images: []
}

export const Sell = () => {

    const user = userStore(state => state.user)
    const [formData, setFormData] = useState<IProductFormData>({
        name: '',
        price: '',
        explain: '',
        images: []
    })

    //이미지 url 저장
    const [showImages, setShowImages] = useState<string[]>([]);
    //파일 객체 저장
    const [imageFiles, setImageFiles] = useState<File[]>([]);

    const handleAddImages = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            const files: FileList = event.target.files
            let newImageUrl = [...showImages];
            let newImageFiles = [...imageFiles];

            for (let i = 0; i < files.length; i++) {
                //createObjectURL : 매개변수로 이미지를 넣고 상대경로를 반환
                const currentImageUrl = URL.createObjectURL(files[i]);
                newImageUrl.push(currentImageUrl);
                newImageFiles.push(files[i]);
            };

            //5개 넘게 선택시 5개까지
            if (newImageUrl.length > 5) {
                newImageUrl = newImageUrl.slice(0, 5);
                newImageFiles = newImageFiles.slice(0, 5);
            }

            setShowImages(newImageUrl);
            setImageFiles(newImageFiles);
        }
    };

    //선택한 이미지 삭제
    const handleDeleteImage = (id: number) => {
        setShowImages(showImages.filter((_, index) => index !== id));
        setImageFiles(imageFiles.filter((_, index) => index !== id));
    };

    //이미지 storage에 저장
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            const list: string[] = []
            for (let i = 0; i < imageFiles.length; i++) {
                const image = imageFiles[i];
                const storageRef = ref(storage, `${user.uid}/${formData.name}/${image.name}`);
                await uploadBytes(storageRef, image);

                const downloadUrl = await getDownloadURL(storageRef);
                list.push(downloadUrl)
            }

            //여기 문서 이름 뭐로할꺼 hello말고
            const dbUsers = doc(db, user.uid, formData.name);
            await setDoc(dbUsers, {
                name: formData.name,
                price: formData.price,
                explain: formData.explain,
                images: list
            });

            console.log("이미지 업로드 성공");
            setShowImages([]);
            setImageFiles([]);

        } catch (error) {
            console.error("이미지 업로드 실패 ");
            setShowImages([]);
            setImageFiles([]);
        }
    };

    return (
        <>
            <Nav />
            <form onSubmit={handleSubmit}>
                <div className="pt-10 flex flex-col items-center min-h-screen">
                    <div className="grid w-2/3 max-w-sm items-center gap-1.5 mb-5">
                        <Label htmlFor="name">상품명</Label>
                        <Input type="text" id="name" placeholder="ex) 리버풀 18/19 시즌 홈킷" onChange={(e) => {
                            {
                                setFormData({
                                    ...formData,
                                    name: e.target.value
                                })
                            }
                        }} />
                    </div>
                    <div className="grid w-2/3 max-w-sm items-center gap-1.5 mb-5">
                        <Label htmlFor="price">가격</Label>
                        <Input type="text" id="price" placeholder="ex) 120000" onChange={(e) => {
                            {
                                setFormData({
                                    ...formData,
                                    price: e.target.value
                                })
                            }
                        }} />
                    </div>
                    <div className="grid w-2/3 gap-1.5 mb-5">
                        <Label htmlFor="explain">상품설명</Label>
                        <Textarea placeholder="ex) 유럽현지에서 산 정품입니다. 실착 x, s급이에요" id="explain" onChange={(e) => {
                            {
                                setFormData({
                                    ...formData,
                                    explain: e.target.value
                                })
                            }
                        }} />
                    </div>

                    {/* 파일 한번에 여러개 선택 */}
                    <div className="flex flex-wrap justify-center items-center mt-4 mb-4">
                        {showImages.map((image, i) => (
                            <div key={i} className="w-48 h-32 p-2 border flex flex-col justify-center items-center">
                                <p className="self-end" onClick={() => handleDeleteImage(i)}>삭제</p>
                                <img src={image} alt={`사진 ${i + 1}`} className="max-w-full max-h-full" />
                            </div>
                        ))}
                    </div>
                    <div className="text-center">
                        <label htmlFor="input-file" className="cursor-pointer mt-4 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            이미지 추가하기
                            <input type="file" id="input-file" multiple onChange={handleAddImages} className="hidden" />
                        </label>
                    </div>
                    <div className="text-center">
                        <button className="mt-4 ml-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" type="submit">
                            등록하기
                        </button>
                    </div>
                </div>
            </form>
        </>
    );
};