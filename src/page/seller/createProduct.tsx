import { Nav } from "@/components/common/nav";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea";
import { useUploadProduct } from "@/hooks/useUploadProduct";
import { userStore } from "@/store/store";

export const CreateProduct = () => {

    const user = userStore(state => state.user);
    const { productFormData, showImages, handleAddImages, handleDeleteImage, handleSubmit, setProductFormData } = useUploadProduct({
        user_email: user.email,
        name: '',
        price: '',
        explain: '',
        images: []
    });

    return (
        <>
            <Nav />
            <form onSubmit={handleSubmit}>
                <div className="pt-10 flex flex-col items-center min-h-screen">
                    <div className="grid w-2/3 max-w-sm items-center gap-1.5 mb-5">
                        <Label htmlFor="name">상품명</Label>
                        <Input type="text" id="name" placeholder="ex) 리버풀 18/19 시즌 홈킷" onChange={(e) => {
                            {
                                setProductFormData({
                                    ...productFormData,
                                    name: e.target.value
                                })
                            }
                        }} />
                    </div>
                    <div className="grid w-2/3 max-w-sm items-center gap-1.5 mb-5">
                        <Label htmlFor="price">가격</Label>
                        <Input type="text" id="price" placeholder="ex) 120000" onChange={(e) => {
                            {
                                setProductFormData({
                                    ...productFormData,
                                    price: e.target.value
                                })
                            }
                        }} />
                    </div>
                    <div className="grid w-2/3 gap-1.5 mb-5">
                        <Label htmlFor="explain">상품설명</Label>
                        <Textarea placeholder="ex) 유럽현지에서 산 정품입니다. 실착 x, s급이에요" id="explain" onChange={(e) => {
                            {
                                setProductFormData({
                                    ...productFormData,
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