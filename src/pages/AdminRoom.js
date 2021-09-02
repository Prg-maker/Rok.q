import { useRoom } from '../hooks/useRoom'

import {database} from '../services/firebase'

import logoImg from '../assets/images/logo.svg'
import userWhiteImg from '../assets/images/users-white.svg'

import {Button} from '../components/Button'
import {RoomCode} from '../components/RoomCode'
import {Question} from '../components/Question'

import '../styles/globalStyles.scss'
import '../styles/admin.scss'
import { useParams } from 'react-router-dom'

export function AdminRoom(){
  const params = useParams()
  const roomId = params.codigo
  const {questions} = useRoom(roomId)


  const question = [...questions]

  return(
    <div className="container">
      <div className="container-admin-room">
        <header>
          <div className="content-room">
            <img src={logoImg} alt="rocket.q"/>

            <div className="buttons">
              <RoomCode code="123456"/>
              <Button 
                text="Encerrar sala"
                imagem={<img src={userWhiteImg} alt="Encerar Sala"/>}
                ></Button>
            </div>
          </div>
        
        </header>

        <div className="question-main">
          <div className="quesitons">
            {question.map(question => {
              return(
                <Question
                  content={question.content}
                >

                </Question>
              );
            })}
          </div>
        </div>
       
      </div>
     
    </div>
  );
}