const input=document.getElementById("taskInput")
const add=document.getElementById("addTaskBtn")
const del=document.getElementById("deleteTaskBtn")
const output=document.getElementById("taskList")

let todo=[]

add.addEventListener('click',()=>{
    todo.push(input.value)
    addtodo(input.value)
})

function addtodo(item){
    let list=document.createElement('li')
    list.innerText=item 
    output.appendChild(list)

    del.addEventListener('click',()=>{
        output.removeChild(list)
        removetodo(item)
        
    })

    list.addEventListener('click',()=>{
        output.removeChild(list)
        removetodo(item)
        
    })

}


function removetodo(item){
    let index=todo.indexOf(item)
    if(index>-1){
        todo.splice(index,1)
    }
    
}