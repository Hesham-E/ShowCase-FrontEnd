import React from 'react'
import "./SearchResult.css";
import "./GeneralStyles.css";

function SearchResult() {
    const profilePic = require("../images/DefaultProfilePicture.png");
    let searchResultName = "Jake XYZ"
    let personsIntroduction = "This is my introduction. My name is Jake XYZ and I like to make web applications in React because it's fun and I like food. My name is Jake XYZ and I like to make web applications in React because it's fun and I like food. My name is Jake XYZ and I like to make web applications in React because it's fun and I like food. My name is Jake XYZ and I like to make web applications in React because it's fun and I like food. My name is Jake XYZ and I like to make web applications in React because it's fun and I like food. "

    return (
        <div class='container2'>
            <div>
                <img className='iconDetails' src={profilePic} alt="" />
            </div>
            <div class="profile">
                <h2 className="Name">
                    {searchResultName}
                    <button class="profileButtons" onClick="http://localhost:3000/" >
                        <label>GitHub</label>
                    </button>
                    <button class="profileButtons" onClick="http://localhost:3000/" >
                        <label>LinkedIn</label>
                    </button>
                </h2>
                <div class="description">{personsIntroduction}</div>
            </div>
            <hr className="HeaderLine" />
        </div>
    );
}

export default SearchResult;