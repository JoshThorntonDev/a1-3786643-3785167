import "./Header.css";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <div className="header">
      <h1>Header :)</h1>

      <Button
        variant="danger"
        onClick={() => {
          navigate("/", {
            replace: true,
          });
        }}
      >
        Home (temp.)
      </Button>

      <Button
        variant="primary"
        onClick={() => {
          navigate("/login", {
            replace: true,
          });
        }}
      >
        Login
      </Button>
    </div>
  );
}

export default Header;
