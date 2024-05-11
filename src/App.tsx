import { SignUp } from "./page/signup/SignUp";
import { SellerSignUp } from "./page/signup/SellerSignUp";
import { CustomerSignUp } from "./page/signup/CustomerSignUp"
import { Login } from "./page/login/Login";
import { Route, Routes } from "react-router-dom";
import { Home } from "./page/product/Home";
import { Team } from "./page/product/Team";
import { Logo } from "./components/common/Logo";
import { Sell } from "./page/sell/Sell";
import { ProductDetail } from "./page/product/ProductDetail";
import { Mypage } from "./page/mypage/MyPage";
import { UpdateProduct } from "./page/sell/UpdateProduct";
import { CreateProduct } from "./page/sell/CreateProduct";
import { existedCartState } from "./api/cart/existedCartState";
import { Layout } from "./routes/Layout";
import { AuthLayout } from "./routes/AuthLayout";

const App = () => {
  existedCartState()

  return (


    <Routes>
      <Route element={<Layout></Layout>}>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/:productId" element={<ProductDetail></ProductDetail>}></Route>
        <Route path='/team' element={<Team></Team>}></Route>
        <Route path="/sell" element={<Sell></Sell>}></Route>
        <Route path="/sell/createProduct" element={<CreateProduct></CreateProduct>}></Route>
        <Route path="/sell/updateProduct/:productId" element={<UpdateProduct></UpdateProduct>} />
        <Route path="/mypage" element={<Mypage></Mypage>}></Route>
      </Route>
      <Route element={<AuthLayout></AuthLayout>}>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/signup/seller" element={<SellerSignUp></SellerSignUp>}></Route>
        <Route path="/signup/customer" element={<CustomerSignUp></CustomerSignUp>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Route>
    </Routes>
  );
}

export default App;