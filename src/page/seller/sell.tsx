import React, { useState } from "react";
import { Nav } from "@/components/common/nav";
import { storage } from "../../firebase";
import { ref, uploadBytes } from "firebase/storage";

export const Sell = () => {

    //이미지 url 저장
    const [showImages, setShowImages] = useState<string[]>([]);
    //파일 객체 저장
    const [imageFiles, setImageFiles] = useState<File[]>([]);

    console.log(imageFiles)

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
            for (let i = 0; i < imageFiles.length; i++) {
                const file = imageFiles[i];
                const storageRef = ref(storage, `products/${file.name}`);
                await uploadBytes(storageRef, file);
            }
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
                <div>

                    




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
                        <button className="mt-4 ml-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" type="submit">
                            사진 올리기
                        </button>
                    </div>
                </div>
            </form>
        </>
    );
};
