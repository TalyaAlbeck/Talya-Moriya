//log in or sign up page

function logInButton(e) {
    e.preventDefault();

    console.log("hi");

    showPage("#list")
}

function signUpButton(e) {
    e.preventDefault();
    let userName=document.getElementById("name").value;
    let password=document.getElementById("pass").value;
    let userObj = {userName:userName, password:password} ;
    let signUpFajax = new fajaxRequest("post","server-want-to-die/api/users/addUser",userObj)
        signUpFajax.onload = ()=>{
           alert("you have signed up successfully ")
            showPage("#list")
        }
        signUpFajax.send()

    showPage("#list")
}

// document.getElementById("log-in").addEventListener("click", logInButton)
// document.getElementById("sign-up").addEventListener("click", signUpButton)