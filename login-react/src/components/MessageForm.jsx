import React from 'react'
import './MessageForm.css'

export const MessageForm = ({message = "Credenciales incorrectas"}) => {
  return (
    <div className='message-container'>
        <p>{message}</p>
    </div>
  )
}
