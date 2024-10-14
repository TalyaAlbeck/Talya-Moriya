function checkRequestType(requestObj) {
    if (requestObj.request === "get") {
        return get(requestObj.url);
    } else if (requestObj.request === "post") {
        post(requestObj.url, requestObj.content);
        return;
    } else if (requestObj.request === "put") {
        put(requestObj.url, requestObj.content);
    } else {
        console.log("this kind of request is not defind");
    }
}

function get(url) {
    const splitUrl = url.split("/");
    return splitUrl[2];//calls the data base function and sends the result back to the client
}

function post(url, content) {
    const splitUrl = url.split("/");
    switch (splitUrl[2]) {
        case "addUser":
            return addUser(content.userName, content.password)
            break;
        case "addToDoList":
            return addToDoList(content.userName, content.listItem)
            break;
        case changeList:
            return changeList(content.userName, content.list)
            break;
        default:
            return false;
    };//calls the data base function


}
post("http/users/addUser", { userName: 'Moriya', password: 12345, });



