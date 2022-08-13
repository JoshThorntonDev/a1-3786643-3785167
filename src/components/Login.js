import "./Login.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FloatingLabel } from "react-bootstrap";

function Login() {
  return (
    <div className="login">
      <Form className="mb-3 loginForm">
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
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
}

export default Login;
