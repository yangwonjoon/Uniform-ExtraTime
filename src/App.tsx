import { SellerSignUp } from "./page/signup/sellerSignUp";
import { SellerLogin } from "./page/login/sellerLogin";
import { Route, Routes } from "react-router-dom";
import { Home } from "./page/main/home";
import { Team } from "./page/main/team";
import { Logo } from "./components/common/logo";
import { Sell } from "./page/seller/sell";
import { Mypage } from "./page/mypage/mypage";
import { CreateUpdateProduct } from "./page/seller/createUpdateProduct";
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
        <Route path="/signup" element={<SellerSignUp></SellerSignUp>}></Route>
        <Route path="/login" element={<SellerLogin></SellerLogin>}></Route>
      </Routes>
    </div>
  );
}

export default App;