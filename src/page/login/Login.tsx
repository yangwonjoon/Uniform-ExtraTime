import { Input } from '@/components/ui/input'
import useLogin from '@/hooks/login/useLogin'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const { msg, login, inputChange } = useLogin()
  const navigate = useNavigate()

  return (
    <div className="seller-container pt-32 pl-16 pr-16">
      <div>
        <h1 className="text-2xl pl-3">Login</h1>
        <hr className="border-t-2 border-black my-4" />
      </div>
      <div className="p-10 pl-6 pr-6">
        <Input
          type="EMAIL"
          name="email"
          placeholder="EMAIL"
          className="w-5/6 h-12 mb-6 border-0"
          onChange={inputChange}
        />
        <Input
          type="PASSWORD"
          name="password"
          placeholder="PASSWORD"
          className="w-5/6 h-12 mb-6 border-0"
          onChange={inputChange}
        />

        <div className="text-center pt-5">
          {msg && <p className="text-red-500 pb-5">{msg}</p>}
          <button
            type="button"
            className="bg-main w-32 h-12 rounded-md text-white"
            onClick={login}
          >
            로그인
          </button>
          <p
            className="mt-3 text-xs hover:text-sm hover:font-bold cursor-pointer"
            onClick={() => navigate('/signup')}
          >
            Join Us?
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
