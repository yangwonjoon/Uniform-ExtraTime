import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { cartStore } from "@/store/cartStore";
import { userStore } from "@/store/userStore";


export const Logo = () => {
    const navigate = useNavigate()
    const { user } = userStore()
    const { cartLength } = cartStore()

    return (
        <div className="text-center m-5 relative">
            <h1 className="text-4xl cursor-pointer" onClick={() => navigate('/')}>UNIFORM EXTRATIME</h1>
            {
                !user.isSeller &&
                <div id="cart-icon" className="absolute right-0 bottom-0 flex items-center">
                    <div className="relative">
                        <FontAwesomeIcon icon={faShoppingCart} size="lg"></FontAwesomeIcon>
                        <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 bg-black text-white text-xs px-1.5 py-0.5 rounded-full">{cartLength()}</span>
                    </div>
                </div>
            }
        </div>
    )
}
