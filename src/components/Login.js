import "./Login.css";

// bootstrap for styling
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";

import AnimatedAlert from "./AnimatedAlert";

import { getUsers } from "../data/Repository"

// react components for functionality
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ login }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const users = getUsers();
  

  const attemptLogin = (e) => {
    setError(false); // clear error in case user has set it already
    e.preventDefault(); // prevent form from submitting automatically
    
    if(email in users && password === users[email]['password']) {
      login(email)
      navigate("/", { replace: true });
    } else {
      setError(true); // either email or password is wrong
    }


  };

  return (
    <Form className="mb-3 loginForm" onSubmit={attemptLogin}>
      <h1 className="mb-3 d-flex justify-content-center">Sign In</h1>
      
      <AnimatedAlert
        variant="danger"
        message="Sorry, your email and/or password did not match our records"
        display={error}
        setDisplay={setError}
      />

      <FloatingLabel label="Email address" className="mb-3">
        <Form.Control
          type="email"
          name="email"
          placeholder="email@example.com"
          value={email}
          required
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
          required
          onChange={(event) => {
            setPassword(event.target.value);
          }}
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
