const container = document.getElementsByClassName("container")[0];

function showPage(tem) {
    const template = document.querySelector(tem);
    container.innerHTML = ``;
    const clone = template.content.cloneNode(true)
    container.appendChild(clone);
    if (tem==="#log-in-page"){
        
        document.getElementById("log-in").addEventListener("click", logInButton)
        document.getElementById("sign-up").addEventListener("click", signUpButton) 
    }else if(tem==="#list"){
       
        document.getElementById("addT").addEventListener("click", addTask)
        document.getElementById("save").addEventListener("click", saveInServer)

    }
}

showPage("#log-in-page")
// showPage("#list")