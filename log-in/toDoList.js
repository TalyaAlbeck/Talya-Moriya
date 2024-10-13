
let TDlist = document.getElementById("TDlist");
let tasks = TDlist.querySelectorAll("li")
let inputs = TDlist.querySelectorAll("input")

function addEditClass() {
    console.log(tasks.length);
    // tasks = TDlist.querySelectorAll("li")
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
    TDlist.appendChild(add.content)
    add.addEventListener("click", editTasks);
    add.lastChild.addEventListener("blur", updateTasks);


    // showPage("list")
    // showPage(".add")
}
