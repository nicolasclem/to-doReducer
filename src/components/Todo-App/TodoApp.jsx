import React, { useEffect, useReducer} from 'react'
import { todoReducer } from './todoReducer'

import './todo-App.css'
import TodoList from './TodoList/TodoList';
import TodoForm from './TodoForm/TodoForm';



const init = ()=>{
    return JSON.parse(localStorage.getItem('todos'))||[];
    
}


const TodoApp = () => {

const [todos,dispatch] = useReducer(todoReducer,[],init)



useEffect(()=>{

    localStorage.setItem('todos',JSON.stringify(todos))


},[todos])

const handleDelete = (todoID)=>{

    
    const action ={
        type:'delete',
        payload:todoID
    }

    dispatch(action)

}

const handleToggle = (todoID)=>{

    const action ={
        type:'toggle',
        payload:todoID
    }

    dispatch(action)
}

const handleAddTodo= (newTodo)=>{
   
   

    dispatch({
        type:'add',
        payload: newTodo
    })

}

return (
    <div >
        <h1 className='display-3 text-center'>To-doApp</h1>
        <h4 className='text-center'>to-do :({todos.length})</h4>
        <hr />

        <div className='row'>
            <div className='col-7'>
                <h4 className='display-5 text-center'>TO-DO</h4>
                <TodoList
                    todos={todos}
                    handleDelete={handleDelete}
                    handleToggle={handleToggle}
                />
            </div>
            <div className='col-5'>
            <h4 className='display-5 text-center'>Agregar</h4>
            <hr />
                <TodoForm  handleAddTodo={ handleAddTodo} />
            </div>

        </div>
        
        
    </div>
  )
}

export default TodoApp