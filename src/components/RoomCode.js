import copyImg from '../assets/images/copy.svg'

export function RoomCode(props){

  function copyRoomCodeToClipboard(){
    navigator.clipboard.writeText(props.code)
  } 

  return(
    <button className="room-code" onClick={copyRoomCodeToClipboard}>
      <div>
        <img src={copyImg} alt="Copiar o código" /> 
      </div>
      <span>#{props.code}</span>
    </button>
  );
}