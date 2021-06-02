import logo from './logo.svg';
import './App.css';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from './firebase.config';
import { useState } from 'react';



if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}else {
  firebase.app(); // if already initialized, use that one
}


function App() {
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  const fbProvider = new firebase.auth.FacebookAuthProvider();
  const gitHubProvider = new firebase.auth.GithubAuthProvider();
  

  const [user, setUser] = useState({});

  const handleGoogleSignIn = () => {
    console.log("clicked");
    firebase.auth()
      .signInWithPopup(googleProvider)
      .then((result) => {

        const user = result.user;
        console.log(user);
        setUser(user);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  }
  const handleFbSignIn=()=>{
    firebase.auth()
      .signInWithPopup(fbProvider)
      .then((result) => {

        const user = result.user;
        console.log(user);
        setUser(user);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage);

      });
  }
  const handleGithubSignIn=()=>{
    firebase.auth()
      .signInWithPopup(gitHubProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setUser(user);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage);

      });
  }
  
  return (
    <div className="App">
      <button onClick={handleGoogleSignIn}>Sign in with Google</button><br />
      <button onClick={handleFbSignIn}>Log in with Facebook</button><br />
      <button onClick={handleGithubSignIn}>Log in with GitHub</button><br />
      
      <div>
        <img src={user.photoURL} alt="" />
        <h3>Welcome {user.displayName}</h3>
        <p>Signed in by {user.email}</p>
      </div>
    </div>
  );
}

export default App;
