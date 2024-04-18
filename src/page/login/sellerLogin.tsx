import { Input } from "@/components/ui/input"
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

export const SellerLogin = () => {

    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    console.log(formData)

    const login = async () => {

        try {
            const userCredential = await signInWithEmailAndPassword(
                auth,
                formData.email,
                formData.password
            );
            console.log(userCredential)
            navigate('/')
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <div className="seller-container pt-48 pl-16 pr-16">
                <div>
                    <h1 className="text-4xl pl-3">로그인</h1>
                    <hr className="border-t-2 border-black my-4"></hr>
                </div>
                <div className="p-10 pl-6 pr-6">
                    <Input type="EMAIL" placeholder="EMAIL" className="w-5/6 h-12 mb-6 border-0"
                        onChange={(e) => {
                            setFormData({
                                ...formData,
                                email: e.target.value
                            })
                        }} />
                    <Input type="PASSWORD" placeholder="PASSWORD" className="w-5/6 h-12 mb-6 border-0"
                        onChange={(e) => {
                            setFormData({
                                ...formData,
                                password: e.target.value
                            })
                        }} />
                    <div className="text-center pt-5">
                        <button className="bg-main w-32 h-12 rounded-md text-white" onClick={login}>로그인</button>
                    </div>
                </div>
            </div>
        </>
    )
}