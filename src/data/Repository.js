//Code adapted from Week 5 Practical Activity 1 'repository.js'

const USERS_KEY = "users";

function initUsers() {
    if(localStorage.getItem(USERS_KEY) !== null)
        return;
    
    //Create empty users object if it doesn't already exist
    setUsers({});
}

function getUsers() {
    //Retrieve all users from LocalStorage
    return JSON.parse(localStorage.getItem(USERS_KEY));
}

function setUsers(users) {
    //Set all users to localStorage
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

function insertUser(user) {
    //Retrieve users, add new users to the list, and call setUsers
    const users = getUsers();

    users[user.email] = user;

    setUsers(users);
}

function updateUser(user) {
    const users = getUsers();

    users[user.email] = user;

    setUsers(users);
}


function removeUser(key) {
    //Takes key (email) as a parameter, retrieves list of users
    //and deletes a single user based on the key/email provided
    const users = getUsers();

    delete users[key];

    //Set users again after user has been removed
    setUsers(users);
}

export {
    initUsers,
    getUsers,
    insertUser,
    updateUser,
    removeUser
}