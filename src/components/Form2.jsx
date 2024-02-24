import React, { useState } from 'react'

const options = [
  {
    value: '',
    label: 'Select Country',
  },
  {
    value: 'Finland',
    label: 'Finland',
  },
  {
    value: 'Sweden',
    label: 'Sweden',
  },
  {
    value: 'Norway',
    label: 'Norway',
  },
  {
    value: 'Denmark',
    label: 'Denmark',
  },
]

const selectOptions = options.map(({value, label}) => (
  <option value={value} key={label}>{label}</option>
))

const Form2 = () => {

  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    country: '',
    tel: '',
    dateOfBirth: '',
    favoriteColor: '#ffffff',
    weight: '',
    gender: '',
    file: '',
    bio: '',
    skills: {
      html: false,
      css: false,
      javascript: false,
    },
    data: {
      firstName: '',
    lastName: '',
    email: '',
    country: '',
    tel: '',
    dateOfBirth: '',
    favoriteColor: '',
    weight: '',
    gender: '',
    file: '',
    bio: '',
    skills: []
    }
  })

  let data

  const handleChange = (e) => {
    const {name, type, value, checked} = e.target
    const val = type === 'file' ? e.target.files[0] : value
    if(type === 'checkbox'){
        setState({
          ...state,
          skills: {
            ...state.skills,
            [name]: checked
          }
        })
    }else{ 
      setState({
        ...state, 
        [name]: val})
      // console.log('Value', val);
      // console.log('state', state.favoriteColor);
      }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(state)
    const {
      firstName,
      lastName,
      email,
      tel,
      dateOfBirth,
      favoriteColor,
      weight,
      country,
      gender,
      bio,
      file,
      skills,
    } = state

    const formattedSkills = []
    for (const key in skills){
      // console.log(key)
      if (skills[key]){
        formattedSkills.push(key)
    }
  }

  
  setState({
    ...state,
    data: {
      firstName: state.firstName,
    lastName: state.lastName,
    email: state.email,
    country: state.country,
    tel: state.tel,
    dateOfBirth: state.dateOfBirth,
    favoriteColor: state.favoriteColor,
    weight: state.weight,
    gender: state.gender,
    file: state.file ? file : null,
    bio: state.bio,
    skills: formattedSkills
  },
  firstName: '',
  lastName: '',
  email: '',
  country: '',
  tel: '',
  dateOfBirth: '',
  favoriteColor: '#ffffff',
  weight: '',
  gender: '',
  file: '',
  bio: '',
  skills: {
    html: false,
    css: false,
    javascript: false,
  },
})

data = {
  firstName,
  lastName,
  email,
  tel,
  dateOfBirth,
  favoriteColor,
  weight,
  country,
    gender,
    bio,
    file,
    skills: formattedSkills,
  }
  // console.log(data)
}

const clearData = () => {
  setState({
    ...state,
    data: {
      firstName: '',
    lastName: '',
    email: '',
    country: '',
    tel: '',
    dateOfBirth: '',
    favoriteColor: '',
    weight: '',
    gender: '',
    file: '',
    bio: '',
    skills: []
    }
  })
}

return (

  <section>
      <div className="card forms-2">
        <h2>Forms 2</h2>
        <div className="card-body">
    <div className="card-left">

        <form onSubmit={handleSubmit} action="">
          {/* Input */}
          <label htmlFor='firstName'>First Name: </label>
          <input 
          id='firstName' 
          type='text' 
          name='firstName' 
          value={state.firstName} 
          onChange={handleChange} 
          placeholder='First Name'
          />
          {/* Input */}
          <label htmlFor="lastName">Last Name: </label>
          <input 
          id='lastName' 
          type="text"
          name="lastName"
          value={state.lastName}
          onChange={handleChange}
          placeholder='Last Name'
          />
          {/* Input */}
          <label htmlFor='email'>Email </label>
              <input
                id='email'
                type='email'
                name='email'
                value={state.email}
                onChange={handleChange}
                placeholder='Email'
                />
                {/* Input */}
                <label htmlFor='tel'>Telephone </label>
            <input
              id='tel'
              type='tel'
              name='tel'
              value={state.tel}
              onChange={handleChange}
              placeholder='Tel'
            />
                {/* Input */}
                <label htmlFor='dateOfBirth'>Date of birth </label>
            <input
              type='date'
              name='dateOfBirth'
              value={state.dateOfBirth}
              onChange={handleChange}
              placeholder='Date of Birth'
              />
                {/* Input */}
                <label htmlFor='favoriteColor'>Favorite Color</label>
            <input
              type='color'
              id='color'
              name='favoriteColor'
              value={state.favoriteColor}
              onChange={handleChange}
              placeholder='Favorite Color'
            />
                {/* Input */}
                <label htmlFor='weight'>Weight </label>
            <input
              type='number'
              id='weight'
              name='weight'
              value={state.weight}
              onChange={handleChange}
              placeholder='Weight in Kg'
              min='1'
              max='200'
              step='1'
              />
                {/* Input */}
                <label htmlFor='country'>Country</label>
            <select name='country' onChange={handleChange} id='country'>
              {selectOptions}
            </select>
                {/* Input */}
                <label>Gender</label>
                <input
                type='radio'
                id='female'
                name='gender'
                value='Female'
                onChange={handleChange}
                checked={state.gender === 'Female'}
              />
              <label className="inline" htmlFor='female'>Female</label>
              <input
                id='male'
                type='radio'
                name='gender'
                value='Male'
                onChange={handleChange}
                checked={state.gender === 'Male'}
                />
              <label className="inline" htmlFor='male'>Male</label>
              <input
                id='other'
                type='radio'
                name='gender'
                value='Other'
                onChange={handleChange}
                checked={state.gender === 'Other'}
                />
              <label className='inline' htmlFor='other'>Other</label>
                {/* Input */}
                <label>Select your skills</label>
                <input
                type='checkbox'
                id='html'
                name='html'
                onChange={handleChange}
              />
              <label className="inline" htmlFor='html'>HTML</label>
              <input
                type='checkbox'
                id='css'
                name='css'
                onChange={handleChange}
                />
              <label className="inline" htmlFor='css'>CSS</label>
              <input
                type='checkbox'
                id='javascript'
                name='javascript'
                onChange={handleChange}
                />
              <label className="inline" htmlFor='javascript'>JavaScript</label>
                {/* Input */}
                <label htmlFor='bio'>Bio</label> <br />
            <textarea
              id='bio'
              name='bio'
              value={state.bio}
              onChange={handleChange}
              cols='120'
              rows='10'
              placeholder='Write about yourself ...'
              />
                {/* Input */}
                <input type='file' name='file' onChange={handleChange} />
                {/* Input */}
                <button type='submit' className="btn mt-24">Submit Data</button>
        </form>
          </div>
        <div className="card-right">
          <h2>Submited Data</h2>
          <p className='data'><span className="data-span">First Name:</span> {state.data.firstName}</p>
                <p className='data'><span className="data-span">Last Name:</span> {state.data.lastName}</p>
                <p className='data'><span className="data-span">Email:</span> {state.data.email}</p>
                <p className='data'><span className="data-span">Phone:</span> {state.data.tel}</p>
                <p className='data'><span className="data-span">Birth:</span> {state.data.dateOfBirth}</p>
                <p className='data'><span className="data-span">Color:</span> {state.data.favoriteColor}</p>
                <p className='data'><span className="data-span">Weight:</span> {state.data.weight} kg</p>
                <p className='data'><span className="data-span">Country:</span> {state.data.country}</p>
                <p className='data'><span className="data-span">Gender:</span> {state.data.gender}</p>
                <p className='data'><span className="data-span">Skills:</span>{state.data.skills.join(', ')}</p>
                <p className='data'><span className="data-span">Bio:</span>{state.data.bio}</p>
                <p className='data'><span className="data-span">CV:</span>{state.data.file.name}</p>
                <button className="btn mt-24" onClick={clearData}>Clear Data</button>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Form2
