import { useNavigate } from "react-router-dom";
import { Nav } from "@/components/common/Nav";
import { useGetProductByEmail } from "@/hooks/sell/useGetProductByEmail";
import { userStore } from "@/store/userStore";
import { SellerProductView } from "@/components/sell/SellerProductView";

export const Sell = () => {

    const navigate = useNavigate();
    const user = userStore(state => state.user);
    const products = useGetProductByEmail(user.email);

    return (
        <>
            <Nav />
            <button onClick={() => navigate('/sell/createProduct')}>상품등록</button>
            {products && (
                products.map((product, i) => (
                    <SellerProductView product={product} key={i}></SellerProductView>
                )))
            }
        </>
    );
};
