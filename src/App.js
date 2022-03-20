import React from 'react';
import { Route, Routes } from "react-router";
import Axios from "axios";
import ProfilePage from './components/ProfilePage';
import SignUpPage from './components/SignUpPage';
import './App.css';


const App = () => {
  return (
    <React.Fragment>
      <div className='App'>
        <SignUpPage />
      </div>
    </React.Fragment>

  );
}

export default App;
