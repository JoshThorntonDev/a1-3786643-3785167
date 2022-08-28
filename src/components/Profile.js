import "./Profile.css";
import Button from "react-bootstrap/Button";
import { getUsers } from "../data/Repository";

import { PencilSquare, PersonCircle, Trash } from "react-bootstrap-icons";
import { useContext, useEffect, useState } from "react";
import ProfileEditor from "./ProfileEditor";
import ProfileDeleter from "./ProfileDeleter";
import { getAllPostsByUser } from "../data/PostRepository";
import PostCard from "./PostCard";
import UserContext from "../contexts/UserContext";

function Profile() {
  const users = getUsers();
  const {currentUser} = useContext(UserContext)

  const posts = getAllPostsByUser(currentUser);
  // this is used to get all the posts and display them on this profile page
  // currentUser could be changed to display posts of other users if accessing other profiles becomes a requirement

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

  const toggleEdit = () => {
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

  const [deleted, setDeleted] = useState(false);

  useEffect(() => {
    setDeleted(false);
  }, [deleted]);

  return (
    <div>
      <div className="profile">
        <ProfileEditor
          show={showModal}
          toggle={toggleEdit}
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
          <Button onClick={toggleEdit} variant="primary" type="submit">
            <PencilSquare size={"2vh"}></PencilSquare> Edit
          </Button>

          <Button onClick={toggleDelete} variant="danger" type="submit">
            <Trash size={"2vh"}></Trash> Delete
          </Button>
        </div>
      </div>

      <hr />

      <h3>All posts by {users[currentUser].name}</h3>

      {posts.length === 0 ? (
        <div className="d-flex justify-content-center">
          <h5 className="text-muted">This user has no existing posts</h5>
        </div>
      ) : (
        Object.keys(posts).map((id) => {
          const post = posts[id];

          return (
            <PostCard
              className="smallCards"
              key={id}
              id={id}
              post={post}
              setDeleted={setDeleted}
              allowDelete={true}
            />
          );
        })
      )}
    </div>
  );
}

export default Profile;

// updating code adapted from Week5 practical activity 1
