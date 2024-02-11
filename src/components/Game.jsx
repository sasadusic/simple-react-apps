import React, { useState } from 'react'

const Square = ({onSquareClick, value}) => {
    return <button onClick={onSquareClick} className='square'>{value}</button>
}

const Board = ({ xIsNext, squares, onPlay, resetGame }) => {

    const handleClick = (i) => {
        if(squares[i] || calculateWinner(squares)){return}

        const nextSquares = squares.slice()
        nextSquares[i] = xIsNext ? 'X' : 'O'
        onPlay(nextSquares)
    }
    
    
    let  winner = calculateWinner(squares)
    let status
    status = winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? 'X' : 'O'}`
    
    
    return (
        <div className="card-left">
        <div className="board">
                    <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
                    <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
                    <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
                    <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
                    <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
                    <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
                    <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
                    <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
                    <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
                </div>
                <div className="status-cont">
                    <div className="status">{status}</div>
                    <button onClick={resetGame} className="reset">Reset Game</button>
                </div>
        </div>
  )
}

const Game = () => {
    
    const [history, setHistory] = useState([Array(9).fill(null)])
    const [currentMove, setCurrentMove] = useState(0)
    const xIsNext = currentMove % 2 === 0
    const currentSquares = history[currentMove]
    
    function handlePlay(nextSquares) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]
        setHistory(nextHistory)
        setCurrentMove(nextHistory.length - 1)
    }

    function jumpTo(nextMove){
        setCurrentMove(nextMove)
    }

    const moves = history.map((squares, move) => {
        let description
        description = (move > 0) ? `Go to move: ${move}` : 'Go to game start'

        return(
            <div key={move} className="move-cont">
                <button onClick={() => jumpTo(move)} className="move">{description}</button>
            </div>
        )
    })

    const resetGame = () => {
        setHistory([Array(9).fill(null)])
        setCurrentMove(0)
    }
    
    return(
        <section>
        <div className="card color">
      <h2>Tic Tac</h2>
            <div className="card-body">
                <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} resetGame={resetGame} />
            
                <div className="history">{moves}</div>
            </div>
        </div>
    </section>
    )
}

const calculateWinner = (squares) => {

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
    for(let i = 0; i < lines.length; i++){
        const [a, b, c] = lines[i]
        if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
            return squares[a]
        }
    }
    return null
}

export default Game
