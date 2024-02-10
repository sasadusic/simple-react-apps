import React, { useState } from 'react'

export default function Quiz() {

  const [state , setState] = useState({
    num1: 1,
    num2: 2,
    response: '',
    score: 0,
    incorrect: false
  })
  
  const updateResponse = (e) => {
    setState({
      ...state,
      response: e.target.value
    })
  }
  
  const inputKeyPress = (e) => {
    if(e.key === 'Enter'){
      const answer = parseInt(state.response)
      if(state.num1 + state.num2 === answer){
        setState({
          ...state,
          num1: Math.ceil(Math.random() * 5),
          num2: Math.ceil(Math.random() * 5),
          response: '',
          score: state.score + 1,
          incorrect: false
        })
      }else{
        setState({
          ...state,
          response: '',
          score: state.score - 1,
          incorrect: true
        })
      }
    }
  }

  function resetGame(){
    setState({
      ...state,
      score: 0
    })
  }

  if(state.score === 5){
    return(
      <section>
        <div className="card">
  
      <h2>Quiz App</h2>
      <h2 className='success'>You Won</h2>
      <button onClick={resetGame} className="btn">Reset Game</button>
        </div>
    </section>
      )
  }
  else{
  
    
    return (
      <section>
        <div className="card">
  
      <h2>Quiz App</h2>
      <div className={state.incorrect ? 'incorrect question' : 'question'}>{state.num1} + {state.num2}</div>
      <input onKeyPress={inputKeyPress} onChange={updateResponse} type="text" value={state.response} />
      <div className="score">Score: {state.score}</div>
        </div>
    </section>
  )
  }
}


