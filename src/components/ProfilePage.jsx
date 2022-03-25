import React from 'react';
import "./ProfilePage.css";
import "./GeneralStyles.css";
import PostCard from './PostCard';
import { useNavigate } from 'react-router';

const ProfilePage = (props) => {


    let profilePic = require("../images/DefaultProfilePicture.png");
    let addPostIcon = require("../images/addIcon.png");
    let editPostIcon = require("../images/pencilIcon.png");
    let userName = props.user.First_Name.concat(" ", props.user.Last_Name);
    let userBio = props.profile.Biography;
    let navigate = useNavigate();

    const editProfile = () => {
        navigate("/edit-profile")
    }

    return (
        <div className="ProfilePage">
            <div className="Icon">
                <a href="/addpost">
                    <img className="Icon" src={addPostIcon} alt="" />
                </a>
                <img className="Icon" src={editPostIcon} alt="" />
            </div>
            <img className="ProfilePic" src={profilePic} alt="" />
            {props.auth ? <button className='EditButton' onClick={editProfile}>Edit Profile</button> : {}}
            <hr className='HeaderLine' />
            <span className='HeaderText'>{userName}</span>
            <span className='BodyText'>{userBio}</span>
            <hr className='HeaderLine' />
            <div className='SocialsButtons'>
                <button className='SocialButton'>Resume</button>
                <button className='SocialButton'>LinkedIn</button>
                <button className='SocialButton'>Email</button>
                <button className='SocialButton'>GitHub</button>
            </div>
            <hr className='HeaderLine' />
            <PostCard />
            <PostCard />
        </div>
    );
}

export default ProfilePage;