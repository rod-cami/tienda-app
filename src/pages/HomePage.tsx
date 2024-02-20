import { Navbar } from '../containers/Navbar'
import { Footer } from '../containers/Footer'
import '../styles/homePage.css'
import { ProductCard } from '../components/ProductCard'
import { OrderDetails } from '../components/OrderDetails'
import { PaymentCard } from '../components/PaymentCard'
import { faMoneyBills, faCreditCard } from '@fortawesome/free-solid-svg-icons'

export const HomePage = (): JSX.Element => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar/>
      <div className='flex-grow'>
        <div className='row m-0 p-0'>
          <div className='text-white col-12 col-md-6'>
            <ProductCard/>
          </div>
          <div className='col-12 col-md-6'>
            <h2 className='text-white mx-4 mt-5 text-2xl fw-lighter'>Detalles de su compra</h2>
            <OrderDetails/>
            <h2 className='text-white mx-4 mt-5 text-2xl fw-lighter'>Formas de Pago</h2>
            <div className='flex mx-4 mt-10'>
              <PaymentCard name='Efectivo' icon={faMoneyBills}/>
              <PaymentCard name='Tarjeta' icon={faCreditCard}/>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
