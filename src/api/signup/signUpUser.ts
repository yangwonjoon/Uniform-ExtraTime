import {
  createUserWithEmailAndPassword,
  setPersistence,
  browserSessionPersistence,
  signOut,
} from 'firebase/auth'
import { auth } from '../../firebase'

const signUpUser = async (email: string, password: string) => {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password,
  )
  await setPersistence(auth, browserSessionPersistence)

  // 회원가입 후 자동로그인 막기 위함
  await signOut(auth)
  const { uid } = userCredential.user
  return uid
}

export default signUpUser
