import { useState } from "react";
import { Input } from "@/components/ui/input"
import { setPersistence, createUserWithEmailAndPassword, browserSessionPersistence } from 'firebase/auth';
import { auth, db } from "../../firebase";
import { setDoc, doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

interface IFormData {
    email: string,
    password: string,
    name: string,
    nickname: string,
    isSeller: boolean
}

export const SellerSignUp = () => {

    const navigate = useNavigate()
    const [formData, setFormData] = useState<IFormData>({
        email: '',
        password: '',
        name: '',
        nickname: '',
        isSeller: true
    });
    const [msg, setMsg] = useState('')

    const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const validatePassword = (password: string) => {
        if (password.length < 10) {
            return false;
        }
        const typesCount = [/[A-Z]/.test(password), /[a-z]/.test(password), /[0-9]/.test(password), /[\W_]/.test(password)].filter(Boolean).length;
        return typesCount >= 2;
    };
    const validateName = (name: string) => /.+/.test(name);

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
            const createdUser = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
            console.log("createdUser:", createdUser);
            const { uid } = createdUser.user;

            //firestore에 uid로 formData 저장 
            const dbUsers = doc(db, "users", uid);
            await setDoc(dbUsers, {
                email: formData.email,
                name: formData.name,
                nickname: formData.nickname,
                isSeller: formData.isSeller
            });

            await setPersistence(auth, browserSessionPersistence);
            console.log("dbUsers:", dbUsers)
            navigate('/')

        } catch (error) {
            console.log(error)
        }
    };

    return (
        <>
            <div className="seller-container pt-24 pl-16 pr-16">
                <div>
                    <h1 className="text-2xl pl-3">판매자 회원가입</h1>
                    <hr className="border-t-2 border-black my-4"></hr>
                </div>
                <div className="p-10 pl-6 pr-6">
                    <Input type="EMAIL" name="email" placeholder="EMAIL"
                        className="w-5/6 h-12 mb-6 border-0" onChange={(e) => {
                            setFormData({
                                ...formData,
                                email: e.target.value
                            })
                        }} />
                    <Input type="PASSWORD" name="password" placeholder="PASSWORD"
                        className="w-5/6 h-12 mb-6 border-0" onChange={(e) => {
                            setFormData({
                                ...formData,
                                password: e.target.value
                            })
                        }} />
                    <Input type="NAME" name="name" placeholder="NAME"
                        className="w-5/6 h-12 mb-6 border-0" onChange={(e) => {
                            setFormData({
                                ...formData,
                                name: e.target.value
                            })
                        }} />
                    <Input type="NICKNAME" name="nickname" placeholder="NICKNAME"
                        className="w-5/6 h-12 mb-6 border-0" onChange={(e) => {
                            setFormData({
                                ...formData,
                                nickname: e.target.value
                            })
                        }} />

                    <div className="text-center pt-5">
                        {msg && <p className="text-red-500 pb-5">{msg}</p>}
                        <button className="bg-main w-32 h-12 rounded-md text-white" onClick={signUp}>제출하기</button>
                    </div>
                </div>
            </div>
        </>
    )
}