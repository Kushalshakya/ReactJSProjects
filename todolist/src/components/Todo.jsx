import React, { useState } from 'react'
import Button from '@mui/material/Button';
import Form from './Form';
import Lists from './Lists.jsx';
    
export default function Todo() {
    const [currentColorVarient, setColorVarient] = useState('contained');

    const handleColorVarient = () => {
        if (currentColorVarient === 'outlined') {
            setColorVarient('contained')
        } else {
            setColorVarient('outlined')
        }
    }

    const [todos, setTodos] = useState([]);

    const addTasks = (todo) => {
        setTodos([...todos, todo]);
    }


    return (
        <>
            <Form addTasks={addTasks} />
            { todos.length == 0 ?
                (
                    <div className='ps-3 py-4' style={{ minHeight: '200px' }}>No Todos Yet!!</div>
                ) : (
                    <Lists todos={todos} /> 
                )
                
            }
            <div className="options d-flex justify-content-end gap-2 pt-4 py-2 flex-wrap">
                
                <Button variant={currentColorVarient} onClick={handleColorVarient}>All</Button >
                <Button variant='outlined'>Completed</Button >
                <Button variant='outlined'>Incompleted</Button >
            </div>
        </>
    )
}