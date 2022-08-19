import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Landing from "./components/Landing.js";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
  const [currentUser, setCurrentUser] = useState(
    localStorage.getItem("currentUser")
  );
  const login = (email) => {
    setCurrentUser(email);
    localStorage.setItem("currentUser", email);
  };
  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem("currentUser");
  };

  return (
    <div className="contain">
    <BrowserRouter>

        <Header logout={logout} currentUser={currentUser} />
        <div className="content">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login login={login} />} />
          <Route path="/register" element={<Register login={login} />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element="404 Page Here" />
        </Routes>
        </div>
        <Footer />

    </BrowserRouter>

    </div>
  );
}

export default App;
