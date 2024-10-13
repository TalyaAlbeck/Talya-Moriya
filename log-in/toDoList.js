
let TDlist = document.getElementById("TDlist");
let tasks = TDlist.querySelectorAll("li")
let inputs = TDlist.querySelectorAll("input")

function addEditClass() {
    let tasks = TDlist.querySelectorAll("li")
    console.log(tasks.length);
    for (let i = 0; i < tasks.length; i++) {
        tasks[i].addEventListener("click", editTasks);
        inputs[i].addEventListener("blur", updateTasks);
        console.log(tasks.length);

    }
}

function editTasks() {
    this.classList = "edit";
    let input = this.querySelector("input");
    console.log(this);

    input.focus();
    input.setSelectionRange(0, input.value.length)
}

function updateTasks() {
    this.previousElementSibling.innerHTML = this.value;
    this.parentNode.classList = "";
}

document.getElementById("addT").addEventListener("click", addTask)

function addTask(e) {
    e.preventDefault();

    let add = document.querySelector(".add")
    let clon = add.content.cloneNode(true)
    TDlist.appendChild(clon)
    let nInput = document.getElementsByClassName('input')[0];
    add.addEventListener("click", editTasks);
    nInput.addEventListener("blur", updateTasks);
}
