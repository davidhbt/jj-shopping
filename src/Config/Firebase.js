import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBIBNDlxUxungu40NhGfyNP0Ra4ms5SS3w",
  authDomain: "jj-shopping.firebaseapp.com",
  projectId: "jj-shopping",
  storageBucket: "jj-shopping.firebasestorage.app",
  messagingSenderId: "32431862975",
  appId: "1:32431862975:web:830a1636c8d646375bc20a",
  measurementId: "G-73YG68PTQ5"
};


const app = initializeApp(firebaseConfig);
export const Auth_cfg = getAuth(app)
