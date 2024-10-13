
let index = 0;
let TDlist = document.getElementById("TDlist");
// let tasks = TDlist.querySelectorAll("li")
// let inputs = TDlist.querySelectorAll("input")


function addEditAndRemoveClass() {
    let tasks = TDlist.querySelectorAll("li")
    let inputs = TDlist.querySelectorAll("input")
    for (let i = 0; i < tasks.length; i++) {
        tasks[i].addEventListener("click", editTasks);
        inputs[i].addEventListener("blur", updateTasks);
        inputs[i].addEventListener('keypress',itemKeypress);
    }
    const removerButtons = document.getElementsByClassName("removeItem")
    for (let j = 0; j < removerButtons.length; j++) {
        removerButtons[j].addEventListener('click', removeItem);
    }
}
addEditAndRemoveClass()
function editTasks() {
    this.classList = "edit";
    let input = this.querySelector("input");

    input.focus();
    input.setSelectionRange(0, input.value.length);

}

function updateTasks() {
    this.previousElementSibling.innerHTML = this.value;
    this.parentNode.classList = "";
}

function itemKeypress(e){
    if (e.which === 13) {
        updateTasks.call(this);
      }
}
// add new item
document.getElementById("addT").addEventListener("click", addTask)

function addTask(e) {
    e.preventDefault();
    let add = document.getElementsByClassName("add")[0]
    const div = document.createElement("div");

    let clon = add.content.cloneNode(true);
    div.append(clon)
    div.setAttribute("data-key", index);

    TDlist.appendChild(div)
    let li = document.getElementsByTagName("li");
    let liItem = li[li.length - 1]
    let nInput = document.getElementsByClassName('input')[index];

    liItem.addEventListener("click", editTasks);
    nInput.addEventListener("blur", updateTasks);
    index++;

    let removerButtons = document.getElementsByClassName("removeItem")
    removerButtons[removerButtons.length - 1].addEventListener('click', removeItem);

}
//remove item
function removeItem() {
    this.parentNode.remove()
}

//save the list in local storage

function saveInServer() {
    console.log("hi");
    console.log(toDoList);
}

document.getElementById("save").addEventListener("click", saveInServer)