import { setDoc, doc } from "firebase/firestore";
import { db } from "../firebase";
import { ISignUpFormData } from "@/page/signup/ISignUp";

export const createUserProfile = async (uid: string, formData: ISignUpFormData) => {

    const userDocRef = doc(db, "users", uid);
    await setDoc(userDocRef, {
        email: formData.email,
        name: formData.name,
        nickname: formData.nickname,
        isSeller: formData.isSeller,
    });
    return userDocRef;
};
