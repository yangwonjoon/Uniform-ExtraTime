import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

export const Nav = () => {

    const navigate = useNavigate()
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const sellerLogin = onAuthStateChanged(auth, (user) => {
            if (user) {
                // 판매자 로그인
                setIsLoggedIn(true);
            } else {
                // 판매자 로그인 x
                setIsLoggedIn(false);
            }
        });

        return () => sellerLogin();
    }, []);


    //nav onclick handler
    const clickHandle = (path: string) => {
        if (path === '/sell' && !isLoggedIn) {
            alert('판매자만 접근 가능');
            return;
        }
        navigate(path)
    }
    console.log(!isLoggedIn)

    return (
        <>
            <div className="flex mb-5">
                <div className={`cursor-pointer flex-1 text-center border-b-4 border-black`} onClick={() => clickHandle('/')}><h1 className="text-2xl">HOME</h1></div>
                <div className={`cursor-pointer flex-1 text-center `} onClick={() => clickHandle('/team')}><h1 className="text-2xl">TEAM</h1></div>
                <div className={`cursor-pointer flex-1 text-center `} onClick={() => clickHandle('/sell')} ><h1 className="text-2xl">SELL</h1></div>
                <div className={`cursor-pointer flex-1 text-center `} onClick={() => clickHandle('/mypage')}><h1 className="text-2xl">MYPAGE</h1></div>
            </div >
        </>
    )
}