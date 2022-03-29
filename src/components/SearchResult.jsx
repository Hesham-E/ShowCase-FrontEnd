import React from 'react'
import "./SearchResult.css";
import "./GeneralStyles.css";

import JSONDATA from '../MOCK_DATA.json'
import {useState} from 'react'

function SearchResult() {
    const [searchTerm, setSearchTerm] = useState('');
    return (
        <div>

        <form action="/search">
            <input type="text" placeholder="Search..." onChange={(event) => {setSearchTerm(event.target.value)}}/>
        </form>
        <div class='container2'>
            {JSONDATA.filter((val) => {
                if (searchTerm === "")
                    return;
                else if (val.First_Name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                        val.Last_Name.toLowerCase().includes(searchTerm.toLowerCase()))
                    return val;
            }).map((val, key)=> {
                return (
                    <div>
                        <div>
                            <img className='iconDetails' src={val.Profile_Picture_URL} alt="" />
                        </div>
                        <div class="profile">
                            <h2 className="Name">
                                <a href="/profile" class="profilelink">{val.First_Name} {val.Last_Name}</a>
                                <a href={val.GitHub}><button class="profileButtons">
                                    <label>GitHub</label>
                                </button></a>
                                <a href={val.LinkedIn}><button class="profileButtons">
                                    <label>LinkedIn</label>
                                </button></a>
                            </h2>
                            <div class="description">{val.Biography}</div>
                        </div>
                        <hr className="HeaderLine" />
                    </div>
                )
            })}
        </div>
        </div>
    );
}

export default SearchResult;