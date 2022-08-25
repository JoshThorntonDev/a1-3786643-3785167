import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useRef, useState } from "react";
import { getUsers, removeUser } from "../data/Repository";
import Button from "react-bootstrap/Button";
import AnimatedAlert from "./AnimatedAlert";
import { useNavigate } from "react-router-dom";

//renders a modal that allows the user to delete their account
// similar to the ProfileEditor function, but only takes an input of confirmation password
//and deletes the user, rather than updating information

// required props are:
// show (boolean)
// toggle (function, preferably one that clears `fields` and changes `show`)
// fields (containing email, name, date and password)
// setFields
function ProfileDeleter(props) {
  const users = getUsers();
  const currentUser = localStorage.getItem("currentUser");
  // get users and current users so we dont have to have ugly things like props.users[props.currentUser].password

  const handleInputChange = (event) => {
    props.setFields({
      ...props.fields,
      [event.target.name]: event.target.value,
    });
  };

  const passwordRef = useRef(null);

  const [error, setError] = useState(false);
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const attemptSave = (event) => {
    setMessage(""); // clear error message
    setError(false); // reset error state
    event.preventDefault(); // prevent form from submitting

    //check if password is correct
    if (props.fields.password === users[currentUser].password) {
        //if password is correct, delete the user from local storage,
        // log them out, and return to home page
        removeUser(currentUser);
        localStorage.removeItem('currentUser');
        setShow(true);
        setMessage("Account deleted successfully");
        setTimeout(() => {
            navigate("/", { replace: true });
          }, 1500);

    } else {
        setMessage("Sorry, your password was incorrect");
        setError(true);
        passwordRef.current.focus(); // focus on password field
    }
  };

  return (
    <Modal show={props.show} onHide={props.toggle}>
      <Modal.Header closeButton>
        <Modal.Title>Delete Profile</Modal.Title>
      </Modal.Header>
      <AnimatedAlert variant="success" message={message} display={show} setDisplay={setShow}/>
      <AnimatedAlert
        variant="danger"
        message={message}
        display={error}
        setDisplay={setError}
      />
      <Form onSubmit={attemptSave}>
        <Modal.Body>
            <p>Are you sure you wish to delete this account?</p>
            <Form.Group className="mb-3">
                <Form.Label>Confirmation Password</Form.Label>
                <Form.Control
                name="password"
                type="password"
                placeholder="Enter your password here"
                value={props.fields.password}
                onChange={handleInputChange}
                required
                ref={passwordRef}
                />
            </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.toggle}>
            Close
          </Button>
          <Button onClick={attemptSave} variant="danger" type="submit">
            Delete
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}
export default ProfileDeleter;