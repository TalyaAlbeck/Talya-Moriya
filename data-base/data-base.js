let DBstatus = 0;

function getAllUsers() {
    if (!localStorage.getItem("users")) {
        localStorage.setItem("users", "[]")
        return []
    }
    return JSON.parse(localStorage.getItem("users"))
}

function addUser(name, password) {
    let data = JSON.parse(localStorage.getItem("users"))
    if (!data) {
        data = []
    }

    const newArr = Array.from(data)

    newArr.push({
        name,
        password,
        id: newArr.length + 1,
        list: []
    })

    localStorage.setItem("users", JSON.stringify(newArr))
    DBstatus = 200;
    // return "user added!"


}

addUser("talya", 12345)

function GetUser(name, password) {
    let checkUser = getAllUsers()
    for (const user of checkUser) {
        if (name === user.name && password === user.password) {
            return user
        }
    }
    DBstatus = 404;
    // return "user does not exist"
}

GetUser("talya", "12345")

function addToDoList(name, toDo) {
    GetUser(user.name, user.password)
    user.list += toDo;
}

function changeList(name, newList) {
    GetUser(user.name, user.password)
    user.list = newList;
}