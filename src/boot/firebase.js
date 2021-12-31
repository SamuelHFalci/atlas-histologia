import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
const config = {
  apiKey: "AIzaSyAEiWNROsxr8OWOLrPWfVkgvt1txZ3dN48",
  authDomain: "atlas-de-histologia-449d1.firebaseapp.com",
  projectId: "atlas-de-histologia-449d1",
  storageBucket: "atlas-de-histologia-449d1.appspot.com",
  messagingSenderId: "323379871183",
  appId: "1:323379871183:web:5e84df09ef1f906a4ae6ba",
  measurementId: "G-PN3060RBY2",
};

const app = initializeApp(config);
const firestore = getFirestore(app);
const auth = getAuth();
const storage = getStorage();
export { firestore, auth, storage };
