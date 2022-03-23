import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";
import "./GeneralStyles.css";

const LoginPage = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  let navigate = useNavigate();

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const logIn = () => {
    props.logIn(enteredEmail, enteredPassword);
  };

  const goBack = () => {
    clearPage();
    navigate("/");
  };

  const clearPage = () => {
    setEnteredEmail("");
    setEnteredPassword("");
  };

  return (
    <div className="LoginPage">
      <label className="HeaderText">Login Page</label>

      <div className="QuestionBar">
        <label className="BodyText">Email</label>
        <input type="text" value={enteredEmail} onChange={emailChangeHandler} />
      </div>

      <div className="QuestionBar">
        <label className="BodyText">Password</label>
        <input type="password" value={enteredPassword} onChange={passwordChangeHandler} />
      </div>

      <button className="ButtonBorder" onClick={logIn}>
        <label className="BodyText">Login</label>
      </button>

      <button className="ButtonBorder" onClick={goBack}>
        <label className="BodyText">Cancel</label>
      </button>
    </div>
  );
};

export default LoginPage;