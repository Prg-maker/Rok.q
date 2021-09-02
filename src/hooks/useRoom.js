import { useEffect, useState } from "react";
import { database } from "../services/firebase";

export function useRoom(roomId){

  const [questions , setQuestion] = useState('')

  useEffect(() =>{
    const roomRef = database.ref(`/rooms/new/${roomId}`)

    roomRef.on('value', room => {
      const databaseRoom = room.val()
      const FirebaseQuestions = databaseRoom.questions ?? {}
      const parserdQuestions = Object.entries( FirebaseQuestions ).map(([key, value]) => {
        return {
          id:key,
          content: value.content,
          isAnswered: value.isAnswered
        }
      })


      setQuestion(parserdQuestions)
    })

    return () =>
    {roomRef.off('value')}
  },[roomId])
  return{questions}

}