

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
        list: []
    })

    localStorage.setItem("users", JSON.stringify(newArr))
    return "user added!"


}

addUser("talya", "12345")

function GetUser(name, password) {
    let checkUser = getAllUsers()
    for (const user of checkUser) {
        if (name === user.name && password === user.password) {
            return user
        }
    }
    return "user does not exist"
}

GetUser("talya", "12345")

function addToDoList(userName, toDo) {
    
    console.log('user: ', user);
    
    user.list += toDo;
}

function changeList(name, newList) {
    GetUser(user.name, user.password)
    user.list = newList;
}

