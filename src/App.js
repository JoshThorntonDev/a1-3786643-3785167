import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Login from "./components/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element='root' />
          <Route path="/login" element={<Login/>} />
          <Route path="*" element='404 Page Here' />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
