// App.js
import "./App.css";
import {
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./firebase";
import { SellerSignUp } from "./page/signup/sellerSignUp";


const App = () => {


  return (
    <div className="App container mx-auto my-0 w-1/2 h-screen">
      <SellerSignUp></SellerSignUp>
    </div>
  );
};

export default App;