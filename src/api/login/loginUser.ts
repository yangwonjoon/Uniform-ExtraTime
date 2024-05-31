import {
  signInWithEmailAndPassword,
  browserSessionPersistence,
  setPersistence,
} from 'firebase/auth'
import { doc, getDoc } from 'firebase/firestore'
import { auth, db } from '../../firebase'

const loginUser = async (email: string, password: string) => {
  await setPersistence(auth, browserSessionPersistence)
  const userCredential = await signInWithEmailAndPassword(auth, email, password)
  const { user } = userCredential

  if (user) {
    const userDocRef = doc(db, 'users', user.uid)
    const userDoc = await getDoc(userDocRef)
    if (userDoc.exists()) {
      return {
        uid: user.uid,
        ...userDoc.data(),
      }
    }
  } else {
    console.log('loginUser error')
  }
}

export default loginUser
