import React, { useState } from 'react'
import { LoginForm } from '../components/LoginForm'
import '../styles/loginPage.css'

export const LoginPage: React.FC = () => {
  const [loading] = useState(false)
  const handleLogin = (username: string, password: string): void => {
    // Aquí podrías realizar la lógica de autenticación, como enviar una solicitud al servidor, etc.
    console.log(`Username: ${username}, Password: ${password}`)
  }

  return (
    <div className='p-lg-5 py-5 px-2 w-50 mx-auto my-10 contenedor-login'>
      <h1 className='fs-1 text-center fw-light'>Bienvenide?</h1>
      <LoginForm load={loading} onLogin={handleLogin} />
    </div>
  )
}
