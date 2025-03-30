import { initializeApp } from "firebase/app";
import { getAuth, browserLocalPersistence, setPersistence } from "firebase/auth";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY", // Replace with your Firebase API key
  authDomain: "YOUR_AUTH_DOMAIN", // Replace with your Firebase Auth domain
  projectId: "YOUR_PROJECT_ID", // Replace with your Firebase project ID
  storageBucket: "YOUR_STORAGE_BUCKET", // Replace with your Firebase storage bucket
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID", // Replace with your Firebase messaging sender ID
  appId: "YOUR_APP_ID", // Replace with your Firebase app ID
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Initialize Auth instance
const auth = getAuth(app);

// Set persistence to localStorage
setPersistence(auth, browserLocalPersistence)
  .then(() => {
    console.log("Persistence set to localStorage");
  })
  .catch((error) => {
    console.error("Error setting persistence:", error);
  });

export const Auth_cfg = auth;
