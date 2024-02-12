import React, { useReducer } from 'react'
import CalcBTN from './CalcBTN'
import CalcOperationBTN from './CalcOperationBTN'

export const ACTIONS = {
  ADD_DIGIT: "add-digit",
  CHOOSE_OPERATION: "choose-operation",
  CLEAR: "clear",
  DELETE_DIGIT: "delete-digit",
  EVALUATE: "evaluate",
}

function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      if (state.overwrite) {
        return {
          ...state,
          currentOperand: payload.digit,
          overwrite: false,
        }
      }
      if (payload.digit === "0" && state.currentOperand === "0") {
        return state
      }
      if (payload.digit === "." && state.currentOperand.includes(".")) {
        return state
      }

      return {
        ...state,
        currentOperand: `${state.currentOperand || ""}${payload.digit}`,
      }
    case ACTIONS.CHOOSE_OPERATION:
      if (state.currentOperand == null && state.previousOperand == null) {
        return state
      }

      if (state.currentOperand == null) {
        return {
          ...state,
          operation: payload.operation,
        }
      }

      if (state.previousOperand == null) {
        return {
          ...state,
          operation: payload.operation,
          previousOperand: state.currentOperand,
          currentOperand: null,
        }
      }

      return {
        ...state,
        previousOperand: evaluate(state),
        operation: payload.operation,
        currentOperand: null,
      }
    case ACTIONS.CLEAR:
      return {}
    case ACTIONS.DELETE_DIGIT:
      if (state.overwrite) {
        return {
          ...state,
          overwrite: false,
          currentOperand: null,
        }
      }
      if (state.currentOperand == null) return state
      if (state.currentOperand.length === 1) {
        return { ...state, currentOperand: null }
      }

      return {
        ...state,
        currentOperand: state.currentOperand.slice(0, -1),
      }
    case ACTIONS.EVALUATE:
      if (
        state.operation == null ||
        state.currentOperand == null ||
        state.previousOperand == null
      ) {
        return state
      }

      return {
        ...state,
        overwrite: true,
        previousOperand: null,
        operation: null,
        currentOperand: evaluate(state),
      }
  }
}

function evaluate({ currentOperand, previousOperand, operation }) {
  const prev = parseFloat(previousOperand)
  const current = parseFloat(currentOperand)
  if (isNaN(prev) || isNaN(current)) return ""
  let computation = ""
  switch (operation) {
    case "+":
      computation = prev + current
      break
    case "-":
      computation = prev - current
      break
    case "*":
      computation = prev * current
      break
    case "÷":
      computation = prev / current
      break
  }

  return computation.toString()
}

const INTEGER_FORMATTER = new Intl.NumberFormat("en-us", {
  maximumFractionDigits: 0,
})
function formatOperand(operand) {
  if (operand == null) return
  const [integer, decimal] = operand.split(".")
  if (decimal == null) return INTEGER_FORMATTER.format(integer)
  return `${INTEGER_FORMATTER.format(integer)}.${decimal}`
}

const Calculator = () => {

  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    reducer,
    {}
  )

  return (
    <section>
      <div className="card">
        <h2>Calculator</h2>
        <div className="card-body">
            <div className="calc-grid color">
                <div className="output">
                    <div className="prev-operand"> {formatOperand(previousOperand)} {operation}</div>
                    <div className="cur-operand">{formatOperand(currentOperand)}</div>
                </div>
                <button className=" calc-btn span-two" onClick={() => dispatch({ type: ACTIONS.CLEAR })}>AC</button>
                <button className='calc-btn' onClick={() => dispatch({ type: ACTIONS.DELETE_DIGIT })}>DEL</button>
                <CalcOperationBTN operation="/" dispatch={dispatch} />
                <CalcBTN digit="1" dispatch={dispatch} />
                <CalcBTN digit="2" dispatch={dispatch} />
                <CalcBTN digit="3" dispatch={dispatch} />
                <CalcOperationBTN operation="*" dispatch={dispatch} />
                <CalcBTN digit="4" dispatch={dispatch} />
                <CalcBTN digit="5" dispatch={dispatch} />
                <CalcBTN digit="6" dispatch={dispatch} />
                <CalcOperationBTN operation="+" dispatch={dispatch} />
                <CalcBTN digit="7" dispatch={dispatch} />
                <CalcBTN digit="8" dispatch={dispatch} />
                <CalcBTN digit="9" dispatch={dispatch} />
                <CalcOperationBTN operation="-" dispatch={dispatch} />
                <CalcBTN digit="." dispatch={dispatch} />
                <CalcBTN digit="0" dispatch={dispatch} />
                <button className="calc-btn span-two" onClick={() => dispatch({ type: ACTIONS.EVALUATE })}>=</button>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Calculator
