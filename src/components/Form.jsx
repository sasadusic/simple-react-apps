import React, { useState } from 'react'

const Form = () => {

    const [state, setState] = useState({
        firstName: '',
        lastName: '',
        country: '',
        title: '',
        data: {
            firstName: '',
            lastName: '',
            country: '',
            title: '',
        }
    })

    const handleChange = (e) => {
        const { name, value } = e.target

        setState({ ...state, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault(e)

        setState({
            data: {
                firstName: state.firstName, 
                lastName: state.lastName,  
                country: state.country,
                title: state.title
            },
            firstName: '',
            lastName: '',
            country: '',
            title: '',
        })

        console.log(state)
    }
    
    const deleteData = () => {
        setState({
            ...state,
            data: {
                firstName: '',
                lastName: '',
                country: '',
                title: ''
            }
        })
    }

  return (
    <section>
        <div className="card forms">
            <h2>Form</h2>
            <div className="card-body">
                
            <form action="" onSubmit={handleSubmit}>
                {/* input */}
                <label htmlFor="firstName">First Name: </label>
                <input type="text" id="firstName" name="firstName" value={state.firstName} 
                onChange={handleChange}
                />
                {/* input */}
                {/* input */}
                <label htmlFor="lastName">Last Name: </label>
                <input type="text" id="lastName" name="lastName" value={state.lastName} 
                onChange={handleChange}
                />
                {/* input */}
                {/* input */}
                <label htmlFor="country">Country: </label>
                <input type="text" id="country" name="country" value={state.country} 
                onChange={handleChange}
                />
                {/* input */}
                {/* input */}
                <label htmlFor="title">Title: </label>
                <input type="text" id="title" name="title" value={state.title} 
                onChange={handleChange}
                />
                {/* input */}
                <button className="btn mt-12">Submit form</button>
            </form>
            <div className="card-right">
                <h2>Submited Data</h2>
                <p className='data'><span className="data-span">First Name:</span> {state.data.firstName}</p>
                <p className='data'><span className="data-span">Last Name:</span> {state.data.lastName}</p>
                <p className='data'><span className="data-span">Country:</span> {state.data.country}</p>
                <p className='data'><span className="data-span">Title:</span> {state.data.title}</p>
                <button className="btn mt-12" onClick={deleteData}>Delete Data</button>
            </div>
                </div>
        </div>
      
    </section>
  )
}

export default Form
