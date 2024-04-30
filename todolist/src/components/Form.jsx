import React, { useState } from 'react'
import Button from '@mui/material/Button';

export default function Form({ addTasks }) {

    const [todo, setTodo] = useState('');

    const handleForm = (e) => {
        e.preventDefault();
        if (!todo.trim()) return;
        addTasks(todo);
        setTodo('');
    }
    return (
        <>
            <form className="todo-input d-flex gap-2 pb-2" onSubmit={handleForm}>
                <input type="text"
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                    className="form-control"
                    placeholder='Add new todo'
                    autoComplete='off'
                    spellCheck='false'
                    autoFocus
                />
                <Button variant="contained" className='btn' type='submit'>Add</Button>
            </form>
        </>
    )
}