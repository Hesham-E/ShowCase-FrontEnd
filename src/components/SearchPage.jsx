import React from 'react';
import "./SearchPage.css";
import "./GeneralStyles.css";

function SearchPage() {
    const profilePic = require("../images/DefaultProfilePicture.png");
    let searchResultName = "Jake XYZ"
    let personsIntroduction = "This is my introduction. My name is Jake XYZ and I like to make web applications in React because it's fun and I like food. My name is Jake XYZ and I like to make web applications in React because it's fun and I like food. My name is Jake XYZ and I like to make web applications in React because it's fun and I like food. My name is Jake XYZ and I like to make web applications in React because it's fun and I like food. My name is Jake XYZ and I like to make web applications in React because it's fun and I like food. "


    return (
        <div className="HomePage">
            <div class="topnavsearch">
                <a class="active" href="/">Home</a>
                <a href="/login">Sign-in</a>
                <a href="/signup">Sign-up</a>
                <div class="search-container">
                    <form action="/searchresults">
                        <input type="text" placeholder="Search.." name="search"/>
                        <button type="submit">Search</button>
                    </form>
                </div>
            </div>

            <div className='TitleDiv'>
                <h1 className="WebTitle">SH&#128188;W CASE</h1>
            </div>
            <hr className="HeaderLine" />

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
            </div>
            <hr className="HeaderLine" />

            <div class='container2'>
                <div>
                    <img className='iconDetails' src={profilePic} alt="" />
                </div>
                <div class="profile">
                    <h2 className="Name">
                        {searchResultName}
                        <button class="profileButtons" onClick="http://localhost:3000/" >
                            <label>Website</label>
                        </button>
                        <button class="profileButtons" onClick="http://localhost:3000/" >
                            <label>LinkedIn</label>
                        </button>
                    </h2>
                    <div class="description">{personsIntroduction}</div>
                </div>
            </div>
            <hr className="HeaderLine" />

        </div>
    )

}

export default SearchPage;