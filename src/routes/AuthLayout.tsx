import { Logo } from "@/components/common/Logo"
import { Outlet } from "react-router-dom"

export const AuthLayout = () => {

    return (
        <div className="container mx-auto my-0 w-1/2 h-screen">
            <Logo></Logo>
            <Outlet></Outlet>
        </div>
    )
}