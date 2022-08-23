import "./Profile.css";
import Button from "react-bootstrap/Button";
import { getUsers, updateUser } from "../data/Repository";
import Modal from "react-bootstrap/Modal";
import {
  CheckCircleFill,
  PencilSquare,
  PersonCircle,
  Trash,
  XCircleFill,
} from "react-bootstrap-icons";
import { useState } from "react";
import { Form } from "react-bootstrap";

function Profile() {
  const handleInputChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  const users = getUsers();
  const currentUser = localStorage.getItem("currentUser");

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    // toggle the edit state without saving
    // since this is used for cancelling, it has to clear the form as well
    fields.name = "";
    fields.password = "";
    setShowModal((current) => !current);
  };

  const attemptSave = (event) => {
    
    event.preventDefault();
    if(fields.password === users[currentUser].password) {
      if (fields.name !== "" && fields.name.length <=20) {
        const newInfo = { ...fields };
        updateUser(newInfo);
      }
    }
    toggleModal();

  };

  const [fields, setFields] = useState({
    email: users[currentUser].email,
    name: "",
    date: users[currentUser].date,
    password: users[currentUser].password,
  });

  const deleteUser = () => {
    console.log("delete");
  };

  // if (edit) {
  //   return (
  //     <div className="profile">
  //       <PersonCircle size={"10vh"} className="image"></PersonCircle>

  //       <Form id="profileEdit" className="information" onSubmit={attemptSave}>
  //         <Form.Group className="shortForm mb-4">
  //           <div className="name">
  //             <Form.Control
  //               name="name"
  //               type="text"
  //               placeholder={users[currentUser].name}
  //               value={fields.name}
  //               onChange={handleInputChange}
  //             />
  //             <h1>'s Profile</h1>
  //           </div>
  //         </Form.Group>

  //         <p>{users[currentUser].email}</p>
  //         <hr></hr>
  //         <p>Joined: {users[currentUser].date}</p>
  //       </Form>
  //       <div></div>
  //       <div className="edit">
  //         <Button onClick={attemptSave} variant="success" type="submit">
  //           <CheckCircleFill size={"2vh"}></CheckCircleFill> Save
  //         </Button>

  //         <Button onClick={toggleEdit} variant="danger" type="submit">
  //           <XCircleFill size={"2vh"}></XCircleFill> Cancel
  //         </Button>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <div className="profile">
      <Modal show={showModal} onHide={toggleModal}>
        <Modal.Header closeButton>
          <Modal.Title>Profile Editor</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>New Username (Max: 20 characters)</Form.Label>
              <Form.Control
                name="name"
                type="text"
                placeholder={users[currentUser].name}
                autoFocus
                maxLength={20}
                value={fields.name}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Confirmation Password</Form.Label>
              <Form.Control
                name="password"
                type="password"
                placeholder="Enter your password here"
                value={fields.password}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={toggleModal}>
            Close
          </Button>
          <Button onClick={attemptSave} variant="success" type="submit">
            <CheckCircleFill></CheckCircleFill> Save
          </Button>
        </Modal.Footer>
      </Modal>

      <PersonCircle size={"10vh"} className="image"></PersonCircle>

      <div className="information">
        <h1>{users[currentUser].name}'s Profile</h1>
        <p>{users[currentUser].email}</p>
        <hr></hr>
        <p>Joined: {users[currentUser].date}</p>
      </div>
      <div></div>
      <div className="edit">
        <Button onClick={toggleModal} variant="primary" type="submit">
          <PencilSquare size={"2vh"}></PencilSquare> Edit
        </Button>

        <Button onClick={deleteUser} variant="danger" type="submit">
          <Trash size={"2vh"}></Trash> Delete
        </Button>
      </div>
    </div>
  );
}

export default Profile;

// updating code adapted from Week5 practical activity 1
