import { initializeApp } from "firebase/app";
import {getDatabase} from 'firebase/database';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDJH9aLl8aYjmjA7a_5G6CekRzQ3XWtqxw",
    authDomain: "aidoskuneenweb.firebaseapp.com",
    databaseURL: "https://aidoskuneenweb-default-rtdb.firebaseio.com",
    projectId: "aidoskuneenweb",
    storageBucket: "aidoskuneenweb.appspot.com",
    messagingSenderId: "623700603026",
    appId: "1:623700603026:web:5c36c8bda6fe5c9b44f64b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
export const realtimeDB = getDatabase(app);
export const storageDB = getStorage(app);