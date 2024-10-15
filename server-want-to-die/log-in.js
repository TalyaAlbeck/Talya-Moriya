
//log in or sign up page

function logInButton(e) {
    e.preventDefault();

    let userName = document.getElementById("name").value
    let password = document.getElementById("pass").value
    if (userName===""||password===""){
        alert("userName or password not filld in")
    }else{
    let userObj = { userName: userName, password: password }

    let logInFajax = new fajaxRequest("post", "server-want-to-die/api/users/logInUser", userObj)
    logInFajax.onload = function () {
        
        console.log("lilili");

        localStorage.setItem("corentUser", [userName])

        alert("yoopi-doo")
        showPage("#list")
        }
    logInFajax.send();
    }
}

function signUpButton(e) {
    e.preventDefault();
    let userName = document.getElementById("name").value;
    let password = document.getElementById("pass").value;
    if (userName===""||password===""){
        alert("userName or password not filld in")
    }else{
    let userObj = { userName: userName, password: password };
    let signUpFajax = new fajaxRequest("post", "server-want-to-die/api/users/addUser", userObj)
    signUpFajax.onload = () => {
        if (signUpFajax.response) {
            alert("this user is alredy exist, pleas log in or sign up in new user")
        } else {
            localStorage.setItem("corentUser", userName)

            alert("you have signed up successfully ")
            showPage("#list")
        }
    }
    signUpFajax.send()

    // showPage("#list") 
}}
