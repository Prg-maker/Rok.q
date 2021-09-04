import { useRoom } from '../hooks/useRoom'

import {database} from '../services/firebase'

import logoImg from '../assets/images/logo.svg'
import userWhiteImg from '../assets/images/users-white.svg'
import checkImg from '../assets/images/check.svg'
import trashImg from '../assets/images/trash.svg'

import {Button} from '../components/Button'
import {RoomCode} from '../components/RoomCode'
import {Question} from '../components/Question'

import '../styles/globalStyles.scss'
import '../styles/admin.scss'
import { useHistory, useParams } from 'react-router-dom'

export function AdminRoom(){
  const params = useParams()
  const roomId = params.codigo
  const {questions} = useRoom(roomId)
  const history = useHistory('')

  const question = [...questions]

  async function handleEndRoom(){
    await database.ref(`rooms/new/${roomId}`).update({
      endedAt: new Date()
    })
    history.push('/')
  }


  async function handleDeleteQuestion(questionId){
    if(window.confirm('tem certeza que você deseja excluir essa pergunta')){
      const questionRef = await database.ref(`rooms/new/${roomId}/questions/${questionId}`).remove()
    }
    console.log('chegou aqui')
  }

  async function handleCheckQuestionAnswered(questionId){
    const questionRef = await database.ref(`rooms/new/${roomId}/questions/${questionId}`).update({
      isAnswer:true
    })

  }

  return(
    <div className="container">
      <div className="container-admin-room">
        <header>
          <div className="content-room">
            <img src={logoImg} alt="rocket.q"/>

            <div className="buttons">
              <RoomCode  code="123456"/>
              <button className='button' onClick={ handleEndRoom}>
                <img src={userWhiteImg} alt="Encerar Sala"/>
                Encerrar sala
              </button>
            </div>
          </div>
        
        </header>

        <div className="question-main">
          <div className="quesitons">
            {question.map(question => {
              return(
                <Question 
                  content={question.content}
                  isAnswer={question.isAnswer}
                >

                  {!question.isAnswer && (
                    <>
                      <button 
                        type="button"
                        className="check  action-of"
                        onClick={()=> handleCheckQuestionAnswered(question.id)}
                      >
                        <img src={checkImg} alt="marca como lida"/>
                        Marca como lida
                      </button>


                     

                    </>
                  )}
                      <button 
                        type="button"
                        className="delete action-of"
                        onClick={() => handleDeleteQuestion(question.id)}
                      >
                        <img src={trashImg} alt="deletar messagem"/>
                        Excluir messagem
                      </button>
                </Question>
              );
            })}
          </div>
        </div>
       
      </div>
     
    </div>
  );
}