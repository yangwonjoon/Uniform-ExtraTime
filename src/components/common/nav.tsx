import { useNavigate } from "react-router-dom";
import { userStore } from "@/store/store";

export const Nav = () => {

    const navigate = useNavigate()
    const user = userStore(state => state.user)
    console.log(user.uid)

    const clickHandle = (path: string) => {
        if (path === '/sell' && !user.isSeller) {
            alert('판매자만 접근 가능');
            return;
        }
        if (path === '/mypage' && !user.uid) {
            alert('로그인 해주세요!');
            return;
        }

        navigate(path)
    }

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