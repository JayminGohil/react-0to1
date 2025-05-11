import '../styles/Header.css'
import x from '../assets/x.png'
import o from '../assets/o.png'


export default function Header(){
    return(
        <header>
            <img src={o} alt="O Icon" />
            <span>Tic Tac Toe</span>
            <img src={x} alt="X Icon" />
        </header>
    )
}