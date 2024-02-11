import React, { useState } from 'react'

function Square({ value, onSquareClick }) {
    
    return <button onClick={onSquareClick} className="square">{value}</button>
}

export default function TicTac() {

    const [xIsNext, setXIsNext] = useState(true)
    const [squares, setSquares] = useState(Array(9).fill(null))

    function handleClick(i) {
        if(squares[i] || calculateWinner(squares)){return}
        const nextSquares = squares.slice()
        
        nextSquares[i] = xIsNext ? 'X' : 'O'
        setSquares(nextSquares)
        setXIsNext(!xIsNext)
    }

    function calculateWinner(squares){
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]
        for(let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i]
            // console.log(a, b, c)
            if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
                return squares[a]
            }
        }
        return null
    }

    const winner = calculateWinner(squares)
    let status
    status = winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? "X" : "O"}`

    function resetGame(){
        setSquares(Array(9).fill(null))
    }

  return (
    <section>
        <div className="card color">
        <h2>TicTac</h2>
        <div className="card-body">
            <div className="board">
                <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
                <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
                <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
                <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
                <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
                <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
                <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
                <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
                <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
            </div>
            <div className="status-cont">
                <div className="status">{status}</div>
                <button onClick={resetGame} className="reset">Reset Game</button>
                </div>
        </div>
        </div>    
    </section>
  )
}