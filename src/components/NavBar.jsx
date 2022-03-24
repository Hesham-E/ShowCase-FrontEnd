import React, { useState } from "react";
import "./NavBar.css";
import "./GeneralStyles.css";

const NavBar = (props) => { 
    return (
        <div class="topnav">
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
    );
};

export default NavBar;