function validate(user) {
    //Check that username is present
    let error = "";

    if (!user.name) {
        error = "Name is a required field";
        return error;
    }
    //Check that email is present
    if (!user.email) {
        error = "Email is a required field";
        return error;
    }
      //Check that password is present
    if (!user.password) {
    error = "Password is a required field";
    return error;
    }

    //TODO: check for valid email and strong password

    return error;
}
export {
    validate
}