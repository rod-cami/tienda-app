import { Navbar } from '../containers/Navbar'
import { Footer } from '../containers/Footer'
import '../styles/homePage.css'
import { ProductCard } from '../components/ProductCard'
import { SearchButton } from '../components/SearchButton'

export const HomePage = (): JSX.Element => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar checkout={true}/>
      <div className='text-white m-3 flex-grow body'>
        <SearchButton/>
        <ProductCard/>
      </div>
      <Footer/>
    </div>
  )
}
