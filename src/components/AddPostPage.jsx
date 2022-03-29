import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import "./AddPostPage.css";
import "./GeneralStyles.css";

const AddPostPage = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredCaption, setEnteredCaption] = useState("");
  const [enteredImageURL, setEnteredImageURL] = useState("");
  const [retrievedPostID, setPostID] = useState("");

  const [isSucces, setSuccess] = useState(null);

  let navigate = useNavigate();

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const captionChangeHandler = (event) => {
    setEnteredCaption(event.target.value);
  };

  const imageChangeHandler = (event) => {
    setEnteredImageURL(event.target.value);
  }
    
  const save = async () =>{
    //Don't need Post_ID because it will auto increment in database
    let editedPost = {
      Profile_ID: props.profile.Profile_ID,
      Account_ID: props.user.Account_ID,
      Title: enteredTitle,
      Caption: enteredCaption,
    }

    let editedPostPhotos = {
      Post_ID: retrievedPostID,
      Profile_ID: props.profile.Profile_ID,
      Account_ID: props.user.Account_ID,
      Post_Picture_URL: enteredImageURL,
    }  

    props.addPost(editedPost, editedPostPhotos);
  }

  const goBack = () => {
    clearPage();
    navigate("/profile");
  };

  const clearPage = () => {
    setEnteredTitle("");
    setEnteredCaption("");
    setEnteredImageURL("");
  };

  return (
    <div className="AddPostPage">
      <label className="HeaderText">Add Post:</label>

      <div className="QuestionBar">
        <label className="BodyText">Title:</label>
        <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
      </div>

      <div className="QuestionBar">
        <label className="BodyText">Caption:</label>
        <textarea rows={5} value={enteredCaption} onChange={captionChangeHandler}></textarea>
      </div>

      <div className="QuestionBar">
        <label className="BodyText">Image:</label>
        <input type="text" onChange={imageChangeHandler} />
        
      </div>
      <div className="QuestionBar">
      {enteredImageURL!= null ? 
        <img className="previewimg"  src={enteredImageURL} alt="UploadImage" />
      : null}
      </div>

      <button className="ButtonBorder" onClick={save}>
        <label className="BodyText">Add Post</label>
      </button>

      <button className="ButtonBorder" onClick={goBack}>
        <label className="BodyText">Cancel</label>
      </button>
    </div>
  );
};

export default AddPostPage;
