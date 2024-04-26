import { setDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";
import { ISignUpFormData } from "@/types/types";

export const createUserProfile = async (uid: string, signUpFormData: ISignUpFormData) => {

    const userDocRef = doc(db, "users", uid);
    await setDoc(userDocRef, {
        email: signUpFormData.email,
        name: signUpFormData.name,
        nickname: signUpFormData.nickname,
        isSeller: signUpFormData.isSeller,
        createdAt: signUpFormData.createdAt,
        updatedAt: signUpFormData.updatedAt
    });
    return userDocRef;
};
