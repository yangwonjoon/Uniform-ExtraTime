import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark as bookmark } from '@fortawesome/free-regular-svg-icons';
import { faBookmark as filledBookmark } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";
import { userStore } from "@/store/userStore";
import { cartStore } from "@/store/cartStore";
import { IProductFormData } from "@/types/types";

interface IProductProps {
    product: IProductFormData;
}

export const ProductView = ({ product }: IProductProps) => {
    const navigate = useNavigate()
    const { user } = userStore()
    const { cart, addCart, removeCart } = cartStore()

    const handleToggleCart = (productId: string | undefined, e: React.MouseEvent) => {
        e.stopPropagation();
        if (!productId) {
            alert('제품 정보가 올바르지 않습니다.');
            return;
        }
        if (user.email && !user.isSeller) {
            if (cart.includes(productId)) {
                removeCart(productId)
            } else {
                addCart(productId)
            }
        } else {
            alert('구매자 아이디로 로그인해주세요!');
            navigate('/login')
        }
    }
    return (
        <div className="mx-auto mb-3 w-48 h-72 overflow-hidden" onClick={() => navigate(`/${product.productId}`)}>
            <div className="flex items-center justify-center h-48 shadow-lg rounded-lg border border-black relative">
                <img src={product.productImages[0]} alt="메인 이미지" className="object-contain h-full" />
                {
                    product.productId && cart.includes(product.productId) ?
                        <FontAwesomeIcon icon={filledBookmark} className="absolute bottom-0 right-0 m-2" onClick={(e) => handleToggleCart(product.productId, e)} />
                        : <FontAwesomeIcon icon={bookmark} className="absolute bottom-0 right-0 m-2" onClick={(e) => handleToggleCart(product.productId, e)} />
                }
            </div>
            <div className="flex flex-col text-sm p-3">
                <h1 className="font-bold mb-1">{product.productName}</h1>
                <p className="font-semibold">{product.productPrice}원</p>
            </div>
        </div>
    )
}