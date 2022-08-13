import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
  const [currentUser, setCurrentUser] = useState(localStorage.getItem("currentUser"));
  const login = (email) => {
    setCurrentUser(email);
    localStorage.setItem("currentUser", email);
  };
  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem("currentUser")
  }

  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={currentUser} />
          <Route path="/login" element={<Login login={login}/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="*" element='404 Page Here' />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
