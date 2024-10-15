

function checkRequestType(requestObj) {
    console.log("hellooooo");
    if (requestObj.request === "get") {
        return get(requestObj.url);
    } else if (requestObj.request === "post") {
        return post(requestObj.url, requestObj.content);
    } else if (requestObj.request === "put") {
        return put(requestObj.url, requestObj.content);
    } else {
        console.log("this kind of request is not defind");
    }
}

function get(url) {
    const splitUrl = url.split("/");

    switch (splitUrl[3]) {
        case "GetUser":
            console.log(userList);

            //need to also check in splitUrl[4] to get spesific list from user

            break;
    }
    //calls the data base function and sends the result back to the client
}

// get("http/users/ninini/GetUser" + userId)
//==================================================================================

function post(url, content) {
    const splitUrl = url.split("/");
    switch (splitUrl[3]) {
        case "addUser":
            if (addUser(content.userName, content.password)) {
                return true;
            } else {
                addUser(content.userName, content.password)
            }
            break;
        case "addToDoList":
            return addToDoList(content.userName, content.listItem)
            break;
        case "changeList":

            return changeList(content.userName, content.list)
            break;
        default:
            return false;
    };//calls the data base function


}
// post("http/users/addUser", { userName: 'Moriya', password: 12345, });



