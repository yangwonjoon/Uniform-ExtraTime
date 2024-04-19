import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import { signOut } from "firebase/auth";
import { auth, db } from "../../firebase";
import { Logo } from "../../component/logo";
import { Nav } from "../../component/nav";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

interface User {
    email: string;
    name: string;
    nickname: string;
    isSeller: boolean;
}

export const Home = () => {

    const navigate = useNavigate()
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const fetchUserData = async () => {
                    const userDoc = await getDoc(doc(db, "users", user.uid));
                    if (userDoc.exists()) {
                        setUser(userDoc.data() as User);
                    } else {
                        console.log("정보 없음");
                    }
                };
                fetchUserData();
            } else {
                setUser(null);
            }
        });
    }, []);

    return (
        <>
            <div>
                <Logo></Logo>
                <Nav></Nav>

                <div><button onClick={() => navigate('/signup')}>회원가입</button></div>
                <div><button onClick={() => navigate('/login')}>로그인</button></div>
                <div><button onClick={() => { signOut(auth); }}>로그아웃</button></div>

                <div className="mt-20">
                    <h1>판매자 정보</h1>
                    {user ? (
                        <div>
                            <h1>Welcome, {user.name}!</h1>
                            <p>Email: {user.email}</p>
                            <p>Nickname: {user.nickname}</p>
                        </div>
                    ) : (
                        <p>로그인 해주세요</p>
                    )}
                </div>
            </div>
        </>
    )
}