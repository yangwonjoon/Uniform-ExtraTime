import { useNavigate } from "react-router-dom";
import { useGetProductByEmail } from "@/hooks/sell/useGetProductByEmail";
import { userStore } from "@/store/userStore";
import { SellerProductView } from "@/components/sell/SellerProductView";

export const Sell = () => {

    const navigate = useNavigate();
    const user = userStore(state => state.user);
    const products = useGetProductByEmail(user.email);

    return (
        <div>
            <div className="text-right">
                <button onClick={() => navigate('/sell/createProduct')} className="text-base font-medium py-2 px-4 border border-gray text-gray-800 rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 mt-3">상품등록</button>
            </div>
            <h1 className="font-bold text-xl my-5">판매중인 상품</h1>
            <hr></hr>
            {products && (
                products.map((product, i) => (
                    <SellerProductView product={product} key={i}></SellerProductView>
                )))
            }
        </div>
    );
};
