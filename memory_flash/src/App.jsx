import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Confetti from 'react-confetti'

function App() {

  const selectables = "0123456789abcdefghijklmnopqrstuvwxyz"
  const selectableArr = selectables.split("").map(item => item)

  function getRandomLetter() {
    const tempArr = []
    for (let i = 0; i < 5; i++) {
      tempArr.push(selectableArr[Math.floor(Math.random() * selectableArr.length)])
    }
    return tempArr
  }

  const [randomLetters, setRandomLetters] = useState(() => getRandomLetter())


  const [currentIndex, setCurrentIndex] = useState(-1);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setCurrentIndex(index);
      index++;
      if (index >= randomLetters.length) {
        clearInterval(interval);
        setTimeout(() => setCurrentIndex(-1), 300);
      }
    }, 300);

    return () => clearInterval(interval);
  }, [randomLetters])
  
  const [won, setWon] = useState(null)

  function submitAns(formData) {
    const answer = formData.get("guess")
    if (randomLetters.every((letter, index) => letter === answer.split("")[index])) {
      setWon(true)
    } else {
      setWon(false)
    }
  }

  function resetGame() {
    setRandomLetters(getRandomLetter())
    setWon(null)
  }

  return (
    <main>
      {won && <Confetti recycle={false} numberOfPieces={500} />}
      <Header />

      <section className="status">
        {won === null ? null : won ? (
          <span className='success'>You Won!</span>
        ) : (
          <span className='danger'>You Lost!</span>
        )}
      </section>

      <section className="words-flash-container">
        {!won ?
          <span>
            {randomLetters.map((letter, index) => (
              <span key={index}>
                {index === currentIndex ? letter : '*'}
              </span>
            ))}
          </span>
          : <span>{randomLetters.map(letter => letter)}</span>

        }
      </section>

      <form action={submitAns} className="form-container">
        <input type="text" name="guess" autoComplete="off" />

        <div className="btns">
          <button disabled={won !== null}>Go!</button>
          <button type="button" onClick={resetGame}>New Round</button>
        </div>

      </form>
    </main>


  )
}

export default App
