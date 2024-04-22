import { Nav } from "@/components/common/nav";
import { useNavigate } from "react-router-dom";

export const Sell = () => {
    const navigate = useNavigate()
    return (
        <>
            <div>
                <Nav />
                <button onClick={() => navigate('/sell/createProduct')}>상품 등록</button>
            </div>
        </>
    );
};