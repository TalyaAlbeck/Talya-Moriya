
const container = document.getElementsByClassName("container")[0];

//show the templates

function showPage(tem) {
    const template = document.querySelector(tem);
    container.innerHTML = ``;
    const clon = template.content.cloneNode(true)
    container.appendChild(clon);
}

// showPage("#log-in-page")
showPage("#list")

//log in or sign up page

function logInButton(e) {
    e.preventDefault();

    console.log("hi");

    showPage("#list")
}

function signUpButton(e) {
    e.preventDefault();

    console.log("hi");

    showPage("#list")
}

// document.getElementById("log-in").addEventListener("click", logInButton)
// document.getElementById("sign-up").addEventListener("click", signUpButton)