import { useNavigate } from 'react-router-dom'
import customer from '../../assets/customer.svg'
import seller from '../../assets/seller.svg'

const SignUp = () => {
  const navigate = useNavigate()
  return (
    <div className="mt-32 flex justify-center items-center">
      <div className="w-1/2 h-1/2">
        <div className="w-full h-4/5 bg-customer">
          <img alt="customer img" src={customer} />
        </div>
        <div className="w-full h-1/5 text-center">
          <button
            type="button"
            className="bg-main w-32 h-12 rounded-md text-white"
            onClick={() => navigate('/signup/customer')}
          >
            구매자 회원가입
          </button>
        </div>
      </div>
      <div className="w-1/2 h-1/2">
        <div className="w-full h-4/5">
          <img alt="seller img" src={seller} />
        </div>
        <div className="w-full h-1/5 text-center">
          <button
            type="button"
            className="bg-main w-32 h-12 rounded-md text-white"
            onClick={() => navigate('/signup/seller')}
          >
            판매자 회원가입
          </button>
        </div>
      </div>
    </div>
  )
}

export default SignUp
