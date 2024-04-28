import { SignUp } from "./page/signup/SignUp";
import { SellerSignUp } from "./page/signup/SellerSignUp";
import { CustomerSignUp } from "./page/signup/CustomerSignUp"
import { Login } from "./page/login/Login";
import { Route, Routes } from "react-router-dom";
import { Home } from "./page/main/Home";
import { Team } from "./page/main/Team";
import { Logo } from "./components/common/Logo";
import { Sell } from "./page/sell/Sell";
import { Mypage } from "./page/mypage/MyPage";
import { UpdateProduct } from "./components/product/UpdateProduct";
import { CreateProduct } from "./components/product/CreateProduct";

const App = () => {

  return (
    <div className="App container mx-auto my-0 w-1/2 h-screen">
      <Logo></Logo>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path='/team' element={<Team></Team>}></Route>
        <Route path="/sell" element={<Sell></Sell>}></Route>
        <Route path="/sell/createProduct" element={<CreateProduct></CreateProduct>}></Route>
        <Route path="/sell/updateProduct/:productId" element={<UpdateProduct></UpdateProduct>} />

        {/* 로그인, 회원가입 */}
        <Route path="/mypage" element={<Mypage></Mypage>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/signup/seller" element={<SellerSignUp></SellerSignUp>}></Route>
        <Route path="/signup/customer" element={<CustomerSignUp></CustomerSignUp>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;