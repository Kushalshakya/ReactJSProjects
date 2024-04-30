import React from 'react'

export default function Lists({ todos }) {
    return (
        <ul className="todo-lists form-check" style={{ minHeight: '200px' }}>
            {todos.map((todo, index) => (
                <li className='py-2 text-break d-flex gap-2' key={index}>
                    <input type="checkbox" id={index} className="mx-2 form-check-input mt-2" />
                    <label htmlFor={index} className='form-check-label fs-5'>{todo}</label>
                </li>
            ))}
        </ul>
    )
}