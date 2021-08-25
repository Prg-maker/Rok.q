
import { useState } from 'react'

import {database} from '../services/firebase'

import logoImg from '../assets/images/logo.svg'
import userWhiteImg from '../assets/images/users-white.svg'

import {Button} from '../components/Button'
import {RoomCode} from '../components/RoomCode'

import '../styles/globalStyles.scss'


export function AdminRoom(){


  return(
    <div className="container">
      <header>
        <div className="content-room">
          <img src={logoImg} alt="rocket.q"/>

          <div className="buttons">
            <RoomCode code="123456"/>
            <Button 
              text="Criar sala"
              imagem={<img src={userWhiteImg} alt="Encerar Sala"/>}
              ></Button>
          </div>
        </div>
       
      </header>
    </div>
  );
}