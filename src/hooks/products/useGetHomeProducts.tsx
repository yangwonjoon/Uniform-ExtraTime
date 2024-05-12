// import { useQuery } from '@tanstack/react-query';
// import { collection, getDocs, query, orderBy, where } from "firebase/firestore";
// import { db } from "@/firebase";

// const useGetHomeProducts = () => {
//     return useQuery(['products'], async () => {
//         const productsRef = collection(db, "products");
//         const q = query(productsRef, where("isSell", "==", false), orderBy("createdAt", "desc"));
//         const querySnapshot = await getDocs(q);
//         return querySnapshot.docs.map(doc => ({
//             productId: doc.id,
//             ...doc.data()
//         }));
//     });

// }
