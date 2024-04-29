import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { userStore } from "@/store/store";
import { useNavigate } from "react-router-dom";

export const useLogout = () => {
    const navigate = useNavigate()
    const setUser = userStore((state) => (state.setUser))
    const clearUserStorage = userStore.persist.clearStorage;

    const logout = async () => {
        try {
            await signOut(auth);
            setUser({ email: '', name: '', nickname: '', uid: '', isSeller: false });
            clearUserStorage()
            navigate('/')
        } catch (error) {
            console.error('로그아웃 에러');
        }
    }
    return { logout }
};