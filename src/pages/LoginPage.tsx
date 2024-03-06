import React from 'react'
import { LoginForm } from '../components/LoginForm'
import '../styles/loginPage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShopify } from '@fortawesome/free-brands-svg-icons'
import { Footer } from '../containers/Footer'

export const LoginPage: React.FC = () => {
  localStorage.setItem('products', JSON.stringify([]))
  return (
    <div className="flex flex-col min-h-screen">
      <div className='text-white m-3 flex-grow '>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <div className='flex justify-center mt-20'>
            <FontAwesomeIcon className="h-10 w-auto text-slate-800" icon={faShopify}/>
          </div>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-slate-700">
          Inicia sesión en tu cuenta
          </h2>
        </div>
        <div className="mb-40 sm:mx-auto sm:w-full sm:max-w-sm">
          <LoginForm/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
