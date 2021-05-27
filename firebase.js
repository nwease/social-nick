import firebase from 'firebase';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCB3SYdxVUz6qt4Fc4SPWa6pHSfEHvd8k8",
    authDomain: "social-nick.firebaseapp.com",
    projectId: "social-nick",
    storageBucket: "social-nick.appspot.com",
    messagingSenderId: "666562030870",
    appId: "1:666562030870:web:79b482fc7e1bf1cfeb3437",
    measurementId: "G-6C34PLMPQT"
};

const app = !firebase.apps.length
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app();

const db = app.firestore();
const auth = app.auth();
const storage = firebase.storage();

export { auth, db, storage };
