// Variables 
const item = document.querySelector('#item')
const submit = document.querySelector('#submit')
const ul = document.querySelector('#list')
const tasksLeft = document.querySelector('span')
        
// Create Task List
submit.addEventListener('click', toDo => {
    toDo.preventDefault()
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(item.value));
    ul.appendChild(li);
    item.value = ""
    remainingTasks()
})

//Mark Completed
ul.addEventListener('click', completed => {
    if (completed.target.tagName == 'LI') {
        completed.target.classList.toggle("completed")
    }
    remainingTasks()
})

//Clear Items
document.querySelectorAll('button').forEach(e => e.addEventListener('click', clear => {
    let clearTasks = clear.target.getAttribute('data-value')
        if (clearTasks == 'clear') {
            document.querySelectorAll('li').forEach(e => e.remove())
        remainingTasks()
        } else {
            document.querySelectorAll('.completed').forEach(e => e.remove())
        remainingTasks()
        }
    }))

//Counter Function for Remaining Tasks 
function remainingTasks() {
    let listItems = ul.getElementsByTagName('li').length
    let completedTasks = ul.getElementsByClassName('completed').length
        return tasksLeft.innerText = listItems - completedTasks > 1 ? `${listItems - completedTasks} tasks` 
        : `${listItems - completedTasks} tasks`
        }