

function checkRequestType(requestObj) {
    if (requestObj.request === "get") {
        get(requestObj.url)
    } else if (requestObj.request === "post") {
        post(requestObj.url, requestObj.content)
    } else if (requestObj.request === "put") {
        put(requestObj.url, requestObj.content)
    } else {
        console.log("this kind of request is not defind");
    }
}

function get(url) {

}

function post(url, content) {

}
