import { validateEmail, validatePassword } from "@/utils/validation";
import { loginUser } from "@/api/firebase/loginUser";
import { useNavigate } from "react-router-dom";
import { userStore } from "@/store/store";
import { useState } from "react";
import { ILoginFormData } from "@/interfaces/login/login.ts";
import { User } from '../store/types.ts'

export const useLogin = () => {

    const navigate = useNavigate()
    const setUser = userStore(state => state.setUser)
    const [formData, setFormData] = useState<ILoginFormData>({ email: '', password: '' });
    const [msg, setMsg] = useState('');

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
            const userData = await loginUser(formData.email, formData.password);
            setUser(userData as User);
            navigate('/');
        } catch (error) {
            console.error(error);
            setMsg("로그인 실패: ");
        }
    };
    return { formData, setFormData, msg, login }
}