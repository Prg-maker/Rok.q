import {useHistory} from 'react-router-dom'

import {database } from '../services/firebase'

import '../styles/home.scss'
import '../styles/globalStyles.scss'


import logoImg from '../assets/images/logo.svg'
import enterRoomImg from '../assets/images/enter-room.svg'
import usersImg from '../assets/images/users-white.svg'
import homeImg from '../assets/images/home-bg-img.svg'

import {Button }from '../components/Button'
import { CreateRoom } from './CreateRoom'
import { useState } from 'react'

export function Home(){

  const [roomCode , setRoomCode ] = useState('') 

  const history = useHistory()

  function handleCreateRoom(){
    
    history.push('/rooms/create_room')

  }

  async function handleJoinRoom(event){
    event.preventDefault()


    if(roomCode.trim() === ''){
      alert('code is invalid')
      return;
    }

    /***/
    const roomRef = await database.ref(`rooms/new/${roomCode}`).get()
    console.log(roomRef)

    if(!roomRef.exists() ){
      alert('room does not exist')
      return;
    }

    if(roomRef.val().endedAt){
      alert('Room already closed')
      return;
    }

    history.push(`/rooms/${roomCode}`)

  }

  

  return(

    <div className="container">
      <header>
        <img src={logoImg} alt="Rocket Q"/>
      </header>
      

      <main>
        <div id="bg">
          
          <img src={homeImg} alt="HomeImg"/>


          <div className="ball top"></div>
          <div className="ball bottom"></div>
        </div>


        <div className="container">
          <div className="content">
            <section>
              <h2>Entre como participante</h2>

              <form action="" onSubmit={handleJoinRoom}>
                <label className="sr-only" for="room-id">Código da sala</label>
                <input 
                  type="text" 
                  id="room-id" 
                  placeholder="Código da sala"
                  onChange={event => setRoomCode(event.target.value)}
                  value={roomCode}
                  ></input>
                <Button type="submit" imagem={<img src={enterRoomImg} alt="entrar em uma sala}"/>} text="Entrar na sala" />

              </form>
            </section>

            <div className="separator">ou</div>

            <section>
              <h2>Crie sua própria sala, <br/> de forma fácil</h2>


            </section>

            <button onClick={handleCreateRoom}>
              <a class="outlined">
                <img src={usersImg} alt="Criar sala"/>

                Criar sala

              </a>
            </button>
          </div>
        </div>
      </main>
     
    </div>
  );
  
}