import {

    auth,

    provider,

    signInWithPopup,

    signOut,

    onAuthStateChanged

}
from "./firebase.js";

//import {
   // auth,
    //provider,
    //signInWithPopup,
    //signOut,
    //onAuthStateChanged
// } from "./Config.js";

async function loadHeader() {

    const response = await fetch("components/header.html");

    const html = await response.text();

    document.getElementById("header-container").innerHTML = html;

    const loginButton = document.getElementById("login-btn");

    loginButton.addEventListener("click", async () => {

        try {

            await signInWithPopup(auth, provider);

        } catch (err) {

            console.error(err);

        }

    });

    onAuthStateChanged(auth, user => {

        const userArea = document.getElementById("user-area");

        if (!user) {

            userArea.innerHTML = `
                <button id="login-btn">
                    Login with Google
                </button>
            `;

            document
                .getElementById("login-btn")
                .onclick = () => signInWithPopup(auth, provider);

            return;
        }

        userArea.innerHTML = `

            <img
                src="${user.photoURL}"
                width="40"
                height="40"
                style="border-radius:50%;vertical-align:middle;"
            >

            <span style="margin:10px">
                ${user.displayName}
            </span>

            <button id="logout-btn">
                Logout
            </button>

        `;

        document
            .getElementById("logout-btn")
            .onclick = () => signOut(auth);

    });

}

loadHeader();
