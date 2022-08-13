import "./Header.css";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";

function Header({logout, currentUser}) {
  const navigate = useNavigate();

  return (
    <Navbar className="headerNav" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>Website Name</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
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

          {currentUser ? (
            <Button
              onClick={() => {
                logout();
                navigate("/", {
                  replace: true,
                });
              }}
            >
              Logout
            </Button>
          ) : (
            <div>
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
              <Button
                variant="primary"
                onClick={() => {
                  navigate("/register", {
                    replace: true,
                  });
                }}
              >
                Sign Up
              </Button>
            </div>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
