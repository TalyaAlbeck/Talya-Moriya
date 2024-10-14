class fajaxRequest {
    constructor(request, url, content) {
        this.request = request;
        this.url = url;
        this.content = content;
        this.response = null;
    }
    send() {
        this.response = checkRequestType(this)
        this.onload()
    }
}

// let x = new fajaxRequest("get", "http://api/home.html", "blabliblu");
// console.log(x);
// x.onload = function () {
//     console.log("lilili");
// }
// x.send();



// let logInFajax = new fajaxRequest("post", "", userObj)

