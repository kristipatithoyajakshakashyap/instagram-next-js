import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage"
const firebaseConfig = {
  apiKey: "AIzaSyBLqThXxynpre93EYRDrNyL--L36AfUuZc",
  authDomain: "insta-next-90b07.firebaseapp.com",
  projectId: "insta-next-90b07",
  storageBucket: "insta-next-90b07.appspot.com",
  messagingSenderId: "286079623352",
  appId: "1:286079623352:web:225b75760c7e4ad050544d",
  measurementId: "G-76M037PJZN"
};

const app =!getApps().length ?  initializeApp(firebaseConfig): getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };