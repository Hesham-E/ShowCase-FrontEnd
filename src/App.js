import React from 'react';
import { Route, Routes } from "react-router";
import Axios from "axios";
import ProfilePage from './components/ProfilePage';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import SideBar from './components/SideBar';
import './App.css';


const App = () => {
  return (
    <React.Fragment>
      <div className='App'>
        <SideBar />
      </div>
    </React.Fragment>

  );
}

export default App;
