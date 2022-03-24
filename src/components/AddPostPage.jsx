import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddPostPage.css";
import "./GeneralStyles.css";

const AddPostPage = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredCaption, setEnteredCaption] = useState("");
  const [enteredImage, setEnteredImage] = useState("");
  let navigate = useNavigate();

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const captionChangeHandler = (event) => {
    setEnteredCaption(event.target.value);
  };

  const imageChangeHandler = (event) => {
    setEnteredImage(event.target.value);
  };

  const addPost = () => {
    let newPost = {
      Account_ID: "",
      Title: enteredTitle,
      Caption: enteredCaption,
      Image: enteredImage,
    };
    // let unique = props.allAccounts.every((account) => {
    //   return account.Email !== newPost.Email;
    // });

    // if (unique) {
    //   newPost.Account_ID = props.allAccounts.slice(-1).Account_ID + 1;
    //   props.signUp(newPost);
    // } else {
    //   clearPage();
    // }
  };

  const goBack = () => {
    clearPage();
    navigate("/");
  };

  const clearPage = () => {
    setEnteredTitle("");
    setEnteredCaption("");
    setEnteredImage("");
  };

  return (
    <div className="AddPostPage">
      <label className="HeaderText">Add Post</label>

      <div className="QuestionBar">
        <label className="BodyText">Title</label>
        <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
      </div>

      <div className="QuestionBar">
        <label className="BodyText">Caption</label>
        <textarea
          rows={5}
          value={enteredCaption}
          onChange={captionChangeHandler}
        ></textarea>
      </div>

      <div className="QuestionBar">
        <label className="BodyText">Image</label>
        <input type="file" value={enteredImage} onChange={imageChangeHandler} />
      </div>

      <button className="ButtonBorder" onClick={addPost}>
        <label className="BodyText">Add Post</label>
      </button>

      <button className="ButtonBorder" onClick={goBack}>
        <label className="BodyText">Cancel</label>
      </button>
    </div>
  );
};

export default AddPostPage;
