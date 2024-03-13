import React from 'react'
import { ProductCard } from '../components/ProductCard'
import { OrderDetails } from '../components/OrderDetails'
import { Navbar } from '../containers/Navbar'
import { Footer } from '../containers/Footer'
import { Button } from '@nextui-org/react'
import { endSale } from '../services/servicesSales'

export const SalesPage = (): JSX.Element => {
  const handleClose = async (): Promise<void> => {
    const result = await endSale()
    if (result) {
      window.location.reload()
      window.location.href = '/home'
    } else {
      console.log('error')
    }
  }
  return (
    <>
      <Navbar/>
        <div className='flex justify-end mt-5 mx-5'>
          <Button color='danger' onClick={ () => { handleClose() }}>Cancelar Venta</Button>
        </div>
        <div className='flex items-center justify-center min-h-screen m-0 p-0'>
          <div className='row m-0 p-0 w-100 px-5 mb-3'>
            <div className=' col-12 col-md-6'>
              <ProductCard/>
            </div>
            <div className='col-12 col-md-6'>
              <h2 className='  mt-5 text-3xl fw-lighter'>Detalles de su compra</h2>
              <OrderDetails/>
            </div>
          </div>
        </div>
      <Footer/>
    </>
  )
}
