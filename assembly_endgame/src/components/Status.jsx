import clsx from 'clsx'
import '../styles/Status.css'
import { getFarewellText } from './utils'

export default function Status(props){

  const classNames = clsx(
    "status-bar",
    props.isGameLost && "lost",
    props.isGameWon && "won",
    (props.isLastGuessIncorrect && !props.isGameLost) && "farewell"
  )

  function renderGameStatus(){
    if(props.isGameLost){
      return (
        <>
          <span className='status-text-1'>Game over!</span>
          <span className='status-text-2'>You lose! Better start learning Assembly 😭</span>
        </>
      )
    }
    if(props.isGameWon){
      return (
        <>
          <span className='status-text-1'>You Win!</span>
          <span className='status-text-2'>Well Done!🎉</span>
        </>
      )
    }
    if(props.isLastGuessIncorrect){
      return(
        <span>
          {getFarewellText(props.latestDeadLang)}
        </span>
      )
    } 
  }


  return (
    <div className={classNames}>
        {
          renderGameStatus()
        }
    </div>
  )
}