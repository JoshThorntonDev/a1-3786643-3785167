

// bootstrap for styling
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FloatingLabel } from "react-bootstrap";


function Register() {
    return (
        <Form className="mb-3 loginForm">
        <h1 className="mb-3 d-flex justify-content-center">Sign Up</h1>
        <FloatingLabel label="Name" className="mb-3">
          <Form.Control type="text" name="name" placeholder="name" />
        </FloatingLabel>
        <FloatingLabel label="Email" className="mb-3">
          <Form.Control type="email" name="email" placeholder="email" />
        </FloatingLabel>
        <FloatingLabel label="Password" className="mb-3">
            <Form.Control type="password" name="password" placeholder="password"/>
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