import React, { useState } from "react";
import "./HomePage.css";
import "./GeneralStyles.css";

const HomePage = (props) => {
    const greetingPic = require("../images/businessCrowd.png");
    let siteGreeting = "Hello and welcome to Show Case! A website where you can host your own portfolio and view the portfolio of others. To use our website, you must first make an account. However, you are always welcome to search for other users without making one.";
    let siteIntroduction = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?";
    
    return (
        <div className="HomePage">
            <div className='TitleDiv'>
            <span className="WebTitle">SHOW CASE</span>
            </div>
            <span className="IntroText">{siteGreeting}</span>
            <hr className="HeaderLine" />
            <img className='GreetingPic' src={greetingPic} alt="" />
            <span className="IntroText">{siteIntroduction}</span>
        </div>
    );
};

export default HomePage;