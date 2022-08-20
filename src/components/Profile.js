import "./Profile.css";

import { getUsers } from "../data/Repository";

function Profile() {
  const users = getUsers();
  const currentUser = localStorage.getItem("currentUser");

  return (
    <div className="profile">
      <img
        className="image"
        alt={"Placeholder profile"}
        src="https://cdn-icons.flaticon.com/png/512/552/premium/552848.png?token=exp=1660970412~hmac=cf7a2224dc7e1eb42c971940b696d080"
      ></img>

      <div className="information">
        <h1>{users[currentUser].name}'s Profile</h1>
        <p>{users[currentUser].email}</p>
        <hr></hr>
        <p>Joined: {users[currentUser].date}</p>
      </div>
      <div className="edit">

      </div>
    </div>
  );
}

export default Profile;
