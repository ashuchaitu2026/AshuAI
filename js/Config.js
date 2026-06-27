const SUPABASE_URL = "https://kaojyzzqsfmpxjjnbros.supabase.co";

const SUPABASE_KEY = "sb_publishable_j9BIi8baQKy4cMP4niiuEA_921Moqtp";

const supabaseClient = supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDato8H7RegmOVwDmdkFtgLgyRe1Y_sg6Q",
  authDomain: "ashuai-481f3.firebaseapp.com",
  projectId: "ashuai-481f3",
  storageBucket: "ashuai-481f3.firebasestorage.app",
  messagingSenderId: "239643358154",
  appId: "1:239643358154:web:2a275d65b937a98a695533",
  measurementId: "G-0DHZSH9B4V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
