import { useNavigate } from "react-router-dom";
import { Nav } from "@/components/common/Nav";
import { useGetProductByEmail } from "@/hooks/product/useGetProductByEmail";
import { userStore } from "@/store/store";
import { ProductView } from "@/components/product/ProductView";

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
                    <ProductView product={product} i={i} key={i}></ProductView>
                )))
            }
        </>
    );
};
