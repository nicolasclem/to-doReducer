import React from 'react'

const TodoListItem = ({todo,i,handleDelete,handleToggle,}) => {
  return (
    <li className='list-group-item d-flex justify-content-center '>
        <p className={`${todo.done && 'complete'}`} onClick={()=>handleToggle(todo.id)}>{i+1}.{todo.desc}</p>
        <button className='btn btn-danger mx-4  p-1' onClick={()=>handleDelete(todo.id)}>Borrar</button>
    </li>
  )
}

export default TodoListItem