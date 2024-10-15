const container = document.getElementsByClassName("container")[0];

function showPage(tem) {
    const template = document.getElementById(this.getAttribute("data-section"));
    container.innerHTML = ``;
    container.appendChild(template.content.cloneNode(true));

    // const clone = template.content.cloneNode(true)
    // container.appendChild(clone);

    if (tem === "#log-in-page") {

        document.getElementById("log-in").addEventListener("click", logInButton)
        document.getElementById("sign-up").addEventListener("click", signUpButton)
        console.log(template.content);
        
    } else if (tem === "#list") {

        document.getElementById("addT").addEventListener("click", addTask)
        document.getElementById("save").addEventListener("click", saveInServer)

    }
    // else if (tem === "#log-out") {
    //     document.getElementById("logOut").addEventListener("click", logOutButton)
    // } 
    else {
        console.log("well");

    }
}

//page changing
for (let link of document.querySelectorAll(".link")) {
    link.addEventListener("click", showPage);
}

// showPage("#log-in-page")
// showPage("#list")