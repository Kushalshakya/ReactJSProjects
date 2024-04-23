import React from 'react'
import './assets/css/style.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Todo from './components/Todo.jsx'

export default function App() {
    return (
        <div id="todo" className="todo w-100 d-flex justify-content-center pt-5 pb-3">
            <div className="todo-container d-flex flex-column justify-content-center  rounded bg-white p-2">
                <h1 className='text-center py-2 fs-4'>Todo</h1>
                <Todo />
            </div>
        </div>
    )
}