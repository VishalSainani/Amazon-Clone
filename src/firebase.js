// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBP1PzocN48WMQhmN8VvEf2bU4nrzJyLBY",
    authDomain: "clone-e0fbe.firebaseapp.com",
    projectId: "clone-e0fbe",
    storageBucket: "clone-e0fbe.appspot.com",
    messagingSenderId: "1064482610560",
    appId: "1:1064482610560:web:af2416177c0bd68b4b7565",
    measurementId: "G-5QLV7E5B8Q"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.firestore()
export const auth = firebase.auth()

export default firebaseApp