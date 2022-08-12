import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";

function App() {
  return (
    <div>
      <Header />
      <div>
        <p>Main area</p>
      </div>
      <Footer />
    </div>
  );
}

export default App;
