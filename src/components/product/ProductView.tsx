import { IProductFormData } from "@/types/types"
import { useNavigate } from "react-router-dom";
import { useDeleteProduct } from "@/hooks/product/useDeleteProduct";
import { userStore } from "@/store/store";

interface IProductView {
    product: IProductFormData;
    i: number
}

export const ProductView = ({ product, i }: IProductView) => {
    const navigate = useNavigate();
    const deleteProduct = useDeleteProduct();
    const user = userStore(state => state.user);
    return (
        <div key={i} className="w-9/10 h-50 m-3 border border-black grid grid-cols-10 mx-auto overflow-hidden shadow-lg rounded-lg">
            <div className="col-span-3 grid grid-rows-10 h-full">
                <div className="row-span-7 flex items-center justify-center">
                    <img src={product.productImages[0]} alt="메인 이미지" className="w-full h-full object-cover" />
                </div>
                <div className="row-span-3 grid grid-cols-3">
                    {product.productImages.slice(1, 4).map((image, index) => (
                        <div key={index} className="col-span-1 flex items-center justify-center">
                            <img src={image} alt={`서브 이미지 ${index + 1}`} className="w-full h-full object-cover" />
                        </div>
                    ))}
                </div>
            </div>
            <div className="col-span-5 p-2 flex flex-col">
                <h1 className="font-bold">상품명: {product.productName}</h1>
                <p className="font-semibold">가격: {product.productPrice}</p>
                <p>{product.productDescription}</p>
                <p>{product.createdAt.toString()}</p>
            </div>
            <div className="col-span-2 p-2 flex flex-col justify-around items-center">
                {
                    user.isSeller ?
                        <>
                            <button className="px-4 py-2 rounded-md" onClick={() => navigate(`/sell/updateProduct/${product.productId}`)}>수정</button>
                            <button className="px-4 py-2 rounded-md" onClick={() => { product.productId && deleteProduct(product.productId, user.email, product.productName) }}>삭제</button>
                        </> :
                        <>
                            <button className="px-4 py-2 rounded-md">구매하기</button>
                            <button className="px-4 py-2 rounded-md">장바구니</button>
                        </>
                }
            </div>
        </div >
    )
}