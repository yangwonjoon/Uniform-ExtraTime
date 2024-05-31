import { signOut } from 'firebase/auth'
import userStore from '@/store/userStore'
import { useNavigate } from 'react-router-dom'
import { auth } from '../../firebase'

const useLogout = () => {
  const navigate = useNavigate()
  const setUser = userStore((state) => state.setUser)
  const clearUserStorage = userStore.persist.clearStorage

  const logout = async () => {
    try {
      await signOut(auth)
      setUser({ email: '', name: '', nickname: '', uid: '', isSeller: false })
      clearUserStorage()
      navigate('/')
    } catch (error) {
      console.error('로그아웃 에러')
    }
  }
  return { logout }
}

export default useLogout
