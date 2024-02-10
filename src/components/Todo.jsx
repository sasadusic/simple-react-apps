import React, { useState } from 'react'

export default function Todo () {

    const [state, setState] = useState({
        tasks: [],
        input: ''
    })

    const updateInput = (e) => {
        setState({
            ...state,
            input: e.target.value
        })
    }

    const addNewTask = () => {
        setState({
            ...state,
            tasks:  [...state.tasks, state.input],
            input: ""
        })
    }

    const deleteTask = (index)  => {
        setState({
            ...state,
            tasks: state.tasks.filter((task, i) => index !== i)
        })
    }

  return (
    <section>
        <div className="card">
            <h2>Todo App</h2>
            <p className="task-num">Tasks left: {state.tasks.length}</p>
            <input onChange={updateInput} value={state.input} type="text" />
            <button className='btn' onClick={addNewTask}>Add Task</button>
            <div className="task-cont">
                {state.tasks.map((task, i) => <div key={i} className='task'><p>{task}</p> <button onClick={() => deleteTask(i)} className='delete'>x</button></div>)}
            </div>
        </div>
    </section>
  )
}
