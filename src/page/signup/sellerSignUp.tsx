import { useState } from "react";
import { Input } from "@/components/ui/input"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebase";
import { setDoc, doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export const SellerSignUp = () => {

    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        name: '',
        nickname: '',
        isSeller: true
    });

    const signUp = async () => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
            console.log(userCredential);
            const { uid } = userCredential.user;

            const userDocRef = doc(db, "users", uid);
            await setDoc(userDocRef, {
                email: formData.email,
                name: formData.name,
                nickname: formData.nickname,
                isSeller: formData.isSeller
            });

            navigate('/login')

        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <div className="seller-container pt-32 pl-16 pr-16">
                <div>
                    <h1 className="text-4xl pl-3">판매자 회원가입</h1>
                    <hr className="border-t-2 border-black my-4"></hr>
                </div>
                <div className="p-10 pl-6 pr-6">
                    <Input type="EMAIL" placeholder="EMAIL"
                        className="w-5/6 h-12 mb-6 border-0" onChange={(e) => {
                            setFormData({
                                ...formData,
                                email: e.target.value
                            })
                        }} />
                    <Input type="PASSWORD" placeholder="PASSWORD"
                        className="w-5/6 h-12 mb-6 border-0" onChange={(e) => {
                            setFormData({
                                ...formData,
                                password: e.target.value
                            })
                        }} />
                    <Input type="NAME" placeholder="NAME"
                        className="w-5/6 h-12 mb-6 border-0" onChange={(e) => {
                            setFormData({
                                ...formData,
                                name: e.target.value
                            })
                        }} />
                    <Input type="NICKNAME" placeholder="NICKNAME"
                        className="w-5/6 h-12 mb-6 border-0" onChange={(e) => {
                            setFormData({
                                ...formData,
                                nickname: e.target.value
                            })
                        }} />
                    <div className="text-center pt-5">
                        <button className="bg-main w-32 h-12 rounded-md text-white" onClick={signUp}>제출하기</button>
                    </div>
                </div>
            </div>
        </>
    )
}