import { useNavigate } from "react-router-dom";
import { Nav } from "@/components/common/nav";
import { useReadProduct } from "@/hooks/useReadProduct";
import { useDeleteProduct } from "@/hooks/useDeleteProduct";
import { userStore } from "@/store/store";

export const Sell = () => {

    const navigate = useNavigate();
    const deleteProduct = useDeleteProduct();
    const user = userStore(state => state.user);
    const products = useReadProduct(user.email);

    return (
        <>
            <Nav />
            <button onClick={() => navigate('/sell/createProduct')}>상품등록</button>
            {products.map((product, i) => (
                <div key={i} className="w-9/10 h-auto m-3 border border-black grid grid-cols-10 mx-auto overflow-hidden shadow-lg rounded-lg">
                    <div className="col-span-3 grid grid-rows-10 h-full">
                        <div className="row-span-7 flex items-center justify-center">
                            <img src={product.images[0]} alt="main img" className="max-w-full max-h-full" />
                        </div>
                        <div className="row-span-3 grid grid-cols-3">
                            <div className="col-span-1 flex items-center justify-center">
                                <img src={product.images[1]} alt="img 1" className="max-w-full max-h-full" />
                            </div>
                            <div className="col-span-1 flex items-center justify-center">
                                <img src={product.images[2]} alt="img 2" className="max-w-full max-h-full" />
                            </div>
                            <div className="col-span-1 flex items-center justify-center">
                                <img src={product.images[2]} alt="img 3" className="max-w-full max-h-full" />
                            </div>
                        </div>
                    </div>
                    <div className="col-span-5 p-2 flex flex-col">
                        <h1 className="font-bold">상품명: {product.name}</h1>
                        <p className="font-semibold">가격: {product.price}원</p>
                        <p >{product.explain}</p>
                        <p>{product.id}</p>
                    </div>
                    <div className="col-span-2 p-2 flex flex-col justify-around items-center">
                        <button className="px-4 py-2 rounded-md" onClick={() => navigate(`/sell/createProduct/${product.id}`)}>수정</button>
                        <button className="px-4 py-2 rounded-md" onClick={() => { product.id && deleteProduct(product.id) }}>삭제</button>
                    </div>
                </div>
            ))}

        </>
    );
};
