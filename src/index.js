import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Login from './components/login';
import firebase from "firebase/app";
import "firebase/auth";
//import { auth } from "firebase";
import * as serviceWorker from './serviceWorker';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCoA-VAaRvBPasNhr7RMes0hnfV7ENS37c",
  authDomain: "checkin-57d38.firebaseapp.com",
  databaseURL: "https://checkin-57d38.firebaseio.com",
  projectId: "checkin-57d38",
  storageBucket: "checkin-57d38.appspot.com",
  messagingSenderId: "486350420152",
  appId: "1:486350420152:web:eec1cb7f911f57a21a1c4d",
  measurementId: "G-RH5BSTDDYQ"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};

auth.onAuthStateChanged(user => {
  if (user) {
    ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      document.getElementById('root')
    )
  } else {
    ReactDOM.render(
      <React.StrictMode>
        <Login />
      </React.StrictMode>,
      document.getElementById('root')
    )
  }
})

/*if (!auth.currentUser) {
  ReactDOM.render(
    <React.StrictMode>
      <Login />
    </React.StrictMode>,
    document.getElementById('root')
  );
}*/



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
