import Form from "react-bootstrap/Form";

function Register() {
    return (
        <div className="register">
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

export default Register;