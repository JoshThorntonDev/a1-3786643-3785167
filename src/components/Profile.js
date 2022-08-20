import "./Profile.css";

import { getUsers } from "../data/Repository";
import { PencilSquare, PersonCircle, Trash } from "react-bootstrap-icons";


function Profile() {
  const users = getUsers();
  const currentUser = localStorage.getItem("currentUser");

  return (
    <div className="profile">
        
       <PersonCircle size={'10vh'} className="image"></PersonCircle>

      <div className="information">
        <h1>{users[currentUser].name}'s Profile</h1>
        <p>{users[currentUser].email}</p>
        <hr></hr>
        <p>Joined: {users[currentUser].date}</p>
      </div>
      <div className="edit">
        <div><PencilSquare className="editButton" size={'3vh'}></PencilSquare></div>
        <div><Trash className="deleteButton" size={'3vh'}></Trash></div>
        
      </div>
    </div>
  );
}

export default Profile;
