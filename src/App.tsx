import "./App.css";
import { createUserWithEmailAndPassword, } from "firebase/auth";
import { auth } from "./firebase";
import { SellerSignUp } from "./page/signup/sellerSignUp";
import { SellerLogin } from "./page/login/sellerLogin";
import { Route, Routes } from "react-router-dom";


const App = () => {

  return (
    <div className="App container mx-auto my-0 w-1/2 h-screen">
      <Routes>
        <Route path="/" element={<SellerSignUp></SellerSignUp>}></Route>
        <Route path="/login" element={<SellerLogin></SellerLogin>}></Route>
      </Routes>

    </div>
  );
};

export default App;