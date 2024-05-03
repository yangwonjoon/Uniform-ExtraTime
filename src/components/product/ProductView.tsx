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
    const user = userStore(state => state.user);
    const deleteProduct = useDeleteProduct();

    return (
        <div key={i} className="w-9/10 h-48 mx-auto my-5 flex overflow-hidden shadow-lg rounded-lg border border-black">
            <div className="flex flex-grow basis-3/10 items-center justify-center p-3" >
                <img src={product.productImages[0]} alt="메인 이미지" className="object-contain max-h-full" />
            </div>
            <div className="flex flex-grow basis-1/2 flex-col p-3">
                <h1 className="font-bold text-lg">{product.productName}</h1>
                <p className="font-semibold text-md mb-5">가격: {product.productPrice}</p>
                <p className="text-sm">{product.productDescription}</p>
            </div>
            <div className="flex flex-grow basis-2/10 flex-col p-3 justify-around items-center" >
                <button className="px-4 py-2 bg-blue-500 text-white rounded-md" onClick={() => navigate(`/sell/updateProduct/${product.productId}`)}>수정</button>
                <button className="px-4 py-2 bg-red-500 text-white rounded-md" onClick={() => { product.productId && deleteProduct(product.productId, user.email, product.productName) }}>삭제</button>
            </div>
        </div>
    );
}
