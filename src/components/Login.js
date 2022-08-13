import "./Login.css";

// bootstrap for styling
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FloatingLabel } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";

// react components for functionality
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const USERNAME = "test@email.com";
const PASSWORD = "password1";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const attemptLogin = (e) => {
    setError(""); // clear error in case user has set it already
    e.preventDefault(); // prevent form from submitting automatically

    if (email === USERNAME && password === PASSWORD) {
      alert("Logged in");
    } else {
      setError(true);
    }
  };

  return (
    <Form className="mb-3 loginForm" onSubmit={attemptLogin}>
      <h1 className="mb-3 d-flex justify-content-center">Sign In</h1>
      <FloatingLabel label="Email address" className="mb-3">
        <Form.Control
          type="email"
          name="email"
          placeholder="email@example.com"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
      </FloatingLabel>

      <FloatingLabel label="Password" className="mb-3">
        <Form.Control
          type="password"
          name="password"
          placeholder="Password here"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
      </FloatingLabel>
      {error && ( // show when there is an error
        <Alert variant="danger" onClose={() => setError(false)} dismissible>
          Your email and/or password did not match
        </Alert>
      )}
      <div className="d-flex justify-content-center">
        <Button variant="primary" type="submit">
          Login
        </Button>
      </div>
    </Form>
  );
}

export default Login;
