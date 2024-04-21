import React, { useState } from 'react'
import Button from '@mui/material/Button';


export default function Todo() {
    const [currentColorVarient, setColorVarient] = useState('contained');

    const handleColorVarient = () => {
        if (currentColorVarient === 'outlined') {
            setColorVarient('contained')
        } else {
            setColorVarient('outlined')
        }
    }
    return (
        <>
            <div className="todo-input d-flex gap-2">
                <input type="text" className="form-control" id="input" />
                <Button variant="contained" className='btn'>Add</Button>
            </div>
            <div className="options d-flex justify-content-center gap-3 py-4 flex-wrap">
                <Button variant={currentColorVarient} onClick={handleColorVarient}>All</Button >
                <Button variant='outlined'>Completed</Button >
                <Button variant='outlined'>Incompleted</Button >
            </div>
        </>
    )
}
