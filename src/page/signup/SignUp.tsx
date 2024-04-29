import { useNavigate } from "react-router-dom"
import { Nav } from "@/components/common/Nav"
import customer from '../../assets/customer.svg'
import seller from '../../assets/seller.svg'

export const SignUp = () => {
    const navigate = useNavigate()
    return (
        <div>
            <Nav></Nav>
            <div className="mt-32 flex justify-center items-center">
                <div className="w-1/2 h-1/2">
                    <div className="w-full h-4/5 bg-customer">
                        <img alt="customer img" src={customer}></img>
                    </div>
                    <div className="w-full h-1/5 text-center">
                        <button className="bg-main w-32 h-12 rounded-md text-white" onClick={() => navigate('/signup/customer')}>구매자 회원가입</button>
                    </div>
                </div>
                <div className="w-1/2 h-1/2">
                    <div className="w-full h-4/5">
                        <img alt="seller img" src={seller}></img>
                    </div>
                    <div className="w-full h-1/5 text-center">
                        <button className="bg-main w-32 h-12 rounded-md text-white" onClick={() => navigate('/signup/seller')}>판매자 회원가입</button>
                    </div>
                </div>
            </div>
        </div>
    )
}