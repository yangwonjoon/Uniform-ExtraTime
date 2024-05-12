import { useLocation, useNavigate } from "react-router-dom";
import { userStore } from "@/store/userStore";
import { useEffect, useState } from "react";

export const Nav = () => {
    const navigate = useNavigate();
    const location = useLocation()
    const { user } = userStore();
    const [line, setLine] = useState(location.pathname);

    useEffect(() => { setLine(location.pathname); }, [location.pathname])

    const clickHandle = (path: string) => {
        if (path === '/sell' && !user.isSeller) {
            alert('판매자만 접근 가능');
            navigate('/login');
            return;
        }
        if (path === '/mypage' && !user.uid) {
            alert('로그인 해주세요!');
            navigate('/login');
            return;
        }
        navigate(path);
    }

    const isActive = (path: string) => {
        return line === path ? 'border-b-4 border-black' : '';
    }

    return (
        <>
            <div className="flex mb-5">
                <div className={`cursor-pointer flex-1 text-center ${isActive('/')}`} onClick={() => clickHandle('/')}>
                    <h1 className="text-2xl">HOME</h1>
                </div>
                <div className={`cursor-pointer flex-1 text-center ${isActive('/team')}`} onClick={() => clickHandle('/team')}>
                    <h1 className="text-2xl">TEAM</h1>
                </div>
                <div className={`cursor-pointer flex-1 text-center ${isActive('/sell')}`} onClick={() => clickHandle('/sell')}>
                    <h1 className="text-2xl">SELL</h1>
                </div>
                <div className={`cursor-pointer flex-1 text-center ${isActive('/mypage')}`} onClick={() => clickHandle('/mypage')}>
                    <h1 className="text-2xl">MYPAGE</h1>
                </div>
            </div>
        </>
    );
}
