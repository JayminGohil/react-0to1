import './App.css'
import Die from './components/Die'
import { useState,useEffect,useRef } from 'react'
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti'

export default function App(){
  const [diceArr,setDiceArr] = useState(() => generateNewDice())

  let gameWon = false

  const newGameBtn = useRef(null)

  if(
    diceArr.every(dice=>dice.isHeld) &&
    diceArr.every(dice=>dice.value===diceArr[0].value)
  ){
    gameWon = true
  }

  useEffect(()=>{
    if(gameWon){
      newGameBtn.current.focus()
    }
  },[gameWon])

  function generateNewDice(){
    return new Array(10)
      .fill(0)
      .map(item=>{
        return {
          id:nanoid(),
          value:Math.ceil(Math.random()*6),
          isHeld:false,
        }
      })
  }

  function handleClick(id){
    setDiceArr(prevDiceArr=>{
      return prevDiceArr.map(die=>{
        return die.id===id ? {...die,isHeld:!die.isHeld} : die
      })
    })
  }

  function rollDice(){
    if(!gameWon){
      setDiceArr(prevDiceArr=>{
      return prevDiceArr.map(die=>{
        return die.isHeld ? die : {...die,value:Math.ceil(Math.random()*6)}
      })
    })
    }else{
      setDiceArr(generateNewDice())
    }
  }

  const diceElements = diceArr.map(die=>{
    return <Die number={die.value} id={die.id} key={die.id} isHeld={die.isHeld} handleClick={handleClick}/>
  })

  return(
    <main className='tenzies-main'>
      {gameWon && <Confetti/>}
      <h1 className="title">Tenzies</h1>
      <p className="instructions">
        {
          gameWon ? "Yay! You Won🥳"
          : "Roll until all dice are the same. Click each die to freeze it at its current value between rolls."
        }
      </p>
      <div className="dice-container">
        {diceElements}
      </div>
      <button id="rollBtn" onClick={rollDice} ref={newGameBtn}> 
        {gameWon ? "New Game" : "Roll"}
      </button>
    </main>
  )
}