import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyARVxRwrDk52EpD5-bR77s1rUsdHN5FQAo",
    authDomain: "vote25-635e9.firebaseapp.com",
    databaseURL: "https://vote25-635e9.firebaseio.com",
    projectId: "vote25-635e9",
    storageBucket: "vote25-635e9.appspot.com",
    messagingSenderId: "777719146695",
    appId: "1:777719146695:web:2d8d17977c1f04f03036e2",
    measurementId: "G-8BG7CF4YB3"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
