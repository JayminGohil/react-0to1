import '../styles/Languages.css'
import clsx from 'clsx'

export default function LanguagesChip(props){

  const styles = {
    backgroundColor:props.backgroundColor,
    color:props.color
  }

  const className = clsx(
    "languages-chip",
    props.lost && "lost"
  )
  return (
    <div className={className} style={styles}>
        <span>{props.name}</span>
    </div> 
  )
}