import { Input } from "@/components/ui/input";
import { useSignUp } from "@/hooks/signup/useSignUp";
import { ISignUpFormProps } from "@/types/types";

export const SignUpForm = ({ isSeller, name }: ISignUpFormProps) => {
    const { msg, signUp, inputChange } = useSignUp(isSeller);
    return (
        <div className="pt-24 pl-16 pr-16">
            <div>
                <h1 className="text-2xl pl-3">{name} 회원가입</h1>
                <hr className="border-t-2 border-black my-4"></hr>
            </div>
            <div className="p-10 pl-6 pr-6">
                <Input type="EMAIL" name="email" placeholder="EMAIL"
                    className="w-5/6 h-12 mb-6 border-0" onChange={inputChange} />
                <Input type="PASSWORD" name="password" placeholder="PASSWORD"
                    className="w-5/6 h-12 mb-6 border-0" onChange={inputChange} />
                <Input type="NAME" name="name" placeholder="NAME"
                    className="w-5/6 h-12 mb-6 border-0" onChange={inputChange} />
                <Input type="NICKNAME" name="nickname" placeholder="NICKNAME"
                    className="w-5/6 h-12 mb-6 border-0" onChange={inputChange} />

                <div className="text-center pt-5">
                    {msg && <p className="text-red-500 pb-5">{msg}</p>}
                    <button className="bg-main w-32 h-12 rounded-md text-white" onClick={signUp}>제출하기</button>
                </div>
            </div>
        </div>
    )
}