import { createUserWithEmailAndPassword, setPersistence, browserSessionPersistence } from 'firebase/auth';
import { auth } from '../firebase';
import { signOut } from "firebase/auth";

export const signUpUser = async (email: string, password: string) => {

    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    await setPersistence(auth, browserSessionPersistence);
    //회원가입 후 자동로그인 막기 위함
    await signOut(auth)
    const uid = userCredential.user.uid;
    return uid;
};