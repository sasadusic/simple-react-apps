import React, { useState } from 'react'

export default function Main2() {

    const [state, setState] = useState({
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

    const submitAnswer = (e) => {
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

    if(state.score === 5){
        return (
        <main>
            <h1 className='success'>You Win!</h1>;
        </main>
        )
    }else{

        return (
            <main>
        <h1>Quiz App</h1>
        <div className={state.incorrect ? "question incorrect" : 'question'}>{state.num1} + {state.num2}</div>
        <input  onChange={updateResponse} onKeyUp={submitAnswer} value={state.response} type="text" autoFocus />
        <div className="score">Score: {state.score}</div>
    </main>
  )
    }
}
