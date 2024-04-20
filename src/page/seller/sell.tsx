import React, { useState } from "react";
import { Nav } from "@/components/common/nav";
import { storage, auth } from "../../firebase";
import { ref, uploadBytes } from "firebase/storage";

export const Sell = () => {

    //이미지 url 저장
    const [showImages, setShowImages] = useState<string[]>([]);
    //파일 객체 저장
    const [imageFiles, setImageFiles] = useState<File[]>([]);

    const handleAddImages = (event: React.ChangeEvent<HTMLInputElement>) => {

        if (event.target.files && event.target.files.length > 0) {

            console.log(event.target.files)

            const files = Array.from(event.target.files);
            const newImageUrl = [...showImages];
            const newImageFiles = [...imageFiles];

            files.forEach((file) => {
                const currentImageUrl = URL.createObjectURL(file);
                newImageUrl.push(currentImageUrl);
                newImageFiles.push(file);
            });

            //5개까지
            if (newImageUrl.length > 5) {
                newImageUrl.slice(0, 5);
                newImageFiles.slice(0, 5);
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
        } catch (error) {
            console.error("이미지 업로드 실패 ");
        }
    };

    return (
        <>
            <Nav />
            <form onSubmit={handleSubmit}>
                <div>

                    <input type="file" id="input-file" multiple onChange={handleAddImages} />

                    {showImages.map((image, id) => (
                        <div key={id}>
                            <img src={image} alt={`Uploaded ${id}`} />
                            <button type="button" onClick={() => handleDeleteImage(id)}>삭제</button>
                        </div>
                    ))}
                    <br></br>
                    <button type="submit">사진 올리기</button>
                </div>
            </form>
        </>
    );
};
