import React, { useState } from 'react'

const Events = () => {

    const  [state, setState] = useState({
        firstName: '',
        message: '',
        key: '',
        mouseX: 0,
        mouseY: 0
    });

    const handleClick = (e) => {
        setState({
            ...state,
            message: 'You clicked'
        })
    }

    const mouseLocation = (e) => {
        setState({
            ...state,
            mouseX: e.clientX,
            mouseY: e.clientY,
            message:  `Mouse is moving at (${e.clientX}, ${e.clientY})`
        })
    }

    const handleMouseMove = (e) => {
        setState({
            ...state,
            message: 'mouse is moving'
        })
    }
    const handleChange = (e) => {
        setState({
            ...state,
            message: e.target.value,
        })
    }

    const handleKeyPress = (e) => {
        setState({
            ...state,
            message: `${e.key} has been pressed and the keycode is ` + e.charCode
        })
    }

    const handleInput = (e) => {
        const name = e.target.value
        setState({
            ...state,
            firstName: name
    })
}

    const handleFocus = (e) => {
        setState({
            ...state,
            message: 'input field has in focus.'
        })
    }
    const handleBlur = (e) => {
        setState({
            ...state,
            message: 'input field has been blured'
        })
    }

    const handleCopy = (e) => {
        setState({
            ...state,
            message: 'copying is not allowed'
        })
    }

    const handleSubmit = (e) => {
        setState({
            ...state,
            firstName: state.message, // this will be sent to server instead of firstname
            message: '' 
        })
        e.preventDefault();
    }

  return (
    <section>
      <div className="card">
        <h2>Events</h2>
        <h4 className='mb-24'>Message: {state.message}</h4>
        <h4 className='mb-24'>First Name: {state.firstName}</h4>
        <button onClick={handleClick} className="btn mb-12">Click Me</button>
        <button onMouseMove={handleMouseMove} className="btn mb-12">Move mouse on me</button>
        <label htmlFor="name" >Name: </label>
        <input onInput={handleInput} type="text" name="name" /><br />
        <label htmlFor="code" >Key code: </label>
        <input onKeyPress={handleKeyPress} type="text" name="code" /><br />
        <label htmlFor="blur" >Blur: </label>
        <input onFocus={handleFocus} onBlur={handleBlur} type="text" name="blur" />
        <form className='mt-24' action="" onSubmit={handleSubmit}>
            <h4>Form</h4>
        <label htmlFor="first" >First name: </label>
        <input onChange={handleChange} type="text" name="first" />
        <button type="submit" className="btn">Submit</button>
        </form>
        <p className='mt-12' onCopy={handleCopy}>Copyright</p>
      </div>
      <div className="card col" onMouseMove={mouseLocation}>
        <h2>Mouse Location</h2>
            <p>Message: {state.message}</p>
          <p>x: {state.mouseX}px, y: {state.mouseY}px</p>
      </div>
    </section>
  )
}

export default Events
