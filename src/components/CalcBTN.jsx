import React from 'react'
import { ACTIONS } from './Calculator'

const CalcBTN = ({ dispatch, digit }) => {
  return (
    <button onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })} className='calc-btn'>{digit}</button>
  )
}

export default CalcBTN
