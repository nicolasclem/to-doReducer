import React, { useState } from 'react'

const TodoForm = ({ handleAddTodo}) => {

    const [formValue,setformValue]= useState('')


const handleChangeInput = (e)=>{

    setformValue(e.target.value);
}

const reset=()=>{
    setformValue('')
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

    
    
    handleAddTodo(newTodo)
    reset()
} 

  return (
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
  )
}

export default TodoForm