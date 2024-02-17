import React, { useState } from 'react'
import { Navbar } from '../containers/Navbar'
import { Footer } from '../containers/Footer'
import { PaymentCard } from '../components/PaymentCard'
import { faMoneyBills, faCreditCard } from '@fortawesome/free-solid-svg-icons'
import '../styles/homePage.css'
import { OrderDetails } from '../components/OrderDetails'
import { PaymentInfoModal } from '../components/PaymentInfoModal'

export const PaymentPage = (): JSX.Element => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar checkout={false}/>
      <div className='flex-grow'>
        <h1 className='text-white text-center text-3xl fw-lighter'>Finalizar Compra</h1>
        <h2 className='text-white mx-24 mt-5 text-2xl fw-lighter'>Detalles de su compra</h2>
        <OrderDetails/>
        <h2 className='text-white mx-24 mt-5 text-2xl fw-lighter'>Formas de Pago</h2>
        <div className='flex mx-24 mt-10'>
          <PaymentCard name='Efectivo' icon={faMoneyBills}/>
          <PaymentCard name='Tarjeta' icon={faCreditCard}/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
