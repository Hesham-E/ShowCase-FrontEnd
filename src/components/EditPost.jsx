import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "./GeneralStyles.css";
import "./EditPost.css";

const EditPost = (props) => {
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredCaption, setEnteredCaption] = useState("");
    const [enteredImageURL, setEnteredImageURL] = useState("");
    const [enteredPostID, setPostID] = useState("");

    let navigate = useNavigate();
    let postCards = [];

    const createPostCards = () => {
        console.log(props.posts);
        console.log(props.photos);
        if (props.posts.length > 0) {
            for (let i = 0; i < props.posts.length; i++) {

                let photo = props.photos.find((obj) => obj.Post_ID === props.posts[i].Post_ID);
                console.log(photo);

                if (photo != null && photo !== undefined) {
                    postCards.push({ id: props.posts[i].Post_ID, title: props.posts[i].Title, caption: props.posts[i].Caption, pic: photo.Photo_URL });
                }
                else {
                    postCards.push({ id: props.posts[i].Post_ID, title: props.posts[i].Title, caption: props.posts[i].Caption, pic: ""});
                }

            }
        }

        return postCards;
    };


    const idChangeHandler = (event) => {
        setPostID(event.target.value);
    };

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };

    const captionChangeHandler = (event) => {
        setEnteredCaption(event.target.value);
    };

    const imageChangeHandler = (event) => {
        setEnteredImageURL(event.target.value);
    }

    const save = async () => {
        let editedPost = {
            Post_ID: enteredPostID,
            Profile_ID: props.profile.Profile_ID,
            Account_ID: props.profile.Account_ID,
            Title: enteredTitle,
            Caption: enteredCaption,
        }

        console.log(props.profile.Profile_ID + " = profile id in add post page")
        console.log(enteredImageURL + " = image url in add post page")

        let editedPostPhotos = {
            Post_ID: enteredPostID,
            Profile_ID: props.profile.Profile_ID,
            Account_ID: props.profile.Account_ID,
            Post_Picture_URL: enteredImageURL,
        }

        if (enteredTitle === "" && enteredCaption === "" && enteredCaption === "") {
            if (enteredPostID === "") {
                navigate("/profile");
            }
            else {
                props.deletePost(editedPost, editedPostPhotos);
            }
        }
        else {
            props.editPost(editedPost, editedPostPhotos);
        }
        
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
        <div className="EditPostPage">
            <label className="HeaderText">Editing Posts</label>
            <label className='BodyText'>Here are your posts and their corresponding Post ID.
                In order to edit a post, insert its post ID in the corresponding field below. Once you are finished,
                save your changes. Alternatively, you can cancel, or by leaving all fields blank except for the post ID,
                you can delete that specific post.</label>

            {createPostCards().map(card => (<div className='BodyText' key={card.id}>Post ID: {card.id} Post Title:{card.title} Post Caption:{card.caption} Post Image:{card.pic}</div>))}

            <div className="QuestionBar">
                <label className="BodyText">Post ID:</label>
                <input type="text" value={enteredPostID} onChange={idChangeHandler} />
            </div>

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
                {enteredImageURL != null ?
                    <img className="previewimg" src={enteredImageURL} alt="Preview of Image URL" />
                    : null}
            </div>

            <button className="ButtonBorder" onClick={save}>
                <label className="BodyText">Edit Post</label>
            </button>

            <button className="ButtonBorder" onClick={goBack}>
                <label className="BodyText">Cancel</label>
            </button>
        </div>
    );
};

export default EditPost;