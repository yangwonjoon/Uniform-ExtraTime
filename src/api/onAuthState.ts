import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

export const onAuthState = () => {
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            return console.log("firebase user", user);
        });
    }, []);

}