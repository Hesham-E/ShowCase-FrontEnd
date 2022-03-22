import React, { useState } from "react";
import "./LoginPage.css";
import "./GeneralStyles.css";

const LoginPage = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };


  const signUp = () => {
    console.log("CLICKED!!");
  };

  const goBack = () => {
    setEnteredEmail("");
    setEnteredPassword("");
  };

  return (
    <div className="LoginPage">
      <label className="HeaderText">Login Page</label>

      <div className="QuestionBar">
        <label className="BodyText">Email</label>
        <input type="text" />
      </div>

      <div className="QuestionBar">
        <label className="BodyText">Password</label>
        <input type="text" />
      </div>

      <button className="ButtonBorder" onClick={signUp}>
      <label className="BodyText">Login</label>
      </button>
      
      <button className="ButtonBorder" onClick={goBack} >
          <label className="BodyText">Cancel</label>
      </button>

    </div>
  );
};

export default LoginPage;