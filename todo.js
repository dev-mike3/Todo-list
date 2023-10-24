//Targetting the HTML elements
const taskInput = document.getElementById('task-input')
const taskList = document.getElementById('task-list')
const taskBody = document.getElementById('body')
//Function to Accept input and trim
function handleSubmit(){
    const taskText = taskInput.value.trim()
    

    if(taskText === ""){
        alert("Please fill in the inout field")
    }
    else if(taskText.length <8){
        alert("Input field must be more than 8 words")

    }
    else{
        taskInput.value= ""
       taskInput.focus()
    //    addTask(taskText)
    
    }

    const body = taskBody.value.trim()
    if(body === ""){
        alert("Please fill in the input field")
    }
    else if(body.length <8){
        alert("Input field must be more than 8 words")

    }
    else{
       
        
        taskBody.value= ""
       taskBody.focus()
       addTask(`${taskText}  ${body}`)
    
    }

}

function addTask(text){
    const taskItem = document.createElement('li')
    taskItem.className = 'task-item'

    taskItem.innerHTML = `
    ${text}
    <button class="delete-btn">Delete</button>
    <button class="edit-btn">Edit</button>
    `
    //delete functionality

    const deleteBtn = taskItem.querySelector('.delete-btn')

    deleteBtn.addEventListener('click', function() {
      taskItem.remove()
    })

    //edit functionality

    const EditBtn = taskItem.querySelector('.edit-btn')

    EditBtn.addEventListener('click', function() {
     const newText = prompt("Enter your new Text:", text)
     if(newText != null && newText.trim() !==""){
        taskItem.firstChild.textContent = newText
     }

    })








    taskList.appendChild(taskItem)


}


