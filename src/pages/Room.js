import { useState } from 'react'
import { useHistory, useParams} from 'react-router-dom' 
import {Link} from 'react-router-dom'

import logoImg from '../assets/images/logo.svg'
import userWhiteImg from '../assets/images/users-white.svg'
import lockImg from '../assets/images/lock.svg'


import {Button} from '../components/Button'
import {RoomCode} from '../components/RoomCode'
import {Question} from '../components/Question'

import {database} from '../services/firebase'

import '../styles/globalStyles.scss'

import '../styles/room.scss'
import { useRoom } from '../hooks/useRoom'

export function Room(){

  const [newQuestion , setNewQuestion] = useState('')
  const params = useParams()
  const roomId  = params.codigo
  const {questions } = useRoom(roomId)
  const history = useHistory('')

  function back(){
    history.push('/rooms/create_room')
  }

  async function handleSendQuestion(event){
    event.preventDefault()

    if(newQuestion.trim === ""){
      return
    }

    const question = {
      content: newQuestion,
      isHighlighted: false,
      isAnswer: false
    }

    await database.ref(`rooms/new/${roomId}/questions`).push(question)
    setNewQuestion('')
   

   

  }
  const question = [...questions]
    
 
  return(
    <div className="container">
      <div className='container-room'>

        <header>
          <div className="content-room">
            <img src={logoImg} alt="rocket.q"/>

            <div className="buttons">
              <RoomCode code="123456"/>
              

              <button
                className="button" 
                onClick={back}
              >
                <img src={userWhiteImg} alt="crie a sua sala"/>
                Criar sala
              </button>
              
            </div>
          </div> 
        </header>


        <main className="main-room">
          <h2>Faça uma pergunta</h2>

          <form onSubmit={handleSendQuestion}>
            <label for="question" className="sr-only">
              O que você quer pergunta
            </label>
            <textarea  
              placeholder="O que você quer perguntar"
              onChange={event => setNewQuestion(event.target.value)}
              value={newQuestion}
            ></textarea>
            <footer>

              <div>
                <img src={lockImg} alt="Faça sua pergunta anônima"/>
                Esta pergunta é anônima
              </div>
        
              <Button text="Enviar"></Button>
            </footer>
          </form>


        </main>
          <div className="question-in-rome">
            {question.map(question =>{
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
  );
  
}