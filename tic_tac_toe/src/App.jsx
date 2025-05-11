import './App.css'
import Header from './components/Header'
import { useState } from 'react'
import clsx from 'clsx'
import Confetti from 'react-confetti'

export default function App(){

  const [p1PlayedIndex,setP1PlayedIndex] = useState(()=>[])
  const [p2PlayedIndex,setP2PlayedIndex] = useState(()=>[])
  const totalAttempts = p1PlayedIndex.length + p2PlayedIndex.length

  console.log(p1PlayedIndex)
  console.log(p2PlayedIndex)
  console.log(totalAttempts)

  const winningCombosArr = [
    [0, 1, 2], 
    [3, 4, 5], 
    [6, 7, 8], 
    [0, 3, 6], 
    [1, 4, 7], 
    [2, 5, 8], 
    [0, 4, 8], 
    [2, 4, 6]
  ]

  let winner = null;

  if (
    winningCombosArr.some(combo => combo.every(index => p1PlayedIndex.includes(index)))
  ) {
    winner = 1;
  } else if (
    winningCombosArr.some(combo => combo.every(index => p2PlayedIndex.includes(index)))
  ) {
    winner = 2;
  }

  const winningCombo = winningCombosArr.find(combo =>
    combo.every(index => winner===1 ? p1PlayedIndex.includes(index) : p2PlayedIndex.includes(index))
  );



  function getcurrentTurn(){
    if (!totalAttempts){
      return 1
    }
    if(totalAttempts===1){
      return 2
    }else{
      return totalAttempts%2==0 ? 1 : 2
    }
  }
  const currentTurn = getcurrentTurn()

  

  function registerPlay(index){
    currentTurn===1 ? setP1PlayedIndex(prev=>[...prev,index]) : setP2PlayedIndex(prev=>[...prev,index])
  }

  function resetGame(){
    setP1PlayedIndex([])
    setP2PlayedIndex([])
  }

  return (
    

    <main>
      { winner && <Confetti recycle={false} numberOfPieces={500}/>}
      <Header />

      <section className="turn-container">
        { !winner && totalAttempts<9 && <span>Player {currentTurn}'s Turn!</span> }
        { winner && <span className='won'>Player {winner} Won!🎉</span>}
        { !winner && totalAttempts===9 && <span>Game Tie!⭐</span>}
      </section>

      <section className="play-grid">
        {Array.from({ length: 9 }, (_, index) => {
          const classNames = clsx(
            'grid-btn',
            p1PlayedIndex.includes(index) && "p1",
            p2PlayedIndex.includes(index) && "p2",
            winner && winningCombo.includes(index) && "combo" 
          )
          return <button 
            className={classNames}
            key={index} 
            onClick={()=>registerPlay(index)}
            disabled={p1PlayedIndex.includes(index) || p2PlayedIndex.includes(index) || winner}
          ></button>
        })}
      </section>

      { (winner || totalAttempts===9) && <button className='new-game-btn' onClick={resetGame}>New Game</button> }
    </main>
  )
}