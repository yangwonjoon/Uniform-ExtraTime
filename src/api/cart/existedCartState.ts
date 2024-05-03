import { auth, db } from '../../firebase'
import { getDoc, doc } from "firebase/firestore";
import { cartStore } from "@/store/cartStore";
import { useEffect } from "react";

export const existedCartState = () => {
    useEffect(() => {
        const cartFromFireStore = auth.onAuthStateChanged(async (user) => {
            if (user) {
                const userId = user.uid;
                const docRef = doc(db, "carts", userId);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    const data = docSnap.data();
                    if (data && data.items) {
                        cartStore.setState({ cart: data.items });
                    } else {
                        console.log("카드에 아이템 없음");
                    }
                } else {
                    console.log("cartFromFireStore ERROR");
                }
            } else {
                cartStore.setState({ cart: [] });
            }
        });

        return () => cartFromFireStore();
    }, []);
}