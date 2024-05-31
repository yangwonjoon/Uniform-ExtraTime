import Footer from '@/components/common/Footer'
import Logo from '@/components/common/Logo'
import Nav from '@/components/common/Nav'
import { Outlet } from 'react-router-dom'

const Layout = () => (
  <div className="container mx-auto my-0 md:w-1/2 w-full h-screen">
    <Logo />
    <Nav />
    <Outlet />
    <Footer />
  </div>
)

export default Layout
