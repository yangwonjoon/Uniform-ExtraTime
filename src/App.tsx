import { SignUp } from "./page/signup/SignUp";
import { SellerSignUp } from "./page/signup/SellerSignUp";
import { CustomerSignUp } from "./page/signup/CustomerSignUp"
import { Login } from "./page/login/Login";
import { Route, Routes } from "react-router-dom";
import { Home } from "./page/main/Home";
import { Team } from "./page/main/Team";
import { Logo } from "./components/common/Logo";
import { Sell } from "./page/sell/Sell";
import { ProductDetail } from "./page/main/ProductDetail";
import { Mypage } from "./page/mypage/MyPage";
import { UpdateProduct } from "./components/product/UpdateProduct";
import { CreateProduct } from "./components/product/CreateProduct";
import { existedCartState } from "./api/cart/existedCartState";

const App = () => {
  existedCartState()

  return (
    <div className="App container mx-auto my-0 w-1/2 h-screen">
      <Logo></Logo>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/:productId" element={<ProductDetail></ProductDetail>}></Route>
        <Route path='/team' element={<Team></Team>}></Route>
        <Route path="/sell" element={<Sell></Sell>}></Route>
        <Route path="/sell/createProduct" element={<CreateProduct></CreateProduct>}></Route>
        <Route path="/sell/updateProduct/:productId" element={<UpdateProduct></UpdateProduct>} />
        <Route path="/mypage" element={<Mypage></Mypage>}></Route>

        {/* 로그인, 회원가입 */}
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/signup/seller" element={<SellerSignUp></SellerSignUp>}></Route>
        <Route path="/signup/customer" element={<CustomerSignUp></CustomerSignUp>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
// firebaseConfig 파일에서 db를 import

// function UpdateFirestore() {
//   const addIsSellField = async () => {
//     const productsRef = collection(db, 'products');
//     const snapshot = await getDocs(productsRef); // Corrected usage of getDocs

//     const batch = writeBatch(db); // Corrected to use writeBatch

//     snapshot.docs.forEach(doc => {
//       const docRef = doc.ref; // Correctly get document reference
//       batch.update(docRef, { isSell: false }); // isSell 필드를 true로 설정
//     });

//     await batch.commit();
//     console.log('모든 문서에 isSell 필드가 추가되었습니다.');
//   };

//   return (
//     <button onClick={addIsSellField}>Add isSell Field to All Products</button>
//   );
// }