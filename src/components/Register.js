// bootstrap for styling
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";

import AnimatedAlert from "./AnimatedAlert"
import { insertUser } from "../data/Repository.js";

//react components
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register({ login }) {
  const [user, setUser] = useState(
    {
      name: "",
      email: "",
      password: "",
      date: "",
    });
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  }

  const handleSubmit = (e) => {
    setError(false); //clear error
    setMessage("") //clear message

    e.preventDefault(); //prevent form from submitting automatically

     if (!user.name) {
      setError(true);
      setMessage("Name is a required field");
      return;
    }
    if (!user.email) {
      setError(true);
      setMessage("Email is a required field");
      return;
    }
    if (!user.password) {
      setError(true);
      setMessage("Password is a required field");
      return;
    }
    //TODO: check if email is valid and password is strong

    //After passing validation, insert user into local storage

    //WIP NEED TO FORMAT DATE BETTER
    const date = new Date();

    user.date = date;

    insertUser(user);

    //Log the user in and redirect them
    login(user.email);
    navigate("/", { replace: true });
  };

  return (
    <Form className="mb-3 loginForm" onSubmit={handleSubmit}>
      <h1 className="mb-3 d-flex justify-content-center">Sign Up</h1>

      <AnimatedAlert variant="danger" message={message} display={error} setDisplay={setError}/>

      <FloatingLabel label="Name" className="mb-3">
        <Form.Control
          type="text"
          name="name"
          placeholder="name"
          value={user.name}
          onChange={handleInputChange}
        />
      </FloatingLabel>
      <FloatingLabel label="Email" className="mb-3">
        <Form.Control
          type="email"
          name="email"
          placeholder="email"
          value={user.email}
          onChange={handleInputChange}
        />
      </FloatingLabel>
      <FloatingLabel label="Password" className="mb-3">
        <Form.Control
          type="password"
          name="password"
          placeholder="password"
          value={user.password}
          onChange={handleInputChange}
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
