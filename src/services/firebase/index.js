// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDQPibxoWrjzeIL1VpcXR5xreN9pnvMKis",
    authDomain: "backend-proyectofinal.firebaseapp.com",
    projectId: "backend-proyectofinal",
    storageBucket: "backend-proyectofinal.appspot.com",
    messagingSenderId: "666099579500",
    appId: "1:666099579500:web:c640e53bf01ccaba4a3649"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);