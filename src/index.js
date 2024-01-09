document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('form').addEventListener('submit', (e)=>{
    e.preventDefault()
    buildToDo(e.target.new_task_description.value)
  })
});


function buildToDo(toDo){
  let p = document.createElement('p')
  let btn = document.createElement('button')
  let priority = document.createElement('select',)
  btn.addEventListener('click', handleDel)
  btn.textContent = 'x '
  p.textContent = `${toDo} ` 
  p.appendChild(btn)
  p.appendChild(priority)
  document.querySelector('#list').appendChild(p)
}

function handleDel(e){
  e.target.parentNode.remove()
}