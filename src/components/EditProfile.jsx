import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "./GeneralStyles.css";
import "./EditProfile.css";
import PostCard from './PostCard';

const EditProfile = (props) => {
    const [enteredProfilePic, setEnteredProfilePic] = useState(props.profile.Profile_Picture_URL);
    const [enteredFirstName, setEnteredFirstName] = useState(props.user.First_Name);
    const [enteredLastName, setEnteredLastName] = useState(props.user.Last_Name);
    const [enteredEmail, setEnteredEmail] = useState(props.user.Email);
    const [enteredPassword, setEnteredPassword] = useState(props.user.Password);
    const [enteredDegree, setEnteredDegree] = useState(props.profile.Degree);
    const [enteredBio, setEnteredBio] = useState(props.profile.Biography);
    const [enteredResumeLink, setEnteredResumeLink] = useState(props.profile.Resume);
    const [enteredLinkedinLink, setEnteredLinkedinLink] = useState(props.profile.LinkedIn);
    const [enteredGitHubLink, setEnteredGitHubLink] = useState(props.profile.GitHub);
    
    let navigate = useNavigate();
    
    const profilePicChangeHandler = (event) => {
        setEnteredProfilePic(event.target.value);
    };
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
    const degreeChangeHandler = (event) => {
        setEnteredDegree(event.target.value);
    };
    const bioChangeHandler = (event) => {
        setEnteredBio(event.target.value);
    };
    const resumeLinkChangeHandler = (event) => {
        setEnteredResumeLink(event.target.value);
    };
    const linkedinLinkChangeHandler = (event) => {
        setEnteredLinkedinLink(event.target.value);
    };
    const gitHubLinkChangeHandler = (event) => {
        setEnteredGitHubLink(event.target.value);
    };

    const save = () => {
        let editedAcc = {
            Account_ID: props.user.Account_ID,
            Email: enteredEmail,
            Password: enteredPassword,
            First_Name: enteredFirstName,
            Last_Name: enteredLastName,
        }

        let editedProfile = {
            Profile_ID: props.profile.Profile_ID,
            Account_ID: props.user.Account_ID,
            Profile_Picture_URL: enteredProfilePic,
            Degree: enteredDegree,
            Biography: enteredBio,
            Resume: enteredResumeLink,
            LinkedIn: enteredLinkedinLink,
            GitHub: enteredGitHubLink,    
        }

        let unique = props.allAccounts.every((account) => {
            if (account.Account_ID !== editedAcc.Account_ID) {
                return account.Email !== editedAcc.Email;
            }
            else {
                return true;
            }
        });

        if (unique) {
            props.editProfile(editedAcc, editedProfile);
            navigate("/profile");
        }
        else {
            resetPage();
        }
    }

    const cancel = () => {
        navigate("/profile");
    }

    const resetPage = () => {
        setEnteredProfilePic(props.profile.Profile_Picture_URL);
        setEnteredFirstName(props.user.First_Name);
        setEnteredLastName(props.user.Last_Name);
        setEnteredEmail(props.user.Email);
        setEnteredPassword(props.user.Password);
        setEnteredDegree(props.profile.Degree);
        setEnteredBio(props.profile.Biography);
        setEnteredResumeLink(props.profile.Resume);
        setEnteredLinkedinLink(props.profile.Linkedin);
        setEnteredGitHubLink(props.profile.GitHub);
    };

    return (
        <div className='EditProfile'>
            <label className="HeaderText">Edit Your Profile!</label>
            <img className="ProfilePic" src={props.profile.Profile_Picture_URL} alt="" />
            <div className="QuestionBar">
                <label className="BodyText">Profile Picture:</label>
                <input value={enteredProfilePic} onChange={profilePicChangeHandler} />
            </div>            
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
            <div className='QuestionBar'>
                <label className="BodyText">Degree: </label>
                <input value={enteredDegree} onChange={degreeChangeHandler} />
            </div>
            <div className='QuestionBar'>
                <label className="BodyText">Bio: </label>
                <textarea rows={5} value={enteredBio} onChange={bioChangeHandler}></textarea>
            </div>
            <div className='QuestionBar'>
                <label className="BodyText">Resume Link: </label>
                <input value={enteredResumeLink} onChange={resumeLinkChangeHandler} />
            </div>
            <div className='QuestionBar'>
                <label className="BodyText">Linkedin: </label>
                <input value={enteredLinkedinLink} onChange={linkedinLinkChangeHandler} />
            </div>
            <div className='QuestionBar'>
                <label className="BodyText">GitHub: </label>
                <input value={enteredGitHubLink} onChange={gitHubLinkChangeHandler} />
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