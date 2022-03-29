import React from 'react';
import { useNavigate } from "react-router-dom";
import "./ProfilePage.css";
import "./GeneralStyles.css";
import PostCard from './PostCard';

const ProfilePage = (props) => {

    let addPostIcon = require("../images/addIcon.png");
    let editPostIcon = require("../images/pencilIcon.png");
    let userName = props.user.First_Name.concat(" ", props.user.Last_Name);
    let userBio = props.profile.Biography;
    let navigate = useNavigate();
    let postCards = [];

    const openLink = (link) => {
        console.log(link);
        window.open(link);
    };

    const createPostCards = () => {
        console.log(props.posts);
        console.log(props.photos);
        if (props.posts.length > 0) {
            for (let i = 0; i < props.posts.length; i++) {
                let photo = props.photos.find((obj) => obj.Post_ID === props.posts[i].Post_ID);
                console.log(photo);
                
                if (photo  != null && photo  !== undefined) {
                    postCards.push(<PostCard title={props.posts[i].Title} caption={props.posts[i].Caption} pic={photo.Photo_URL}/>)
                }
                else {
                    postCards.push(<PostCard title={props.posts[i].Title} caption={props.posts[i].Caption} pic={undefined}/>)
                }
                
            }
        }
        
        return postCards;
    };

    return (
        <div className="ProfilePage">
            {props.auth ? <div className="Icon">
                <a onClick={() => {navigate("/addpost")}}>
                    <img className="Icon" src={addPostIcon} alt="" />
                </a>
                <a onClick={() => {navigate("/edit-profile")}}>
                    <img className="Icon" src={editPostIcon} alt="" />
                </a>
            </div>
            :
            {}}
            
            <img className="ProfilePic" src={props.profile.Profile_Picture_URL} alt="" />
            <hr className='HeaderLine' />
            <span className='HeaderText'>{userName}</span>
            <span className='BodyText'>{userBio}</span>
            <hr className='HeaderLine' />
            <div className='SocialsButtons'>
                <button className='SocialButton' onClick={() => openLink(props.profile.Resume)}>Resume</button>
                <button className='SocialButton' onClick={() => openLink(props.profile.LinkedIn)}>LinkedIn</button>
                <button className='SocialButton' onClick={() => openLink(`mailto:${props.user.Email}`)}>Email</button>
                <button className='SocialButton' onClick={() => openLink(props.profile.GitHub)}>GitHub</button>
            </div>
            <hr className='HeaderLine' />
            {createPostCards()}
        </div>
    );
}

export default ProfilePage;