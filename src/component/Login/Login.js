import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebook, faGithub } from "@fortawesome/free-brands-svg-icons";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from "../../firebaseConfig";

import { userContext } from "../../App";
import { useHistory, useLocation } from "react-router";

const Login = () => {
  const [loggedinUser, setLoggedinUser] = useContext(userContext);

  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app();
  }

  const handleFacebookLogin = () => {
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var { displayName, email, photoURL, phoneNumber } = result.user;
        setLoggedinUser({ displayName, email, photoURL, phoneNumber });
        history.replace(from);
      });
  };

  // const handleGoogleLogin = () => {
  //   var provider = new firebase.auth.GoogleAuthProvider();
  //   firebase
  //     .auth()
  //     .signInWithPopup(provider)
  //     .then((result) => {
  //       /** @type {firebase.auth.OAuthCredential} */
  //       var user = result.user;
  //     })
  //     .catch((err) => console.log("Tanvir", err));
  // };

  const createProfile = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const name = document.getElementById("name").value;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        var user = userCredential.user;
        document.getElementById("Warning-message").innerText = "Succesfully Created Profile";
      })
      .catch((error) => {
        document.getElementById("Warning-message").innerText = error.message;
      });
  };
  return (
    <div>
      <div className='container py-5'>
        <div className='mx-auto w-75 bg-light border-rounded text-center p-5'>
          <div>
            <h1 className='display-4 mb-4'>Log In</h1>
            <label id='Warning-message' className='label p-2 m-2 text-danger'></label>

            <div className='mb-3'>
              <input type='text' id='email' className='form-control' placeholder='Email/Username' />
            </div>
            <div className='mb-3'>
              <input type='password' id='password' className='form-control' placeholder='Password' />
            </div>
            <button className='btn btn-primary' onClick={createProfile}>
              Log In
            </button>
            <div className='py-3'>
              <button className='btn btn-secondary me-3' onClick={handleFacebookLogin}>
                <FontAwesomeIcon icon={faFacebook} /> &nbsp; Facebook
              </button>
              <button className='btn btn-secondary me-3'>
                <FontAwesomeIcon icon={faGoogle} />
                &nbsp; Gmail
              </button>
              <button className='btn btn-secondary'>
                <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                &nbsp; Github
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
