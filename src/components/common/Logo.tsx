import { useNavigate } from "react-router-dom"

export const Logo = () => {
    const navigate = useNavigate()

    return (
        <>
            <div className="text-center m-5 relative">
                <h1 className="text-4xl cursor-pointer" onClick={() => navigate('/')}>UNIFORM EXTRATIME</h1>
                <div className="absolute right-0 top-0">
                    <p>장바구니</p>
                </div>
            </div>
        </>
    )
}