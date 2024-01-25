const inputMain = document.querySelector('.addnew');
const plus = document.querySelector('.plus');
const error = document.querySelector('.error');
const bodyTodo = document.querySelector('.bodyTodo');
const todoUl = document.querySelector('.todoUl');

const allTask = document.getElementsByTagName('li');

let editInput = document.createElement('input')

const checkEnter = (e) => {
    if(e.key === 'Enter'){
        inputCheck()
    }
}

const inputCheck = () => {
    if(inputMain.value == ''){
        error.style.display = "block";
        error.textContent = 'You have to type something!'
    }else{
        let newTask = document.createElement('li')
        // newTask = document.createElement('p')
        newTask.textContent = inputMain.value
        addTools(newTask)
        todoUl.append(newTask)
        error.style.display = "none";
        inputMain.value = '';
        
        
    }
}


const addTools = (newTodo) => {
    const toolsDiv = document.createElement('div')
    toolsDiv.classList.add('icon')
    newTodo.append(toolsDiv)
    

    let completeBtn = document.createElement('button')
    let editBtn = document.createElement('button')
    let deleteBtn = document.createElement('button')


    completeBtn.classList.add('icon')
    editBtn.classList.add('icon')
    deleteBtn.classList.add('icon')

    completeBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
    editBtn.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';
    deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>'

    toolsDiv.append(completeBtn, editBtn, deleteBtn)
}

const checkTools = e => {
    if(e.target.matches('.fa-check')){
        e.target.closest('li').classList.toggle('completed')
        e.target.closest('button').classList.toggle('completed')
    }else if(e.target.matches('.fa-pen-to-square')){
        let changeTodo = e.target.closest('li')
        changeTodo.classList.add('edit')
        e.target.closest('button').classList.add('edit')
        e.target.closest('button').innerHTML = '<i class="fa-solid fa-floppy-disk"></i>'
        editInput.style.display = 'block'
        
        changeTodo.append(editInput)
        editInput.classList.add('editInput')
        editInput.value = changeTodo.firstChild.textContent
        

        
    }else if(e.target.matches('.fa-floppy-disk')){
                
                // e.target.closest('button').style.display = 'none'
                // changeTodo.firstChild.textContent = editInput.value
                let changeTodo = e.target.closest('li')
                changeTodo.classList.remove('edit')
              
                e.target.closest('button').classList.remove('edit')
                e.target.closest('button').innerHTML = '<i class="fa-solid fa-pen-to-square"></i>'
                
                changeTodo.firstChild.textContent = editInput.value
                editInput.style.display = 'none'
                // let editInput = e.target.closest('input')
                // editInput.style.display = 'none'
                // editInput.value = changeTodo.firstChild.textContent

    }else if(e.target.matches('.fa-xmark')){
       e.target.closest('li').remove() 
       
    //    const allTask = document.querySelectorAll('li')
    if(allTask.length === 0){
    error.style.display = 'block'
    error.textContent = 'No tasks on the list'

    }
    }
    } 











//listeners

plus.addEventListener('click', inputCheck);
todoUl.addEventListener('click', checkTools);
inputMain.addEventListener('keyup', checkEnter);