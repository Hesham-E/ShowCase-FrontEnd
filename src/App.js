import React, { useState } from 'react';
import { Route, Routes } from "react-router";
import Axios from "axios";
import ProfilePage from './components/ProfilePage';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import HomePage from './components/HomePage';
import SideBar from './components/SideBar';

import SearchPage from './components/SearchPage';
import './App.css';


const App = () => {
  return (
    <React.Fragment>
      <div className='App'>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/profile" element={<ProfilePage />} />

          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </div>
    </React.Fragment>

  );
}

export default App;
