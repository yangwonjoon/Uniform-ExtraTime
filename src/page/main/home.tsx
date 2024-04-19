import { useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { Logo } from "../../component/logo";
import { Nav } from "../../component/nav";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";


export const Home = () => {

    const navigate = useNavigate()

    return (
        <>
            <div>
                <Logo></Logo>
                <Nav></Nav>

                <div><button onClick={() => navigate('/signup')}>회원가입</button></div>
                <div><button onClick={() => navigate('/login')}>로그인</button></div>
                <div><button onClick={() => { signOut(auth); }}>로그아웃</button></div>
            </div>
        </>
    )
}