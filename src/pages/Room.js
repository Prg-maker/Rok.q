import {Link} from 'react-router-dom' 

import logoImg from '../assets/images/logo.svg'
import userWhiteImg from '../assets/images/users-white.svg'
import lockImg from '../assets/images/lock.svg'

import {Button} from '../components/Button'
import {RoomCode} from '../components/RoomCode'

import '../styles/globalStyles.scss'

import '../styles/room.scss'

export function Room(){


  return(
    <div className="container">
      <div className='container-room'>

        <header>
          <div className="content-room">
            <img src={logoImg} alt="rocket.q"/>

            <div className="buttons">
              <RoomCode code="123456"/>
              
              <Button 
                text="Criar sala"
                imagem={<img src={userWhiteImg} alt="crie a sua sala"/>}
               />
              
            </div>
          </div> 
        </header>


        <main className="main-room">
          <h2>Faça uma pergunta</h2>

          <form>
            <label for="question" className="sr-only">
              O que você quer pergunta
            </label>
            <textarea  placeholder="O que você quer perguntar"></textarea>
            <footer>

              <div>
                <img src={lockImg} alt="Faça sua pergunta anônima"/>
                Esta pergunta é anônima
              </div>
        
              <Button text="Enviar"></Button>
            </footer>
          </form>
        </main>
      </div>
    </div>
  );
}