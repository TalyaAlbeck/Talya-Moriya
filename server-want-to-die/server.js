function serverActions(requestObj){

}

function checkRequestType(requestObj) {
    console.log("hellooooo");
    switch(requestObj.request){
        case "get":
            return get(requestObj.url);
        break;
        case "post":
            post(requestObj.url, requestObj.content);
            return DBstatus;
        break;
        default:
            return "this kind of request is not defind";
    }
}

function get(url) {
    const splitUrl = url.split("/");
    console.log('splitUrl: ', splitUrl);
    //calls the data base function and sends the result back to the client
}
get("server-want-to-die/api/users/addUser")
function post(url, content) {
    const splitUrl = url.split("/");
    switch (splitUrl[3]) {
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
// post("http/users/addUser", { userName: 'Moriya', password: 12345, });



