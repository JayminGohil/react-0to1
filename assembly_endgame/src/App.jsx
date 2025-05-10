import Header from "./components/Header"
import Status from "./components/Status"
import LanguagesChip from "./components/Languages"
import {languages} from './components/lang_list'
import './App.css'
import { useState } from "react"
import clsx from 'clsx'
import {words} from './words'
import Confetti from 'react-confetti'

export default function App(){
  const [currentWord,setCurrentWord] = useState(()=>words[Math.floor(Math.random()*words.length)])
  const [guessLettersArr,setGuessLettersArr] = useState(()=>[])

  const wrongGuessCount = guessLettersArr.filter(item=> !currentWord.includes(item)).length
  
  const isGameWon = currentWord.split("").every(item=>guessLettersArr.includes(item))
  const isGameLost = wrongGuessCount===languages.length-1
  const isGameOver = isGameWon || isGameLost
  const lastGuessedLetter = guessLettersArr[guessLettersArr.length-1]
  const isLastGuessIncorrect = lastGuessedLetter && !currentWord.includes(lastGuessedLetter)  
  const latestDeadLang = wrongGuessCount ? languages[wrongGuessCount-1].name : null

  const language_chips = languages.map((lang,index)=>{
    return <LanguagesChip 
      key={index} 
      backgroundColor={lang.backgroundColor} 
      color={lang.color} 
      name={lang.name} 
      lost={index<wrongGuessCount ? true : false} />
  })

  const currentWordArr = currentWord.split("").map((letter,index)=>{
    const shouldReveal = isGameLost || guessLettersArr.includes(letter)
    const letterStyles = clsx(
      isGameLost && !guessLettersArr.includes(letter) && "missed-letter"
    )
    return <span key={index} className={letterStyles}>
      {
        shouldReveal ? letter.toLocaleUpperCase() : ""
      }
      </span>
  })
  
  const alphabet = "abcdefghijklmnopqrstuvwxyz"

  const alphabetElements = alphabet.split("").map((letter,index)=>{
    return <button 
    key={index}
    disabled={isGameOver || guessLettersArr.includes(letter)} 
    onClick={()=>addGuessLetter(letter)}
      className={
      clsx({
      correct: guessLettersArr.includes(letter) && currentWord.split("").includes(letter),
      false: guessLettersArr.includes(letter) && !currentWord.split("").includes(letter)
      })
    } >{letter.toLocaleUpperCase()}</button>
  })

  function addGuessLetter(letter){
    setGuessLettersArr(prevGuessLettersArr=>{
      const tempSet = new Set(prevGuessLettersArr)
      tempSet.add(letter)
      return Array.from(tempSet)
      // return prevGuessLettersArr.includes(letter) ? prevGuessLettersArr : [...prevGuessLettersArr,letter]
    })
  }

  function resetGame(){
    setCurrentWord(words[Math.floor(Math.random()*words.length)])
    setGuessLettersArr([])
  }
  

  return (
    <main>
      {isGameWon && <Confetti recycle={false} numberOfPieces={500}/>}
      <Header guessLeft={8-wrongGuessCount}/>
      <Status isGameLost={isGameLost} isGameWon={isGameWon} isGameOver={isGameOver} isLastGuessIncorrect={isLastGuessIncorrect} latestDeadLang={latestDeadLang}/>
      <section className="language-chips-container">
        {language_chips}
      </section>
      <section className="current-word-container">
        {currentWordArr}
      </section>
      <section className="keyboard">
        {alphabetElements}
      </section>
      { isGameOver && <button className="new-game-btn" onClick={resetGame}>New Game</button> }
    </main>
  )
}