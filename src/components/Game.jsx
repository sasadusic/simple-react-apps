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
    
    const [xIsNext, setXIsNext] = useState(true)
    const [history, setHistory] = useState([Array(9).fill(null)])
    const currentSquares = history[history.length - 1]
    
    function handlePlay(nextSquares) {
        setHistory([...history, nextSquares])
        setXIsNext(!xIsNext)
    }
    const resetGame = () => {
        setHistory([Array(9).fill(null)]);
        setXIsNext(true);
    }
    
    return(
        <section>
        <div className="card color">
      <h2>Tic Tac</h2>
            <div className="card-body">
                <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} resetGame={resetGame} />
            
                <div className="history"></div>
            </div>
        </div>
    </section>
    )
}

const calculateWinner = (squares) => {
    if(!squares){
        return null
    }

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
