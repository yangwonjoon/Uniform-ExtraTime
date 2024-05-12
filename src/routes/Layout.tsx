import { Footer } from "@/components/common/Footer"
import { Logo } from "@/components/common/Logo"
import { Nav } from "@/components/common/Nav"
import { Outlet } from "react-router-dom"

export const Layout = () => {

    return (
        <div className="container mx-auto my-0 md:w-1/2 w-full h-screen">
            <Logo></Logo>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    )
}