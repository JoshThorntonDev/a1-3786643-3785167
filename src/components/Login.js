import "./Login.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FloatingLabel } from "react-bootstrap";

function Login() {
  return (
    <Form className="mb-3 loginForm">
      <h1 className="mb-3 d-flex justify-content-center">Sign In</h1>
      <FloatingLabel label="Email address" className="mb-3">
        <Form.Control
          type="email"
          name="email"
          placeholder="email@example.com"
        />
      </FloatingLabel>

      <FloatingLabel label="Password" className="mb-3">
        <Form.Control
          type="password"
          name="password"
          placeholder="Password here"
        />
      </FloatingLabel>
      <div className="d-flex justify-content-center">
        <Button variant="primary" type="submit">
          Login
        </Button>
      </div>
    </Form>
  );
}

export default Login;
