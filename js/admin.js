import {
    auth,
    onAuthStateChanged
} from "./firebase.js";

import {
    supabaseClient
} from "./supabase.js";

const ADMIN_EMAIL = "ashuchaitu2026@gmail.com";

document.addEventListener("DOMContentLoaded", () => {

    loadHeader();
 //   loadFooter();

    onAuthStateChanged(auth, async (user) => {

        if (!user) {

            window.location.href = "index.html";
            return;

        }

        if (user.email !== ADMIN_EMAIL) {

            window.location.href = "index.html";
            return;

        }

        initialiseAdmin();

    });

});

async function loadHeader() {

    const response = await fetch("components/header.html");

    document.getElementById("header-placeholder").innerHTML =
        await response.text();

}

async function loadFooter() {

    try {

        const response = await fetch("components/footer.html");

        document.getElementById("footer-placeholder").innerHTML =
            await response.text();

    }
    catch {

        document.getElementById("footer-placeholder").innerHTML = "";

    }

}

function initialiseAdmin() {

    document
        .getElementById("show-add-form-btn")
        .onclick = () => {

            document
                .getElementById("add-form")
                .style.display = "block";

        };

    document
        .getElementById("cancel-add-btn")
        .onclick = () => {

            document
                .getElementById("add-form")
                .style.display = "none";

        };

    document
        .getElementById("save-course-btn")
        .onclick = addCourse;

    loadCourses();

}

async function loadCourses() {

    const { data, error } = await supabaseClient

        .from("trainingdata")

        .select("*")

        .order("id");

    if (error) {

        alert(error.message);

        return;

    }

    const container = document.getElementById("course-list");

    container.innerHTML = "";

    data.forEach(course => {

        container.innerHTML += `

        <div class="card" id="course-${course.id}">

            <p>

                <strong>Title</strong>

                <input
                    id="title-${course.id}"
                    value="${course.title ?? ""}">

            </p>

            <p>

                <strong>Description</strong>

                <textarea
                    id="desc-${course.id}">${course.desc ?? ""}</textarea>

            </p>

            <p>

                <strong>Tech</strong>

                <input
                    id="tech-${course.id}"
                    value="${course.tech ?? ""}">

            </p>

            <p>

                <strong>Link</strong>

                <input
                    id="link-${course.id}"
                    value="${course.link ?? ""}">

            </p>

            <button
                class="btn save-btn"
                data-id="${course.id}">

                Save

            </button>

            <button
                class="btn delete-btn"
                data-id="${course.id}">

                Delete

            </button>

        </div>

        <br>

        `;

    });

    document.querySelectorAll(".save-btn")

        .forEach(btn => {

            btn.onclick = () =>

                saveCourse(btn.dataset.id);

        });

    document.querySelectorAll(".delete-btn")

        .forEach(btn => {

            btn.onclick = () =>

                deleteCourse(btn.dataset.id);

        });

}

async function addCourse() {

    const title = document.getElementById("title").value.trim();

    if (!title) {

        alert("Title is required");

        return;

    }

    const desc = document.getElementById("desc").value;

    const tech = document.getElementById("tech").value;

    const link = document.getElementById("link").value;

    const { error } = await supabaseClient

        .from("trainingdata")

        .insert([{

            title,

            desc,

            tech,

            link

        }]);

    if (error) {

        alert(error.message);

        return;

    }

    document.getElementById("title").value = "";

    document.getElementById("desc").value = "";

    document.getElementById("tech").value = "";

    document.getElementById("link").value = "";

    document.getElementById("add-form").style.display = "none";

    loadCourses();

}

async function saveCourse(id) {

    const title = document.getElementById(`title-${id}`).value;

    const desc = document.getElementById(`desc-${id}`).value;

    const tech = document.getElementById(`tech-${id}`).value;

    const link = document.getElementById(`link-${id}`).value;

    const { error } = await supabaseClient

        .from("trainingdata")

        .update({

            title,

            desc,

            tech,

            link

        })

        .eq("id", id);

    if (error) {

        alert(error.message);

        return;

    }

    alert("Course updated.");

}

async function deleteCourse(id) {

    if (!confirm("Delete this course?")) {

        return;

    }

    const { error } = await supabaseClient

        .from("trainingdata")

        .delete()

        .eq("id", id);

    if (error) {

        alert(error.message);

        return;

    }

    document
        .getElementById(`course-${id}`)
        .remove();

}
