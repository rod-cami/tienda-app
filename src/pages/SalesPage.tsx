import React from 'react'
import { ProductCard } from '../components/ProductCard'
import { OrderDetails } from '../components/OrderDetails'
import { Navbar } from '../containers/Navbar'
import { Footer } from '../containers/Footer'
import { SaleInformation } from '../components/SaleInformation'

export const SalesPage = (): JSX.Element => {
  return (
    <>
      <Navbar/>
        <SaleInformation/>
        <div className='row m-0 p-0 w-100'>
          <div className=' col-12 col-lg-6'>
            <ProductCard/>
          </div>
          <div className='col-12 col-lg-6'>
            <OrderDetails/>
          </div>
        </div>

    </>
  )
}
