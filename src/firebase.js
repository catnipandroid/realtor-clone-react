// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClF4oK9GeICW8aKmhbkWuu1_E5X7KezTA",
  authDomain: "realtor-clone-react-fc8e7.firebaseapp.com",
  projectId: "realtor-clone-react-fc8e7",
  storageBucket: "realtor-clone-react-fc8e7.appspot.com",
  messagingSenderId: "940164471477",
  appId: "1:940164471477:web:64fe7b4daf9fb70e6dfcfc",
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();

export default db;
