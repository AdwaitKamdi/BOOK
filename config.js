import firebase from 'firebase';
require ('@firebase/firestore')


var firebaseConfig = {
    apiKey: "AIzaSyCvrQsE76yqJ0DRxHQDZoj0Xe3-nXB7vYc",
    authDomain: "book-santa-ef170.firebaseapp.com",
    projectId: "book-santa-ef170",
    storageBucket: "book-santa-ef170.appspot.com",
    messagingSenderId: "228484792332",
    appId: "1:228484792332:web:03d4e816fe38a5e99cee29"
  };
  // Initialize Firebase
  if(!firebase.apps.length)
  {
  firebase.initializeApp(firebaseConfig);
  }
  export default firebase.firestore();