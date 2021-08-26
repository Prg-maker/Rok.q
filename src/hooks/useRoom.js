import { useEffect, useState } from "react";
import { database } from "../services/firebase";

export function useRoom(roomId){

  const [question , setQuestion] = useState('')
  const [title , setTitle] = useState('')

  useEffect(() =>{
    const roomRef = database.ref(`/rooms/new/${roomId}`)
    console.log(roomId)

    roomRef.on('value', room => {
      const databaseRoom = room.val()
      const FirebaseQuestions = databaseRoom.questions ?? {}
      const parserdQuestions = Object.entries(FirebaseQuestions).map(([key , value]) => {
        return {
          id:key,
          content: value.content,
          isAnswered: value.isAnswered
        }
      })


      setTitle(databaseRoom.title)
      setQuestion(parserdQuestions)
    })

    return () =>
    {roomRef.off('value')}
  },[roomId])
  return{question, title}

}