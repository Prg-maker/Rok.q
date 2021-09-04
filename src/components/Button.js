import '../styles/button.scss'

import React from 'react'

import {ButtonHTMLAttributes} from 'react'

export function Button(props){
 

  return (
    <button className="button">{props.imagem}{props.text}</button>
  )
}