import React from 'react'
import { ACTIONS } from './Calculator'

const CalcOperationBTN = ({ dispatch, operation }) => {
  return (
    <button onClick={() => dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })} className='calc-btn'>{operation}</button>
  )
}

export default CalcOperationBTN
