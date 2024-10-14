
//log in or sign up page

function logInButton(e) {
    e.preventDefault();

    let userName = document.getElementById("name").value
    let password = document.getElementById("pass").value

    let userObj = { userName: userName, password: password }

    console.log(userObj);

    let logInFajax = new fajaxRequest("post", "server-want-to-die/api/users/logInUser", userObj)
    logInFajax.onload = function () {
        console.log("lilili");

        alert("yoopi-doo")
        showPage("#list")
    }
    logInFajax.send();
}

function signUpButton(e) {
    e.preventDefault();

    console.log("hi");

    showPage("#list")
}
