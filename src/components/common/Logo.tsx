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
        <div className="flex justify-between items-center w-full h-20 px-3 my-3 relative">
            <div className="flex-1"></div>
            <div className="flex-2 flex justify-center items-center">
                <p className="my-auto cursor-pointer font-bold text-2xl align-center" onClick={() => navigate('/')} >UNIFOROM-EXTRATIME</p>
            </div>
            <div className="flex-1 flex justify-end items-center cursor-pointer relative">
                {user.email &&
                    <div className="flex flex-col items-center ml-3">
                        <FontAwesomeIcon icon={faShoppingCart} />
                        <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 bg-black text-white text-xs px-1.5 py-0.5 rounded-full">{cartLength()}</span>
                    </div>
                }
            </div>
        </div>
    )
}
