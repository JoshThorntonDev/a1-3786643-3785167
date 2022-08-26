import "./Profile.css";
import Button from "react-bootstrap/Button";
import { getUsers } from "../data/Repository";

import { PencilSquare, PersonCircle, Trash } from "react-bootstrap-icons";
import { useState } from "react";
import ProfileEditor from "./ProfileEditor";
import ProfileDeleter from "./ProfileDeleter";
import { getPost } from "../data/PostRepository";

function Profile() {
  const users = getUsers();
  const currentUser = localStorage.getItem("currentUser");
  const [fields, setFields] = useState({
    // a field storing all possible user data, currently only name is editable
    email: users[currentUser].email,
    name: "",
    date: users[currentUser].date,
    password: "",
  });
  // the field is stored here to make it easier to clear the values when the modal is closed,
  // either by closing it manually or when an update is successful

  const [showModal, setShowModal] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  const toggleModal = () => {
    // toggle the edit state
    // it also clears the fields in case the user opens it again
    fields.name = "";
    fields.password = "";
    setShowModal((current) => !current);
  };

  const toggleDelete = () => {
    //toggle delete state, clear password in case it was entered before
    fields.password = "";
    setShowDelete((current) => !current);
  };

  users[currentUser].posts.forEach(element => {
    console.log(element + " LOOK AT ME YOU NEED TO DO THIS NOW")
  });
  

  return (
    <div>
    <div className="profile">
      <ProfileEditor
        show={showModal}
        toggle={toggleModal}
        fields={fields}
        setFields={setFields}
      />

      <ProfileDeleter
        show={showDelete}
        toggle={toggleDelete}
        fields={fields}
        setFields={setFields}
      />
      <PersonCircle size={"10vh"} className="image"></PersonCircle>

      <div className="information">
        <h1>{users[currentUser].name}'s Profile</h1>
        <p>{users[currentUser].email}</p>
        <hr />
        <p>Joined: {users[currentUser].date}</p>
      </div>

      <div className="edit">
        <Button onClick={toggleModal} variant="primary" type="submit">
          <PencilSquare size={"2vh"}></PencilSquare> Edit
        </Button>

        <Button onClick={toggleDelete} variant="danger" type="submit">
          <Trash size={"2vh"}></Trash> Delete
        </Button>
      </div>
      
    </div>
    

    
    </div>

  );
}

export default Profile;

// updating code adapted from Week5 practical activity 1
