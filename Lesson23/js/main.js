function markAllAsCompleted() {
    chaneListElementState(true);
}

function markAllAsNotCompleted() {
    chaneListElementState(false);
}

function chaneListElementState(shouldBeCompleted) {
    const listElement = document.getElementById('tasks-list');
    const taskElements = listElement.children;
    for (let taskElement of taskElements) {
        if (shouldBeCompleted) {
            taskElement.classList.add('completed');
        } else {
            taskElement.classList.remove('completed');
        }
    } 
}

function deleteTask(buttonElement) {
    //console.log(buttonElement.parentElement.remove())//get parent element
    console.log(buttonElement.parentElement.style.display = 'none');
}

function toggleCompleteState(spanElement){
    const taskElement = spanElement.parentElement;
    const isCompleted = taskElement.classList.contains('completed');
    if(isCompleted) {
        taskElement.classList.remove('completed');
    } else {
        taskElement.classList.add('completed');
    }
}
function submitForm(submitEvent) {
    submitEvent.preventDefault();
    const taskNameInputElement =  document.getElementById('new-task-name');
    const taskName = taskNameInputElement.value;
    //const style = taskNameInputElement.style;
   // style.color = 'red';
    if (taskName === '') {
        alert('Please fill in the name');
        return false;
    }
    const isCompleted = document.getElementById('is-completed-select').value;
    //let isCompletedClass = '';

    //if (isCompleted ==='1') {
   //     isCompletedClass = 'completed';
   // } else {
   //     isCompletedClass = '';
    //}
    const isCompletedClass = isCompleted === '1' ? 'completed' : '';

    const newTaskString = `
    <li class="${isCompletedClass}">
        <span onclick="toggleCompleteState(this)">${taskName}</span> 
        <button onclick="deleteTask(this)">X</button>
    </li>
`;
    const listElement = document.getElementById('tasks-list');
    //console.log(listElement.innerText);
    //console.log(listElement.innerHTML);
    listElement.innerHTML +=newTaskString;
    taskNameInputElement.value = '';
}

