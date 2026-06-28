import { supabaseClient }
from "./supabase.js";
// Import the shared Supabase client
//import { supabaseClient } from "./Config.js"; 

async function loadTrainingData() {

    const { data, error } = await supabaseClient
        .from("trainingdata")
        .select("*")
        .order("id", { ascending: true });

    const container = document.getElementById("training-list");

    if (error) {

        console.error(error);

        container.innerHTML = `
            <div class="card">
                <h3>Error Loading Data</h3>
                <p>${error.message}</p>
            </div>
        `;

        return;
    }

    container.innerHTML = "";

    data.forEach(item => {

        container.innerHTML += `
            <div class="card">

                <h3>${item.title}</h3>

                <p>${item.desc || ""}</p>

                <div class="tech">
                    ${item.tech || ""}
                </div>

                <br>

                <a
                    class="btn"
                    href="${item.link}"
                    target="_blank"
                >
                    Open Training
                </a>

            </div>
        `;

    });

}

document.addEventListener("DOMContentLoaded", () => {

    loadTrainingData();

});
