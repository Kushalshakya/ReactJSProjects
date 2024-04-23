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
            <div className="options d-flex justify-content-center gap-3 py-4 flex-wrap">
                <Button variant={currentColorVarient} onClick={handleColorVarient}>All</Button >
                <Button variant='outlined'>Completed</Button >
                <Button variant='outlined'>Incompleted</Button >
            </div>
            <Lists todos={todos} />
        </>
    )
}