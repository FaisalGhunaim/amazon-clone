import "./App.css";

import { Router, Route, Switch, Routes, Link } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import { useStateValue } from "./components/StateProvider";
import { useEffect } from "react";
import { auth } from "./firebase";
function App() {
  const [{ user }, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET__USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET__USER",
          user: null,
        });
      }
    });
  }, []);
  console.log(user);
  return (
    <div className="app">
      <Routes>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
