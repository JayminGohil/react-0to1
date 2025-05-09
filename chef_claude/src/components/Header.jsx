import '../styles/Header.css'
import ChefClaudeIcon from '../assets/images/chef-claude-icon.png'

export default function Header(){
    return (
        <>
            <header className='main-header'>
                <img src={ChefClaudeIcon} alt="Chef Claude Icon" />
                <span>Chef Claude</span>
            </header>
        </>
    )
}