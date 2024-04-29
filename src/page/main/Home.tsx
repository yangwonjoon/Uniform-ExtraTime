import { useNavigate } from "react-router-dom"
import { Nav } from "../../components/common/Nav";
import { userStore } from "@/store/store";
import { useLogout } from "@/hooks/logout/useLogout";

export const Home = () => {

    const navigate = useNavigate()
    const user = userStore((state) => (state.user))
    const { logout } = useLogout()

    return (
        <>
            <div>
                <Nav></Nav>
                <div className="mt-20">
                    {
                        !user.uid && <><div><button onClick={() => navigate('/signup')}>회원가입</button></div>
                            <div><button onClick={() => navigate('/login')}>로그인</button></div></>
                    }
                    {
                        user.uid && <><div><button onClick={logout}>로그아웃</button></div></>
                    }
                </div>
            </div>
        </>
    )
}