import { initializeApp } from "firebase/app";
// import {getAnalytics} from "firebase/analytics";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { getFunctions, connectFunctionsEmulator } from "firebase/functions";
// config env from config.js
import config from './config.js';
const firebaseConfig = {
    apiKey: config.firebase.apiKey,
    authDomain:   config.firebase.authDomain,
    projectId: config.firebase.projectId,
    storageBucket: config.firebase.storageBucket,
    messagingSenderId: config.firebase.messagingSenderId,
    appId: config.firebase.appId,
    measurementId: config.firebase.measurementId
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const auth = getAuth(app);
const db = getFirestore(app);
const functions = getFunctions(app);

//To use emulator
// if (window.location.hostname === "localhost") {
//     connectAuthEmulator(auth, "http://localhost:9099");
//     connectFirestoreEmulator(db, "localhost", 8080);
//     connectFunctionsEmulator(functions, "localhost", 5001);
// }

export { auth, db, functions };
