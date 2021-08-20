import { useState , FormEvent} from 'react'
import {Link, useHistory} from 'react-router-dom'

import { database} from '../services/firebase'

import '../styles/home.scss'
import '../styles/globalStyles.scss'

import logoImg from '../assets/images/logo.svg'
import usersImg from '../assets/images/users-white.svg'
import homeImg from '../assets/images/home-bg-img.svg'

import {Button }from '../components/Button'


export function CreateRoom(){

  const [newRoom , setNewRoom ] = useState('')

  const history = useHistory()


  async function handleCreateNewRoom(event){

    event.preventDefault()

    if(newRoom.trim() === ''){
      alert('code is invalid')
      return;
    }
    console.log('chegou aqui')

    const roomRef = database.ref('rooms/new')
    console.log(roomRef)

    const firebaseRoom = await roomRef.push({
      codigo: newRoom
    })

    history.push(`/rooms/admin/${firebaseRoom.key}`)
  }
  
  return(

    <div className="container">
      <header>
        <Link to="/">
          <img src={logoImg} alt="Rocket Q"/>
        </Link>
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
              <h2>Crie sua própria sala</h2>

              <form onSubmit={handleCreateNewRoom}>
                <label className="sr-only" for="room-id">Código da sala</label>
                <input 
                  type="text" 
                  id="room-id" 
                  placeholder="Código da sala" 
                  onChange={event => setNewRoom(event.target.value)}
                  value={newRoom}
                  ></input>
                <Button type="submit" imagem={<img src={usersImg} alt="entrar em uma sala}"/>} text="Criar  sala" />
              </form>
            </section>


          

          </div>
        </div>
      </main>
     
    </div>
  );
  
}