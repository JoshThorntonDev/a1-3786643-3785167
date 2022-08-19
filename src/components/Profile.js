import "./Profile.css";

import { getUsers } from "../data/Repository";

function Profile() {
    const users = getUsers();
    const currentUser = localStorage.getItem("currentUser");

    return (
        <div className="profile">
            <h1>{users[currentUser].name}'s Profile</h1>
                <p>{users[currentUser].email}</p>
                <p>Joined: {users[currentUser].date}</p>
        </div>
    );
}

export default Profile;