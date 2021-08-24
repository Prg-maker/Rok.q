import '../styles/roomcode.scss'


import copyImg from '../assets/images/copy.svg'
import { useParams } from 'react-router-dom';


export function RoomCode(props){

  const params = useParams()
  

  function copyRoomCodeToClipboard(){
    navigator.clipboard.writeText(params.codigo)
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