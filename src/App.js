import React, { useEffect, useState } from 'react';
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
import AddPostPage from './components/AddPostPage';
import EditProfile from './components/EditProfile';


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

let profiles = [
  {
    Profile_ID: "1",
    Account_ID: "1",
    Profile_Picture_URL: "../images/DefaultProfilePicture.png",
    Degree: "None",
    Biography: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    Resume: "wwww.resume.com/test",
    Linkedin: "wwww.linkedin.com/test",
    GitHub: "www.github.com/test",
  }
];

let blankAcc = {
  Account_ID: "",
  Email: "",
  Password: "",
  First_Name: "",
  Last_Name: "",
};

let blankProfile = {
  Profile_ID: "",
  Account_ID: "",
  Profile_Picture_URL: "../images/DefaultProfilePicture.png",
  Degree: "",
  Biography: "",
}

const App = () => {
  let navigate = useNavigate();
  const [authenticate, setAuthenticate] = useState(false);
  const [accountList, setAccountList] = useState(accounts);
  const [profileList, setProfileList] = useState(profiles);
  // const [currentUser, setCurrentUser] = useState(blankAcc);
  const [currentUser, setCurrentUser] = useState(accountList[1]); //just for testing
  const [currentProfile, setCurrentProfile] = useState(profileList[0]);
  const [inLoginFunc, setInLoginFunc] = useState(false);
  const [inSignUpFunc, setInSignUpFunc] = useState(false);

  const logInHandler = (email, password) => {
    console.log("In loginHandler");
    Axios.get("http://localhost:3000/api/account", {}).then(
      (response) => {
        setAccountList([...accountList, ...response.data]);
        setInLoginFunc(!inLoginFunc);

        accountList.forEach((account) => {
          if (email === account.Email && password === account.Password) {
            setAuthenticate(true);
            setCurrentUser(account);
            setCurrentProfile(profileList.find((obj) => {
              if (obj.Account_ID === currentUser.Account_ID) {
                return obj;
              }
            }));
            setInLoginFunc(!inLoginFunc);
            console.log(account);
            navigate("/profile");
          }
        });
      }
    );
  };

  useEffect(() => { //jank way to ensure accountList updated before verifying inputed details
    console.log(accountList);
    console.log(currentProfile);
    console.log(authenticate);
  }, [inLoginFunc]);

  const signUpHandler = (newAccount) => {
    console.log("In signUpHandler");
    Axios.post(`http://localhost:3000/api/account/${newAccount.Account_ID}/${newAccount.Email}/${newAccount.Password}/${newAccount.First_Name}/${newAccount.Last_Name}`, {}).then((response) => {
      setAuthenticate(true);
      setCurrentUser(newAccount);
      setAccountList((prevState) => {
        return [...prevState, newAccount];
      });
      setInSignUpFunc(!inSignUpFunc);
      navigate("/profile");
    });
  };

  useEffect(() => { //jank way to ensure accountList updated before using inputed details
    console.log(accountList);
    console.log(currentProfile);
    console.log(authenticate);
  }, [inSignUpFunc]);

  const editProfileHander = (editedAccount, editedProfile) => {
    let tempAccList = accountList;
    let accIndex = tempAccList.find(acc =>
      acc.Account_ID === editedAccount.Account_ID
    );
    tempAccList[accIndex] = editedAccount;
    console.log(tempAccList[accIndex]);
    setAccountList(tempAccList);
    setCurrentUser(editedAccount);

    let tempProfileList = profileList;
    let profileIndex = tempProfileList.find(acc =>
      acc.Account_ID === editedProfile.Account_ID
    );
    tempProfileList[profileIndex] = editedProfile;
    console.log(tempProfileList[profileIndex]);
    setProfileList(tempProfileList);
    setCurrentProfile(editedProfile);
  };


  return (
    <React.Fragment>
      <div className='App'>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage logIn={logInHandler} />} />
          <Route path="/signup" element={<SignUpPage signUp={signUpHandler} allAccounts={accountList} />} />
          <Route path="/profile" element={<ProfilePage user={currentUser} profile={currentProfile} auth={authenticate} allProfiles={profileList} />} />
          <Route path="/edit-profile" element={<EditProfile user={currentUser} profile={currentProfile} editProfile={editProfileHander} allAccounts={accountList} allProfiles={profileList} />} />
          <Route path="/search" element={<SearchPage />} />
          {/* <Route path="/addpost"element={<AddPostPage addPost={addPostHandler} />}/> */}
          <Route path="/addpost" element={<AddPostPage user={currentUser} />} />
        </Routes>
      </div>
    </React.Fragment>
  );
}

export default App;
