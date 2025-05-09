import '../styles/die.css'




export default function Die(props){
  const one = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M0 0h512v512H0z" fill="#2b283a" fillOpacity="1" />
      <g className="" transform="translate(0,0)">
        <path
          d="M74.5 36A38.5 38.5 0 0 0 36 74.5v363A38.5 38.5 0 0 0 74.5 476h363a38.5 38.5 0 0 0 38.5-38.5v-363A38.5 38.5 0 0 0 437.5 36h-363zM256 206a50 50 0 0 1 0 100 50 50 0 0 1 0-100z"
          fill={props.isHeld ? '#f2cdcd' : '#FFFFFF'}
          fillOpacity="1"
        />
      </g>
    </svg>
  );

  const two = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M0 0h512v512H0z" fill="#2b283a" fillOpacity="1" />
      <g className="" transform="translate(0,0)">
        <path
          d="M74.5 36A38.5 38.5 0 0 0 36 74.5v363A38.5 38.5 0 0 0 74.5 476h363a38.5 38.5 0 0 0 38.5-38.5v-363A38.5 38.5 0 0 0 437.5 36h-363zm316.97 36.03A50 50 0 0 1 440 122a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zm-268 268A50 50 0 0 1 172 390a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97z"
          fill={props.isHeld ? '#ddb6f2' : '#FFFFFF'}
          fillOpacity="1"
        />
      </g>
    </svg>
  );

  const three = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M0 0h512v512H0z" fill="#2b283a" fillOpacity="1" />
      <g className="" transform="translate(0,0)">
        <path
          d="M74.5 36A38.5 38.5 0 0 0 36 74.5v363A38.5 38.5 0 0 0 74.5 476h363a38.5 38.5 0 0 0 38.5-38.5v-363A38.5 38.5 0 0 0 437.5 36h-363zm316.97 36.03A50 50 0 0 1 440 122a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zM256 206a50 50 0 0 1 0 100 50 50 0 0 1 0-100zM123.47 340.03A50 50 0 0 1 172 390a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97z"
          fill={props.isHeld ? '#f28fad' : '#FFFFFF'}
          fillOpacity="1"
        />
      </g>
    </svg>
  );

  const four = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M0 0h512v512H0z" fill="#2b283a" fillOpacity="1" />
      <g className="" transform="translate(0,0)">
        <path
          d="M74.5 36A38.5 38.5 0 0 0 36 74.5v363A38.5 38.5 0 0 0 74.5 476h363a38.5 38.5 0 0 0 38.5-38.5v-363A38.5 38.5 0 0 0 437.5 36h-363zm48.97 36.03A50 50 0 0 1 172 122a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zm268 0A50 50 0 0 1 440 122a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zm-268 268A50 50 0 0 1 172 390a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zm268 0A50 50 0 0 1 440 390a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97z"
          fill={props.isHeld ? '#fae3b0' : '#FFFFFF'}
          fillOpacity="1"
        />
      </g>
    </svg>
  );

  const five = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M0 0h512v512H0z" fill="#2b283a" fillOpacity="1" />
      <g className="" transform="translate(0,0)">
        <path
          d="M74.5 36A38.5 38.5 0 0 0 36 74.5v363A38.5 38.5 0 0 0 74.5 476h363a38.5 38.5 0 0 0 38.5-38.5v-363A38.5 38.5 0 0 0 437.5 36h-363zm48.97 36.03A50 50 0 0 1 172 122a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zm268 0A50 50 0 0 1 440 122a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zM256 206a50 50 0 0 1 0 100 50 50 0 0 1 0-100zM123.47 340.03A50 50 0 0 1 172 390a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zm268 0A50 50 0 0 1 440 390a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97z"
          fill={props.isHeld ? '#abe9b3' : '#FFFFFF'}
          fillOpacity="1"
        />
      </g>
    </svg>
  );

  const six = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M0 0h512v512H0z" fill="#2b283a" fillOpacity="1" />
      <g className="" transform="translate(0,0)">
        <path
          d="M74.5 36A38.5 38.5 0 0 0 36 74.5v363A38.5 38.5 0 0 0 74.5 476h363a38.5 38.5 0 0 0 38.5-38.5v-363A38.5 38.5 0 0 0 437.5 36h-363zm48.97 36.03A50 50 0 0 1 172 122a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zm268 0A50 50 0 0 1 440 122a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zM122 206a50 50 0 0 1 0 100 50 50 0 0 1 0-100zm268 0a50 50 0 0 1 0 100 50 50 0 0 1 0-100zM123.47 340.03A50 50 0 0 1 172 390a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zm268 0A50 50 0 0 1 440 390a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97z"
          fill={props.isHeld ? '#96cdfb' : '#FFFFFF'}
          fillOpacity="1"
        />
      </g>
    </svg>
  );


  let diceImage = '';
  switch (props.number) {
    case 1:
      diceImage = one;
      break;
    case 2:
      diceImage = two;
      break;
    case 3:
      diceImage = three;
      break;
    case 4:
      diceImage = four;
      break;
    case 5:
      diceImage = five;
      break;
    default:
      diceImage = six;
  }
  const styles = {
      backgroundColor: props.isHeld ? "#59E391" : "#FFFFFF"
  }
  
  return (
    
    <button style={styles} onClick={()=>props.handleClick(props.id)}>
        {/* {props.number} */}
        {diceImage}
    </button>
  )
}