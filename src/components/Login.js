import "./Login.css";
import Form from "react-bootstrap/Form";

function Login() {
  return (
    <div className="login">
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="email" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="password"
          />
        </Form.Group>
      </Form>
    </div>
  );
}

export default Login;
