import React from 'react'
import Button from '@mui/material/Button';

export default function Form({ addTasks }) {
    function handleForm(e) {
        e.preventDefault();
        console.log("Prevent Default");
    }
    return (
        <>
            <form className="todo-input d-flex gap-2" onSubmit={handleForm}>
                <input type="text" className="form-control" id="input" autoComplete='off' spellCheck='false' value={addTasks} />
                <Button variant="contained" className='btn' type='submit'>Add</Button>
            </form>
        </>
    )
}
