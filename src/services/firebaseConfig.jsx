
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyBLck0CWo7VA-r2u_Xhgr22I1ZEY5W4D7E",
  authDomain: "react-diego-silva-cordoba.firebaseapp.com",
  projectId: "react-diego-silva-cordoba",
  storageBucket: "react-diego-silva-cordoba.appspot.com",
  messagingSenderId: "893774295800",
  appId: "1:893774295800:web:e37eeb6a1bf90d2072410d"
};

const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);