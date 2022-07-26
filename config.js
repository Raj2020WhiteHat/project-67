import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
  apiKey: "AIzaSyBO1L0JpsvMdKBQwFsicwS0T9zV9JI4Iwo",
  authDomain: "team-voting-5d377.firebaseapp.com",
  databaseURL: "https://team-voting-5d377-default-rtdb.firebaseio.com",
  projectId: "team-voting-5d377",
  storageBucket: "team-voting-5d377.appspot.com",
  messagingSenderId: "320466533644",
  appId: "1:320466533644:web:b81b26522e320df3b59d29"

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();