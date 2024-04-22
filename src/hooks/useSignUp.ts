import { useState } from "react";
import { validateEmail, validatePassword, validateName } from "@/utils/validation.ts";
import { signUpUser } from "@/api/createUser";
import { createUserProfile } from "@/api/createUserProfile";
import { ISignUp } from "@/page/signup/ISignUp";
import { useNavigate } from "react-router-dom";

export const useSignUp = () => {

    const navigate = useNavigate()
    const [msg, setMsg] = useState('')
    const [formData, setFormData] = useState<ISignUp>({
        email: '',
        password: '',
        name: '',
        nickname: '',
        isSeller: true
    });

    const signUp = async () => {

        if (!validateEmail(formData.email)) {
            setMsg("email 형식에 맞춰 주세요");
            return;
        }
        if (!validatePassword(formData.password)) {
            setMsg("비밀번호는 영어 대문자, 소문자, 숫자, 특수문자 중 2종류 문자 조합으로 구성해주세요");
            return;
        }
        if (!validateName(formData.name)) {
            setMsg("이름을 입력해주세요");
            return;
        }
        if (!validateName(formData.nickname)) {
            setMsg("닉네임을 입력해주세요");
            return;
        }

        try {
            //firebase auth 회원가입(email, password)
            const uid = await signUpUser(formData.email, formData.password)
            //fireStore에 uid로 formData 저장 
            await createUserProfile(uid, formData);
            navigate('/login')
        } catch (error) {
            setMsg("회원가입이 실패하였습니다");
        }
    };
    return { formData, setFormData, msg, signUp };
}

