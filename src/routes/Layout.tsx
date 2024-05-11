import { Logo } from "@/components/common/Logo"
import { Nav } from "@/components/common/Nav"
import { Outlet } from "react-router-dom"

export const Layout = () => {

    return (
        <div className="container mx-auto my-0 w-1/2 h-screen">
            <Logo></Logo>
            <Nav></Nav>
            <Outlet></Outlet>
        </div>
    )
}