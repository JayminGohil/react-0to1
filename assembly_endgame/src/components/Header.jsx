import '../styles/Header.css'

export default function Header(props){
  return (
    <header>
        <span>Assembly: Endgame</span>
        <span>Guess the word in under {props.guessLeft!=0 ? props.guessLeft : 8} attempts to keep the programming world safe from Assembly!</span>
    </header>
  )
}