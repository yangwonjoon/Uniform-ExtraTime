import { setDoc, doc } from 'firebase/firestore'
import { ISignUpFormData } from '@/types/types'
import { db } from '../../firebase'

const createUserProfile = async (
  uid: string,
  signUpFormData: ISignUpFormData,
) => {
  const userDocRef = doc(db, 'users', uid)
  await setDoc(userDocRef, {
    email: signUpFormData.email,
    name: signUpFormData.name,
    nickname: signUpFormData.nickname,
    isSeller: signUpFormData.isSeller,
    createdAt: signUpFormData.createdAt,
    updatedAt: signUpFormData.updatedAt,
  })
  return userDocRef
}

export default createUserProfile
