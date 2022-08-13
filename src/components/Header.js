import "./Header.css";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from 'react-bootstrap/Navbar';
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>Website Name</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          
        
      <Button
        variant="danger"
        style={{marginRight: "10px"}}
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
        style={{marginRight: "10px"}}
        onClick={() => {
          navigate("/register", {
            replace: true,
          });
        }}
      >
        Sign Up
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
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
