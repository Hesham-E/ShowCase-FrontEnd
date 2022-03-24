import React, { useState } from 'react';
import { Route, Routes } from "react-router";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import './App.css';
import ProfilePage from './components/ProfilePage';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import HomePage from './components/HomePage';
import SearchPage from './components/SearchPage';
import NavBar from './components/NavBar';


let accounts = [
  {
    Account_ID: "0",
    Email: "dagvadorj.altankhuya@ucalgary.ca",
    Password: "Password",
    First_Name: "Tom",
    Last_Name: "Altankhuyag",
  },
  {
    Account_ID: "1",
    Email: "Email",
    Password: "Password",
    First_Name: "Test",
    Last_Name: "Acc",
  }
];

let blankAcc = {
  Account_ID: "",
  Email: "",
  Password: "",
  First_Name: "",
  Last_Name: "",
}

const App = () => {
  let navigate = useNavigate();
  const [authenticate, setAuthenticate] = useState(false);
  const [accountList, setAccountList] = useState(accounts);
  // const [currentUser, setCurrentUser] = useState(blankAcc);
  const [currentUser, setCurrentUser] = useState(accountList[0]); //just for testing

  const logInHandler = (email, password) => {
    // Axios.get(allusersAPIcommand, {}).then(
    //   (response) => {
    //     setAccountList([...accountList, ...response.data]);
    //   }
    // );

    accountList.forEach((account) => {
      if (email === account.Email && password === account.Password) {
        setAuthenticate(true);
        setCurrentUser(account);
        navigate("/profile");
      }
    });
  };

  const signUpHandler = (newAccount) => {
    setAccountList((prevState) => {
      return [newAccount, ...prevState];
    });

    setAuthenticate(true);
    setCurrentUser(newAccount);
    navigate("/profile");
  }

  return (
    <React.Fragment>
      <div className='App'>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage logIn={logInHandler} />} />
          <Route path="/signup" element={<SignUpPage signUp={signUpHandler} allAccounts={accountList}/>} />
          <Route path="/profile" element={<ProfilePage user={currentUser} />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </div>
    </React.Fragment>

  );
}

export default App;
