import React from 'react';
import "./ProfilePage.css";
import "./GeneralStyles.css";
import PostCard from './PostCard';

const ProfilePage = (props) => {

    let profilePic = require("../images/DefaultProfilePicture.png");
    let addPostIcon = require("../images/addIcon.png");
    let editPostIcon = require("../images/pencilIcon.png");
    let userName = props.user.First_Name.concat(" ", props.user.Last_Name);
    let userBio = props.profile.Biography;

    return (
        <div className="ProfilePage">
            {props.auth ? <div className="Icon">
                <a href="/addpost">
                    <img className="Icon" src={addPostIcon} alt="" />
                </a>
                < a href="/edit-profile">
                    <img className="Icon" src={editPostIcon} alt="" />
                </a>
            </div>
            :
            {}}
            
            <img className="ProfilePic" src={profilePic} alt="" />
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