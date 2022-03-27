import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUpPage.css";
import "./GeneralStyles.css";

const SignUpPage = (props) => {
  const [enteredFirstName, setEnteredFirstName] = useState("");
  const [enteredLastName, setEnteredLastName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  let navigate = useNavigate();

  const firstnameChangeHandler = (event) => {
    setEnteredFirstName(event.target.value);
  };

  const lastnameChangeHandler = (event) => {
    setEnteredLastName(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };


  const signUp = () => {
    let newAcc = {
      Account_ID: "",
      Email: enteredEmail,
      Password: enteredPassword,
      First_Name: enteredFirstName,
      Last_Name: enteredLastName,
    }

    let unique = props.allAccounts.every((account) => {
      return account.Email !== newAcc.Email;
    });

    if (unique)
    {
      console.log(props.allAccounts);
      newAcc.Account_ID = parseInt(props.allAccounts[props.allAccounts.length - 1].Account_ID) + 1;
      console.log(newAcc.Account_ID);
      props.signUp(newAcc);
    }
    else
    {
      clearPage();
    }
  };

  const goBack = () => {
    clearPage();
    navigate("/");
  };

  const clearPage = () => {
    setEnteredFirstName("");
    setEnteredLastName("");
    setEnteredEmail("");
    setEnteredPassword("");
  };

  return (
    <div className="SignUpPage">
      <label className="HeaderText">Sign Up Page</label>

      <div className="QuestionBar">
        <label className="BodyText">First Name</label>
        <input type="text" value={enteredFirstName} onChange={firstnameChangeHandler} />
      </div>

      <div className="QuestionBar">
        <label className="BodyText">Last Name</label>
        <input type="text" value={enteredLastName} onChange={lastnameChangeHandler} />
      </div>

      <div className="QuestionBar">
        <label className="BodyText">Email</label>
        <input type="text" value={enteredEmail} onChange={emailChangeHandler} />
      </div>

      <div className="QuestionBar">
        <label className="BodyText">Password</label>
        <input type="text" value={enteredPassword} onChange={passwordChangeHandler} />
      </div>

      <button className="ButtonBorder" onClick={signUp}>
        <label className="BodyText">Sign Up</label>
      </button>

      <button className="ButtonBorder" onClick={goBack} >
        <label className="BodyText">Cancel</label>
      </button>

    </div>
  );
};

export default SignUpPage;