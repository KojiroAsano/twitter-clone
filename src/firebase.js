// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApB_Xyl7D21pgsveaJ9lmyk2VKFhqSsxw",
  authDomain: "twitter-clone-d3d86.firebaseapp.com",
  projectId: "twitter-clone-d3d86",
  storageBucket: "twitter-clone-d3d86.appspot.com",
  messagingSenderId: "471476823942",
  appId: "1:471476823942:web:c0c02af2f434d898f5ae07"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize cloud firestore
const db = getFirestore(app);

export default db;
