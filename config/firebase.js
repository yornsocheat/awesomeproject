import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBS9BncLq_64leVsZv_K4GgIPxZjm11UZQ",
    authDomain: "app-healthykh.firebaseapp.com",
    databaseURL: "https://app-healthykh.firebaseio.com",
    projectId: "app-healthykh",
    storageBucket: "app-healthykh.appspot.com",
    messagingSenderId: "361712288561",
    appId: "1:361712288561:web:6825cb554ed249161b2610",
    measurementId: "G-B13WPY538D"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const f = firebase;
export const databse = firebase.database();
export const auth = firebase.auth();
export const storage = firebase.storage();
