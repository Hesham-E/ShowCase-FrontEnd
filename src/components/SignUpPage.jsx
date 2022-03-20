import React, { useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import "./SignUpPage.css";

const SignUpPage = (props) => {
  const [enteredFirstName, setEnteredFirstName] = useState("");
  const [enteredLastName, setEnteredLastName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredDisplayName, setEnteredDisplayName] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  const firstnameChangeHandler = (event) => {
    setEnteredFirstName(event.target.value);
  };

  const lastnameChangeHandler = (event) => {
    setEnteredLastName(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const usernameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };

  const displaynameChangeHandler = (event) => {
    setEnteredDisplayName(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const submitUserInformation = () => {
    Axios.post("http://localhost:3001/api/users", {
      displayName: enteredDisplayName,
      firstName: enteredFirstName,
      lastName: enteredLastName,
      userName: enteredUserName,
      email: enteredEmail,
      password: enteredPassword,
    }).then(() => {});
  };

  const signUp = () => {
    const user = {
      First_Name: enteredFirstName,
      Last_Name: enteredLastName,
      Email: enteredEmail,
      Username: enteredUserName,
      Display_Name: enteredDisplayName,
      Password: enteredPassword,
      Type: "user",
    };
    submitUserInformation();
    props.newUser(user);
  };

  const resetPage = () => {
    setEnteredFirstName("");
    setEnteredLastName("");
    setEnteredEmail("");
    setEnteredUserName("");
    setEnteredDisplayName("");
    setEnteredPassword("");
  };

  return (
    <div className="user-sign-up">
      <div className="background-rectangle" />
      <p className="page-title">User Sign Up</p>
      <div className="question-bar">
        <label>First Name</label>
        <input
          type="text"
          value={enteredFirstName}
          onChange={firstnameChangeHandler}
        />
      </div>
      <div className="question-bar">
        <label>Last Name</label>
        <input
          type="text"
          value={enteredLastName}
          onChange={lastnameChangeHandler}
        />
      </div>
      <div className="question-bar">
        <label>Email</label>
        <input type="text" value={enteredEmail} onChange={emailChangeHandler} />
      </div>
      <div className="question-bar">
        <label>User Name</label>
        <input
          type="text"
          value={enteredUserName}
          onChange={usernameChangeHandler}
        />
      </div>
      <div className="question-bar">
        <label>Display Name</label>
        <input
          type="text"
          value={enteredDisplayName}
          onChange={displaynameChangeHandler}
        />
      </div>
      <div className="question-bar">
        <label>Password</label>
        <input
          type="text"
          value={enteredPassword}
          onChange={passwordChangeHandler}
        />
      </div>

      <button className="button-border" onClick={signUp}>
        <Link to="/account" className="button-text" onClick={resetPage}>
          Sign Up
        </Link>
      </button>
    </div>
  );
};

export default SignUpPage;