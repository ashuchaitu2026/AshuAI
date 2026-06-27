const SUPABASE_URL = "https://kaojyzzqsfmpxjjnbros.supabase.co";

const SUPABASE_KEY = "sb_publishable_j9BIi8baQKy4cMP4niiuEA_921Moqtp";

const supabaseClient = supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);
// =========================================
// SUPABASE CONFIGURATION
// =========================================

import { createClient } from "https://esm.sh/@supabase/supabase-js";

export const SUPABASE_URL = "https://kaojyzzqsfmpxjjnbros.supabase.co";

export const SUPABASE_KEY = "sb_publishable_j9BIi8baQKy4cMP4niiuEA_921Moqtp";

export const supabaseClient = createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);

// =========================================
// FIREBASE CONFIGURATION
// =========================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";

import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";

const firebaseConfig = {

    apiKey: "AIzaSyDato8H7RegmOVwDmdkFtgLgyRe1Y_sg6Q",

    authDomain: "ashuai-481f3.firebaseapp.com",

    projectId: "ashuai-481f3",

    storageBucket: "ashuai-481f3.firebasestorage.app",

    messagingSenderId: "239643358154",

    appId: "1:239643358154:web:2a275d65b937a98a695533",

    measurementId: "G-0DHZSH9B4V"

};

const firebaseApp = initializeApp(firebaseConfig);

// Firebase Authentication

export const auth = getAuth(firebaseApp);

export const provider = new GoogleAuthProvider();

export {
    signInWithPopup,
    signOut,
    onAuthStateChanged
}; 
