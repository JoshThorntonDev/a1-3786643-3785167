import "./Login.css";
import Form from "react-bootstrap/Form";

function Login() {
  return (
    <Form>
      <Form.Group>
        <input type="email" name="email" placeholder="email" />
      </Form.Group>
      <Form.Group>
        <input type="password" name="password" placeholder="password" />
      </Form.Group>
    </Form>
  );
}

export default Login;
