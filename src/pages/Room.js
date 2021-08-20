
import logoImg from '../assets/images/logo.svg'

import {Button} from '../components/Button'
import {RoomCode} from '../components/RoomCode'

import '../styles/globalStyles.scss'
import '../styles/room.scss'

export function Room(){
  return(
    <div className="container">
      <header>
        <div className="content">
          <img src={logoImg} alt="rocket.q"/>

          <div className="buttons">
            <RoomCode code=""/>
            <Button></Button>
          </div>
        </div>
       
      </header>
    </div>
  );
}