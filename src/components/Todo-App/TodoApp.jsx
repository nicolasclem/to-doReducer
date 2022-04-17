import React, { useEffect, useReducer, useState } from 'react'
import { todoReducer } from './todoReducer'

import './todo-App.css'
import TodoList from './TodoList/TodoList';



const init = ()=>{
    return JSON.parse(localStorage.getItem('todos'))||[];
    
}

const TodoApp = () => {

const [todos,dispatch] = useReducer(todoReducer,[],init)
const [formValue,setformValue]= useState('')


const handleChangeInput = (e)=>{

    setformValue(e.target.value);
}

const reset=()=>{
    setformValue('')
}


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

const handleSubmit=(e)=>{
    e.preventDefault()

    if (formValue.trim().length < 1){
        return;
    }
        const newTodo ={
        id: new Date().getTime(),
        desc:formValue,
        done:false
    }

    const action ={
        type:'add',
        payload: newTodo
    }
    
    dispatch(action)
    reset()
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
            <form className='text-center' onSubmit={handleSubmit}>
                <input
                type='text'
                name='description'
                className='form-control w-75 mx-auto'
                placeholder='Aprender...'
                autoComplete='off' 
                value={formValue}                
                onChange={handleChangeInput}
                />

                <button  type='submit' className='btn btn-outline-primary my-1 w-75'>
                    Agregar
                </button>
            </form>
            </div>

        </div>
        
        
    </div>
  )
}

export default TodoApp