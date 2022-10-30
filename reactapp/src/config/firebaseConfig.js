// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzQ_K-GbOEFyppQKyhKLsVITTpwTdGSfY",
  authDomain: "fir-react-a6962.firebaseapp.com",
  databaseURL: "https://fir-react-a6962-default-rtdb.firebaseio.com",
  projectId: "fir-react-a6962",
  storageBucket: "fir-react-a6962.appspot.com",
  messagingSenderId: "129222806396",
  appId: "1:129222806396:web:4fba5d67193c6253bcf2f9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app