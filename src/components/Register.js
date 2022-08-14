

// bootstrap for styling
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FloatingLabel } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";

//react components
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    setError(""); //clear error
    e.preventDefault(); //prevent form from submitting automatically

    if (!name) {
      setError("Name is a required field");
      return;
    }
    if (!email) {
      setError("Email is a required field");
      return;
    }
    if (!password) {
      setError("Password is a required field");
      return;
    }
    //TODO: check if email is valid and password is strong

    //if details pass all validation, save the new user to localstorage
    //and log them in, just using setError for now to test form submission
    setError("Success! Name: " + name + " Email: " + email + " Password: " + password )
  }

    return (
        <Form className="mb-3 loginForm" onSubmit={handleSubmit}>
        <h1 className="mb-3 d-flex justify-content-center">Sign Up</h1>
        {error && ( // show when there is an error
        <Alert variant="danger" onClose={() => setError(false)} dismissible>
          {error}
        </Alert>
      )}
        <FloatingLabel label="Name" className="mb-3">
          <Form.Control 
            type="text" 
            name="name" 
            placeholder="name"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </FloatingLabel>
        <FloatingLabel label="Email" className="mb-3">
          <Form.Control
            type="email"
            name="email"
            placeholder="email"
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
              placeholder="password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
        </FloatingLabel>
        <div className="d-flex justify-content-center">
          <Button variant="primary" type="submit">
              Create Account
          </Button>
        </div>
        </Form>
    );
}

export default Register;