import React from 'react';
import { Route, Routes } from "react-router";
import Axios from "axios";
import ProfilePage from './components/ProfilePage';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import HomePage from './components/HomePage';
import SideBar from './components/SideBar';
import './App.css';


const App = () => {
  return (
    <React.Fragment>
      <div className='App'>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </React.Fragment>

  );
}

export default App;
