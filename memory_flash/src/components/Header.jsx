import '../styles/Header.css'
import { PiMemoryBold } from "react-icons/pi";

export default function Header(){
    return (
        <header>
            <PiMemoryBold size={40}/>
            <span>Memory Flash</span>
        </header>
    )
}