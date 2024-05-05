import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { cartStore } from "@/store/cartStore";
import { userStore } from "@/store/userStore";
import logo from '../../assets/logo1.svg'
import { useLogout } from "@/hooks/logout/useLogout";


export const Logo = () => {
    const navigate = useNavigate()
    const { user } = userStore()
    const { cartLength } = cartStore()
    const { logout } = useLogout()

    return (
        <div className="flex justify-between items-center w-full px-5 my-3">
            {/* 왼쪽 빈 공간 */}
            <div className="flex-1">
                <img src={logo} className="inline-block w-64 h-20 cursor-pointer" onClick={() => navigate('/')} alt="Company Logo"></img>
            </div>
            {/* 로고 이미지 중앙 정렬 */}
            <div className="flex-2 text-center">
            </div>
            {/* 아이콘 및 라벨 */}
            <div className="flex-1 flex justify-end items-center cursor-pointer">
                {
                    !user.email ?
                        <>
                            <div className="flex flex-col items-center">
                                <FontAwesomeIcon icon={faRightFromBracket} size="lg" onClick={() => navigate('/login')} />
                                <span className="text-xs mt-1" >로그인</span>
                            </div>
                            <div className="flex flex-col items-center ml-3">
                                <FontAwesomeIcon icon={faUser} size="lg" onClick={() => navigate('/signup')} />
                                <span className="text-xs mt-1">회원가입</span>
                            </div>
                        </>
                        : <button onClick={logout}>로그아웃</button>
                }
                <div className="flex flex-col items-center ml-3 relative">
                    <FontAwesomeIcon icon={faShoppingCart} size="lg" />
                    <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 bg-black text-white text-xs px-1.5 py-0.5 rounded-full">{cartLength()}</span>
                    <span className="text-xs mt-1">장바구니</span>
                </div>
            </div>
        </div>
    )
}
