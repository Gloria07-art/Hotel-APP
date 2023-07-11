import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import {getAuth} from 'firebase/auth' ;

const firebaseConfig = {

  apiKey: "AIzaSyDyzYZY73awshB0kexnH2Tpghu4_Rb4nkk",

  authDomain: "hotel-app-42929.firebaseapp.com",

  projectId: "hotel-app-42929",

  storageBucket: "hotel-app-42929.appspot.com",

  messagingSenderId: "190326385370",

  appId: "1:190326385370:web:725e300e378cf12b0613e3",

  measurementId: "G-4F7RWSDC6R"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

const auth = getAuth(app);

export {auth}