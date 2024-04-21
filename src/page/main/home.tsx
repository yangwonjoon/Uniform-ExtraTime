import { useNavigate } from "react-router-dom"
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { Nav } from "../../components/common/nav";
import { userStore } from "@/store/store";

export const Home = () => {

    const navigate = useNavigate()
    const setUser = userStore(state => state.setUser);
    const clearUserStorage = userStore.persist.clearStorage;

    const logout = async () => {
        try {
            await signOut(auth);
            setUser({ email: '', name: '', nickname: '', uid: '', isSeller: false });
            clearUserStorage()

        } catch (error) {
            console.error('로그아웃 에러');
        }
    };

    return (
        <>
            <div>
                <Nav></Nav>
                <div className="mt-20">
                    <div><button onClick={() => navigate('/signup')}>회원가입</button></div>
                    <div><button onClick={() => navigate('/login')}>로그인</button></div>
                    <div><button onClick={logout}>로그아웃</button></div>
                </div>
            </div>
        </>
    )
}