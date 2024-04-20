import { Input } from "@/components/ui/input";
import { useState } from "react";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { setPersistence, signInWithEmailAndPassword, browserSessionPersistence } from 'firebase/auth';


interface IFormData {
    email: string,
    password: string
}

export const SellerLogin = () => {

    const navigate = useNavigate();
    const [formData, setFormData] = useState<IFormData>({ email: '', password: '' });
    const [msg, setMsg] = useState('');

    const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const validatePassword = (password: string) => {
        if (password.length < 10) {
            return false;
        }
        const typesCount = [/[A-Z]/.test(password), /[a-z]/.test(password), /[0-9]/.test(password), /[\W_]/.test(password)].filter(Boolean).length;
        return typesCount >= 2;
    };

    const login = async () => {
        if (!validateEmail(formData.email)) {
            setMsg("이메일을 다시 확인해주세요");
            return;
        }
        if (!validatePassword(formData.password)) {
            setMsg("비밀번호를 다시 확인해주세요");
            return;
        }

        try {
            await setPersistence(auth, browserSessionPersistence);
            const loginUser = await signInWithEmailAndPassword(
                auth,
                formData.email,
                formData.password
            );
            console.log(loginUser);
            navigate('/');
        } catch (error) {
            console.log(error)
            setMsg("로그인 실패");
        }
    };

    return (
        <>
            <div className="seller-container pt-32 pl-16 pr-16">
                <div>
                    <h1 className="text-2xl pl-3">로그인</h1>
                    <hr className="border-t-2 border-black my-4"></hr>
                </div>
                <div className="p-10 pl-6 pr-6">
                    <Input type="EMAIL" placeholder="EMAIL" className="w-5/6 h-12 mb-6 border-0"
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                    <Input type="PASSWORD" placeholder="PASSWORD" className="w-5/6 h-12 mb-6 border-0"
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })} />

                    <div className="text-center pt-5">
                        {msg && <p className="text-red-500 pb-5">{msg}</p>}
                        <button className="bg-main w-32 h-12 rounded-md text-white" onClick={login}>로그인</button>
                    </div>
                </div>
            </div>
        </>
    );
}
