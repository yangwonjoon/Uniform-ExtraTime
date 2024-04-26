import { SignUp } from "./page/signup/SignUp";
import { SellerSignUp } from "./page/signup/SellerSignUp";
import { CustomerSignUp } from "./page/signup/CustomerSignUp"
import { SellerLogin } from "./page/login/SellerLogin";
import { Route, Routes } from "react-router-dom";
import { Home } from "./page/main/Home";
import { Team } from "./page/main/Team";
import { Logo } from "./components/common/Logo";
import { Sell } from "./page/seller/Sell";
import { Mypage } from "./page/mypage/MyPage";
import { CreateUpdateProduct } from "./page/seller/CreateUpdateProduct";
// import { onAuthState } from "./api/onAuthState";

const App = () => {

  // onAuthState()

  return (
    <div className="App container mx-auto my-0 w-1/2 h-screen">
      <Logo></Logo>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path='/team' element={<Team></Team>}></Route>
        <Route path="/sell" element={<Sell></Sell>}></Route>
        <Route path="/sell/createProduct" element={<CreateUpdateProduct></CreateUpdateProduct>}></Route>
        <Route path="/sell/createProduct/:id" element={<CreateUpdateProduct></CreateUpdateProduct>} />
        <Route path="/mypage" element={<Mypage></Mypage>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/signup/seller" element={<SellerSignUp></SellerSignUp>}></Route>
        <Route path="/signup/customer" element={<CustomerSignUp></CustomerSignUp>}></Route>
        <Route path="/login" element={<SellerLogin></SellerLogin>}></Route>
      </Routes>
    </div>
  );
}

export default App;