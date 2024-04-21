import React from 'react'
import './assets/css/style.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Lists from './components/Lists.jsx'
import Todo from './components/Todo.jsx'


export default function App() {
    const data = [
        { id: 1, name: "Eat", completed: false },
        { id: 2, name: "Sleep", completed: false },
        { id: 3, name: "Repeat", completed: false },
    ]

    return (
        <div id="todo" className="todo w-100 d-flex justify-content-center pt-5">
            <form className="todo-container d-flex flex-column justify-content-center  rounded bg-white p-2">
                <h1 className='text-center py-2 fs-4'>Todo</h1>
                <Todo />
                {
                    data.map((task, index) => {
                        return <Lists name={task.name} id={task.id} key={index} completed={task.completed} />
                    })
                }
            </form>
        </div>
    )
}