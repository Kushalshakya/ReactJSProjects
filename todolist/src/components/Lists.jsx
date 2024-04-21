import React from 'react'

export default function Lists(props) {
    return (
        <>
            <ul className="todo-lists form-check">
                <li className='py-2'>
                    <input type="checkbox" id={props.id} className="mx-2 form-check-input mt-2" defaultChecked={props.completed} />
                    <label htmlFor={props.id} className='form-check-label fs-5'>{props.name}</label>
                </li>
            </ul>
        </>
    )
}
