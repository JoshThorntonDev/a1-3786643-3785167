// bootstrap for styling
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";

import AnimatedAlert from "./AnimatedAlert"
import {insertUser } from "../data/Repository.js";

//react components
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [user, setUser] = useState(
    {
      name: "",
      email: "",
      password: "",
    });
  const [error, setError] = useState("");

  const handleInputChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  }

  const handleSubmit = (e) => {
    setError(""); //clear error
    e.preventDefault(); //prevent form from submitting automatically

     if (!user.name) {
      setError("Name is a required field");
      return;
    }
    if (!user.email) {
      setError("Email is a required field");
      return;
    }
    if (!user.password) {
      setError("Password is a required field");
      return;
    }
    //TODO: check if email is valid and password is strong

    //if details pass all validation, save the new user to localstorage
    //and log them in, just using setError for now to test form submission

    //After passing validation, set user details to user variable

    //Insert user into local storage

    insertUser(user);
    
    setError(
      "Success! Name: " + user.name + " Email: " + user.email + " Password: " + user.password
    );
  };

  return (
    <Form className="mb-3 loginForm" onSubmit={handleSubmit}>
      <h1 className="mb-3 d-flex justify-content-center">Sign Up</h1>

      <AnimatedAlert variant="danger" message={error} display={error} setDisplay={setError}/>

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
