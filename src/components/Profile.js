import "./Profile.css";
import Button from "react-bootstrap/Button";
import { getUsers } from "../data/Repository";
import { PencilSquare, PersonCircle, Trash } from "react-bootstrap-icons";

function Profile() {
  const users = getUsers();
  const currentUser = localStorage.getItem("currentUser");

  return (
    <div className="profile">
    
      <PersonCircle size={"10vh"} className="image"></PersonCircle>

      <div>
        <h1>{users[currentUser].name}'s Profile</h1>
        <p>{users[currentUser].email}</p>
        <hr></hr>
        <p>Joined: {users[currentUser].date}</p>
      </div>
      <div></div>
      <div className="edit">
        <Button variant="primary" type="submit">
          <PencilSquare size={"2vh"}></PencilSquare>
        </Button>

        <Button variant="danger" type="submit">
          <Trash size={"2vh"}></Trash>
        </Button>
      </div>
    </div>
  );
}

export default Profile;
