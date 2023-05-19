
import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/storage'
import "firebase/auth"
import "firebase/firebase-functions"

const FirebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCtKzOgcDzr8N2AwkG-mbV-R3RhjPdnm-Q",
    authDomain: "trac-trac-app.firebaseapp.com",
    projectId: "trac-trac-app",
    storageBucket: "trac-trac-app.appspot.com",
    messagingSenderId: "434279197072",
    appId: "1:434279197072:web:b6f304af4db1451f8c2b15"
});

export const auth = FirebaseApp.auth()
export const database = FirebaseApp.firestore();
const storage = firebase.storage()
const functions = firebase.functions();

export {
    storage, functions, FirebaseApp as default
}