
let TDlist = document.getElementById("TDlist");
// let tasks = TDlist.querySelectorAll("li")
// let inputs = TDlist.querySelectorAll("input")

function addEditClass() {
    let tasks = TDlist.querySelectorAll("li")
    let inputs = TDlist.querySelectorAll("input")
    for (let i = 0; i < tasks.length; i++) {
        tasks[i].addEventListener("click", editTasks);
        inputs[i].addEventListener("blur", updateTasks);
    }
}

function editTasks() {
    this.classList = "edit";
    let input = this.querySelector("input");
    // console.log(this);

    input.focus();
    input.setSelectionRange(0, input.value.length)
}

function updateTasks() {
    this.previousElementSibling.innerHTML = this.value;
    this.parentNode.classList = "";
}

// add new item
document.getElementById("addT").addEventListener("click", addTask)

function addTask(e) {
    e.preventDefault();
    let add = document.getElementsByClassName("add")[0]
    let clon = add.content.cloneNode(true)
    TDlist.appendChild(clon)
    let li = document.getElementsByTagName("li");
    let liItem = li[li.length - 1]
    let nInput = document.getElementsByClassName('input')[0];
    liItem.addEventListener("click", editTasks);
    nInput.addEventListener("blur", updateTasks);
}
