// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getStorage, ref } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBasS3J_RGKkzvVmKsoMkvNtXaOmKtaWtU",
  authDomain: "softlines-873e7.firebaseapp.com",
  projectId: "softlines-873e7",
  storageBucket: "softlines-873e7.appspot.com",
  messagingSenderId: "14613818432",
  appId: "1:14613818432:web:2985e3f5fe53934ae4c3a5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);