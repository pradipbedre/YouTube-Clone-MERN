// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCG7pIiyiECR6RxgRnWzj6sGs6ed_Rb9p8",
  authDomain: "video-683c5.firebaseapp.com",
  projectId: "video-683c5",
  storageBucket: "video-683c5.appspot.com",
  messagingSenderId: "743522304644",
  appId: "1:743522304644:web:8ca62e80aeb1fd590db8d1",
  measurementId: "G-7TY5MYFRM8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export default app;
