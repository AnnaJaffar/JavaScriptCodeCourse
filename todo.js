const toDoArray=[]

function addFormEventListener()
{
    const toDoListForm=document.querySelector("#todolist_form")
    toDoListForm.addEventListener('submit',(event)=>{
        event.preventDefault()
        const toDoItem=document.querySelector("#toDo_item")
        AddItemtoList(toDoItem)
        toDoItem.value=''
    })
}

function AddItemtoList(item)
{

    const taskInput= item.value.trim();
    const taskList=document.querySelector("#task_list")

    if (taskInput !== '') {

        toDoArray.push(taskInput);
        taskList.innerHTML = '';
        
        toDoArray.forEach((task, index) => {
            const listItem = document.createElement('li');
            listItem.textContent = (index+1)+' '+task;
            listItem.classList.add('mb-2');
            taskList.appendChild(listItem);
            
        });        
        
    }
    else
    {
        alert("Please enter a task then click Add Task")
    }
}


window.addEventListener('load', () => {
    addFormEventListener()
})