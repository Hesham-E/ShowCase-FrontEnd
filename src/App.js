import React, { useEffect, useRef, useState } from 'react';
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
    Account_ID: 0,
    Email: "dagvadorj.altankhuya@ucalgary.ca",
    Password: "Password",
    First_Name: "Tom",
    Last_Name: "Altankhuyag",
  },
  {
    Account_ID: 1,
    Email: "Email",
    Password: "Password",
    First_Name: "Test",
    Last_Name: "Acc",
  }
];

let profiles = [
  {
    Profile_ID: 1,
    Account_ID: 1,
    Profile_Picture_URL: "../images/DefaultProfilePicture.png",
    Degree: "None",
    Biography: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    Resume: "wwww.resume.com/test",
    Linkedin: "wwww.linkedin.com/test",
    GitHub: "www.github.com/test",
  }
  // {
  //   Profile_ID: 2,
  //   Account_ID: 2,
  //   Profile_Picture_URL: "../images/DefaultProfilePicture.png",
  //   Degree: "None",
  //   Biography: "Success",
  //   Resume: "wwww.resume.com/test",
  //   Linkedin: "wwww.linkedin.com/test",
  //   GitHub: "www.github.com/test",
  // }
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
  Resume: "",
  LinkedIn: "",
  GitHub: "",
}

const App = () => {
  let navigate = useNavigate();
  const accList = useRef(accounts);
  const authenticate = useRef(false);
  const profileList = useRef(profiles);
  // const [currentUser, setCurrentUser] = useState(blankAcc);
  const user = useRef(accList.current[1]);
  const profile = useRef(profileList.current[0]);
  const [inLoginFunc, setInLoginFunc] = useState(false);
  const [inSignUpFunc, setInSignUpFunc] = useState(false);

  const logInHandler = (email, password) => {
    console.log("In loginHandler");
    Axios.get("http://localhost:3000/api/account", {}).then(
      (response) => {
        accList.current = [...accounts, ...response.data];
        setInLoginFunc(!inLoginFunc);

        Axios.get("http://localhost:3000/api/profile", {}).then(
          (response) => {
            profileList.current = [...profiles, ...response.data];
            accList.current.forEach((account) => {
              if (email === account.Email && password === account.Password) {
                authenticate.current = true;
                user.current = account;
                profile.current = profileList.current.find((obj) => obj.Account_ID === user.current.Account_ID);
                setInLoginFunc(!inLoginFunc);
                console.log(user.current);
                console.log(profile.current);
                navigate("/profile");
              }
            });
          }
        );
      }
    );
  };



  const signUpHandler = (newAccount) => {
    console.log("In signUpHandler");
    Axios.get("http://localhost:3000/api/account", {}).then(
      (response) => {
        accList.current = [...accounts, ...response.data];
        console.log(accList.current);
        newAccount.Account_ID = accList.current[accList.current.length - 1].Account_ID + 1;
        console.log(newAccount.Account_ID);

        Axios.post(`http://localhost:3000/api/account/${newAccount.Account_ID}/${newAccount.Email}/${newAccount.Password}/${newAccount.First_Name}/${newAccount.Last_Name}`, {}).then((response) => {
          authenticate.current = true;
          user.current = newAccount;
          accList.current = [...accounts, newAccount];
          setInSignUpFunc(!inSignUpFunc);

          Axios.post(`http://localhost:3000/api/profile`, {
            Account_ID: newAccount.Account_ID
          }).then((response) => {
            let tempProfile = blankProfile;
            tempProfile.Account_ID = newAccount.Account_ID;
            profile.current = tempProfile;
            navigate("/profile");
          });
        });
      }
    );

  };



  const editProfileHander = (editedAccount, editedProfile) => {
    let tempAccList = accList.current;
    let accIndex = tempAccList.find(acc =>
      acc.Account_ID === editedAccount.Account_ID
    );
    tempAccList[accIndex] = editedAccount;
    console.log(tempAccList[accIndex]);
    accList.current = tempAccList;
    user.current = editedAccount;

    let tempProfileList = profileList.current;
    let profileIndex = tempProfileList.find(acc =>
      acc.Account_ID === editedProfile.Account_ID
    );
    tempProfileList[profileIndex] = editedProfile;
    console.log(tempProfileList[profileIndex]);
    profileList.current = tempProfileList;
    profile.current = editedProfile;

    Axios.put(`http://localhost:3000/api/profile/update/${user.current.Account_ID}/${profile.current.Profile_ID}`, {
      url: '../images/DefaultProfilePicture.png',
      degree: editedProfile.Degree,
      bio: editedProfile.Biography,
      resume: editedProfile.Resume,
      linkedin: editedProfile.LinkedIn,
      git: editedProfile.GitHub
    });

    // Axios.put(`http://localhost:3000/api/account/${user.current.Account_ID}`) need one for the account details as well
  };

  useEffect(() => { //jank way to ensure accountList updated before verifying inputed details
    console.log(accList.current);
    console.log(authenticate.current);
    console.log(profileList.current);
    console.log(user.current);
    console.log(profile.current);
  }, [accList, authenticate, profileList, user, profile]);

  return (
    <React.Fragment>
      <div className='App'>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage logIn={logInHandler} />} />
          <Route path="/signup" element={<SignUpPage signUp={signUpHandler} allAccounts={accList.current} />} />
          <Route path="/profile" element={<ProfilePage user={user.current} profile={profile.current} auth={authenticate.current} allProfiles={profileList.current} />} />
          <Route path="/edit-profile" element={<EditProfile user={user.current} profile={profile.current} editProfile={editProfileHander} allAccounts={accList.current} allProfiles={profileList.current} />} />
          <Route path="/search" element={<SearchPage />} />
          {/* <Route path="/addpost"element={<AddPostPage addPost={addPostHandler} />}/> */}
          <Route path="/addpost" element={<AddPostPage user={user.current} />} />
        </Routes>
      </div>
    </React.Fragment>
  );
}

export default App;
