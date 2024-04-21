import { Input } from "@/components/ui/input";
import { useLogin } from "@/hooks/useLogin";

export const SellerLogin = () => {

    const { formData, setFormData, msg, login } = useLogin()


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
