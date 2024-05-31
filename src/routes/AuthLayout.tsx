import Logo from '@/components/common/Logo'
import { Outlet } from 'react-router-dom'

const AuthLayout = () => (
  <div className="container mx-auto my-0 w-1/2 h-screen">
    <Logo />
    <Outlet />
  </div>
)

export default AuthLayout
