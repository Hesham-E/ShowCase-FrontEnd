import React from 'react';
import "./SearchPage.css";
import "./GeneralStyles.css";
import SearchResult from './SearchResult';

function SearchPage() {
    
    return (
        <div className="HomePage">

            <div className='TitleDiv'>
                <h1 className="WebTitle"><big>SH&#128188;W CASE</big></h1>
            </div>
            <hr className="HeaderLine" />

            <SearchResult />
            <SearchResult />

        </div>
    )

}

export default SearchPage;