import "./App.css";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { SellerSignUp } from "./page/signup/sellerSignUp";
import { SellerLogin } from "./page/login/sellerLogin";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { Main } from "./page/main/main";


const App = () => {

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log("user", user);
    });
  }, []);

  return (
    <div className="App container mx-auto my-0 w-1/2 h-screen">


      <Routes>
        <Route path="/" element={<Main></Main>}></Route>
        <Route path="/signup" element={<SellerSignUp></SellerSignUp>}></Route>
        <Route path="/login" element={<SellerLogin></SellerLogin>}></Route>
      </Routes>

    </div>
  );
};

export default App;