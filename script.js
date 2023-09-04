let taskName;

//target task list node
let list = document.querySelector('.taskList');

//Loads already created tasks
let itemsArray = localStorage.getItem('items') ?
JSON.parse(localStorage.getItem('items')) : [];
for(let k = 0; k <= itemsArray.length - 1; k++) {
    let text = itemsArray[k];
    const li = document.createElement('li')
    li.textContent = text;
    list.appendChild(li);
    
    const lis = document.querySelectorAll('li');
    lis.forEach(li => li.addEventListener('mouseenter', revealTask));
    lis.forEach(li => li.addEventListener('mouseleave', collapseTask));
};

//listen to click event on 'create new button' button
const newTask = document.querySelector('.newTsk');
newTask.addEventListener('click', createTask);

//listen to click event on 'clear All tasks' button
const clearAll = document.querySelector('.clearOut');
clearAll.addEventListener('click', eraseData);

function eraseData() {
    localStorage.clear();
    itemsArray = [];
};


function revealTask() {
    const del = document.createElement('button');
    del.textContent = 'Delete task';

    const check = document.createElement('button');
    check.textContent = 'Mark as Complete';

    check.setAttribute('style', 'margin-left: 60px; margin-right: 20px;');
    this.appendChild(check);
    this.appendChild(del);

};


function collapseTask() {
    for(let i = 0; i <= 1; i++) {
        this.removeChild(this.lastChild);    
    };
    
};

function createTask() {
    //request user input
    taskName = prompt('Enter the name of the Task');
    
    //create new task from input and append to tasklist
    if (taskName) {
        const newTask = document.createElement('li');
        newTask.textContent = taskName;
        newTask.setAttribute('style', 'font: 4px; fontWeight: bold; margin-bottom: 20px');
        newTask.classList.add('task');
        list.appendChild(newTask);
        
        //listen to hover events to display menu
        const tasks = document.querySelectorAll('.task');
        tasks.forEach(task => task.addEventListener('mouseenter', revealTask));
        tasks.forEach(task => task.addEventListener('mouseleave', collapseTask));
        
        // update local storage with new task
        itemsArray.push(taskName);

        localStorage.setItem('items', JSON.stringify(itemsArray));
        alert('Task created successfully')
    } else {
        alert('Task not created');
    };
};




