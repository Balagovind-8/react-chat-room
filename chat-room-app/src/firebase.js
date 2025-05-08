// src/firebase.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-UPlFeLD4kABUbvHWNFMpA_IenZA98CY",
    authDomain: "reactchatapp-b5a3c.firebaseapp.com",
      projectId: "reactchatapp-b5a3c",
        storageBucket: "reactchatapp-b5a3c.firebasestorage.app",
          messagingSenderId: "402885719981",
            appId: "1:402885719981:web:1fa62de6e1527579db1324"
            };

            // Initialize Firebase
            const app = initializeApp(firebaseConfig);

            // Export Firebase Auth and Firestore services
            export const auth = getAuth(app);
            export const db = getFirestore(app);
            
            