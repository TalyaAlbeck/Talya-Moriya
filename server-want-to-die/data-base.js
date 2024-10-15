

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
    if (GetUser(name)) {
        return true
    } else {
        newArr.push({
            name,
            password,
            id: newArr.length + 1,
            list: []
        })
    }

    localStorage.setItem("users", JSON.stringify(newArr))
    return "user added!"


}

addUser("talya", 12345)

function logInUser(name, password) {
    let checkUser = getAllUsers()
    for (const user of checkUser) {
        if (name === user.name && password === user.password) {
            return user
        }
    }
    return "user does not exist"
}

// logInUser("talya", "12345")

function GetUser(name) {
    let checkUser = getAllUsers()
    for (const user of checkUser) {
        if (name === user.name) {
            return user
        }
    }
}

function addToDoList(name, toDo) {
    let user = GetUser(name)
    console.log(user.list);

    user.list.push(toDo);
    let users = getAllUsers()
    users[user.id - 1] = user
    localStorage.setItem("users", JSON.stringify(users))


    return user.list;
}

function changeList(name, newList) {
    let user = GetUser(name)
    user.list = [newList];
    let users = getAllUsers()
    users[user.id - 1] = user
    localStorage.setItem("users", JSON.stringify(users))
}



