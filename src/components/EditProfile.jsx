import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "./GeneralStyles.css";
import "./EditProfile.css";

const EditProfile = (props) => {
    const [enteredFirstName, setEnteredFirstName] = useState(props.user.First_Name);
    const [enteredLastName, setEnteredLastName] = useState(props.user.Last_Name);
    const [enteredEmail, setEnteredEmail] = useState(props.user.Email);
    const [enteredPassword, setEnteredPassword] = useState(props.user.Password);
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

    const save = () => {
        let editedAcc = {
            Account_ID: props.user.Account_ID,
            Email: enteredEmail,
            Password: enteredPassword,
            First_Name: enteredFirstName,
            Last_Name: enteredLastName,
          }

          let unique = props.allAccounts.every((account) => {
              if (account.Account_ID !== editedAcc.Account_ID) {
                return account.Email !== editedAcc.Email;
              }
              else {
                  return true;
              }
          });
      
          if (unique)
          {
            props.editProfile(props.Account_ID, editedAcc);
            navigate("/profile");
          }
          else
          {
            resetPage();
          }
    }

    const cancel = () => {
        navigate("/profile");
    }

    const resetPage = () => {
        setEnteredFirstName(props.user.First_Name);
        setEnteredLastName(props.user.Last_Name);
        setEnteredEmail(props.user.Email);
        setEnteredPassword(props.user.Password);
    };


    return (
        <div className='EditProfile'>
            <label className="HeaderText">Edit Your Profile!</label>

            <div className='QuestionBar'>
                <label className="BodyText">First Name: </label>
                <input value={enteredFirstName} onChange={firstnameChangeHandler} />
            </div>
            <div className='QuestionBar'>
                <label className="BodyText">Last Name: </label>
                <input value={enteredLastName} onChange={lastnameChangeHandler} />
            </div>
            <div className='QuestionBar'>
                <label className="BodyText">Email: </label>
                <input value={enteredEmail} onChange={emailChangeHandler} />
            </div>
            <div className='QuestionBar'>
                <label className="BodyText">Password: </label>
                <input value={enteredPassword} onChange={passwordChangeHandler} />
            </div>
            
            <button className='ButtonBorder' onClick={save}>
                <label className="BodyText">Save Changes</label>
            </button>
            <button className='ButtonBorder' onClick={cancel}>
                <label className="BodyText">Cancel</label>
            </button>
        </div>
    );
};

export default EditProfile;