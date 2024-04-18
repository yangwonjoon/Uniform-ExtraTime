import { useNavigate } from "react-router-dom"
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

export const Main = () => {

    const navigate = useNavigate()

    return (
        <>
            <div><button onClick={() => navigate('/signup')}>회원가입</button></div>
            <div><button onClick={() => navigate('/login')}>로그인</button></div>
            <div><button onClick={() => { signOut(auth); }}>로그아웃</button></div>
        </>
    )
}