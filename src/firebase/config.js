import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDeg9_HPhldxbs-uGoG_XabzxUHHZLdKSk",
    authDomain: "mirros-3f405.firebaseapp.com",
    databaseURL: "https://mirros-3f405.firebaseio.com",
    projectId: "mirros-3f405",
    storageBucket: "mirros-3f405.appspot.com",
    messagingSenderId: "1090098485067",
    appId: "1:1090098485067:web:d8964ecf156646beb9face"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage=firebase.storage();
const projectFirestore=firebase.firestore();

const timestamp= firebase.firestore.FieldValue.serverTimestamp;


export { projectStorage, projectFirestore, timestamp };