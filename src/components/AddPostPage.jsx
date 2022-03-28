import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import "./AddPostPage.css";
import "./GeneralStyles.css";

const AddPostPage = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredCaption, setEnteredCaption] = useState("");
  const [enteredImage, setEnteredImage] = useState({
    file:[],
    filepreview: null,
   });
  const [isSucces, setSuccess] = useState(null);

  let navigate = useNavigate();

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const captionChangeHandler = (event) => {
    setEnteredCaption(event.target.value);
  };

   const imageChangeHandler = (event) => {
    setEnteredImage({
      ...enteredImage,
      file:event.target.files[0],
      filepreview:URL.createObjectURL(event.target.files[0]),
    });

  // const addPost = () => {
  //   let newPost = {
  //     Account_ID: "",
  //     Title: enteredTitle,
  //     Caption: enteredCaption,
  //     Image: enteredImage,
  //   };
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
    navigate("/profile");
  };

  const clearPage = () => {
    setEnteredTitle("");
    setEnteredCaption("");
    setEnteredImage("");
  };

  //Sending information to backend
  const addPost = async () =>{
    const formdata = new FormData(); 
    //Finish guessing that this will work
    formdata.append('avatar', enteredImage.file);
    formdata.append('Title', enteredTitle);
    formdata.append('Caption', enteredCaption);
    formdata.append('Profile_ID', '1');
    formdata.append('Account_ID', '1');

    axios.post("http://localhost:3000/post_photos/:post_id/:profileID/:accountID/:photo_url", formdata,{   
            headers: { "Content-Type": "multipart/form-data" } 
    })
    .then(res => { // then print response status
      console.warn(res);
      if(res.data.success === 1){
        setSuccess("Image upload successfully");
      }

    })
  }

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
      {isSucces !== null ? <h4> {isSucces} </h4> :null }
        <label className="BodyText">Image:</label>
        <input type="file" onChange={imageChangeHandler} />
        
      </div>
      <div className="QuestionBar">
      {enteredImage.filepreview != null ? 
        <img className="previewimg"  src={enteredImage.filepreview} alt="UploadImage" />
      : null}
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
