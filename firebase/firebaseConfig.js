// firebase/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCVCHad5y85hElxg6azKz8Z7aanV07qxqk",
  authDomain: "grow-a-garden-pet-marketplace.firebaseapp.com",
  projectId: "grow-a-garden-pet-marketplace",
  storageBucket: "grow-a-garden-pet-marketplace.appspot.com",
  messagingSenderId: "224024827282",
  appId: "1:224024827282:web:25764bc4efe4f824065d4b",
  measurementId: "G-LYCWVZ4519"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
