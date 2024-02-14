import React from 'react'
import { Navbar } from '../containers/Navbar'
import { Footer } from '../containers/Footer'
import '../styles/homePage.css'
import { ProductCard } from '../components/ProductCard'
import { SearchButton } from '../components/SearchButton'

export const HomePage = (): JSX.Element => {
  return (
    <>
      <Navbar></Navbar>
      <div className='text-white m-3'>
        <SearchButton/>
        <ProductCard/>
      </div>
      <Footer></Footer>
    </>
  )
}
