import React from 'react'
import "./PostCard.css";
import "./GeneralStyles.css";

function PostCard(props) {
    console.log(props);
    return (
        <div className='PostCard'>
            <div className='PostContent'>
                <img className='PostPic' src={props.pic} alt=""/>
                <div className='PostText'>
                    <span className='HeaderText'>{props.title}</span>
                    <span className='BodyText'>{props.caption}</span>
                </div>
            </div>

            <hr className='HeaderLine' />
        </div>
    );
}

export default PostCard;