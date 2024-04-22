import { useNavigate } from "react-router-dom";
import { Nav } from "@/components/common/nav";
import { useReadProduct } from "@/hooks/useReadProduct";
import { useDeleteProduct } from "@/hooks/useDeleteProduct"; // Ensure the path is correct
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

        </>
    );
};
