import { Navbar } from '../containers/Navbar'
import { Footer } from '../containers/Footer'
import { Card, CardHeader } from '@nextui-org/react'
import '../styles/homePage.css'
import { startSale } from '../services/servicesSales'
import { type Sesion } from '../models/sesion.d'
import toast from "react-hot-toast"


export const HomePage = (): JSX.Element => {
  const handleInitiateSale = async (): Promise<void> => {
    console.log('entro a inciar la venta')
    const session: Sesion = JSON.parse(`${localStorage.getItem('sesion')}`)
    const userId = `${session.usuario.idUsuario}`
    const salePoint = `${session.puntoDeVenta.idPuntoDeVenta}`
    const initiateSale = await startSale(userId, salePoint)

    if (initiateSale) {
      window.location.reload()
      window.location.href = '/sales'
    }
  }
  return (
      <>
        <Navbar/>
          <div className='flex items-center justify-center min-h-screen m-0 p-0 mt-5'>
            <div className="w-100 gap-2 grid grid-cols-12 grid-rows-2 px-8">
              <Card className="col-span-12 sm:col-span-4 h-[300px]" isPressable={true} onPress={() => { handleInitiateSale() }}>
                <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                  <p className="text-tiny text-black/60 uppercase font-bold ">Punto de Venta</p>
                  <h4 className="text-white font-bold text-large " style={{ textShadow: '0px 0px 5px rgba(0, 0, 0, 1.9)' }}>Iniciar Venta</h4>
                </CardHeader>
                <img
                  alt="Imagen del punto de venta"
                  className="z-0 w-full h-full object-cover"
                  src='https://images.unsplash.com/photo-1647427017067-8f33ccbae493?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                />
              </Card>
              <Card className="col-span-12 sm:col-span-4 h-[300px]">
                <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                  <p className="text-tiny text-black/60 uppercase font-bold">Inventario</p>
                  <h4 className="text-white font-bold text-large " style={{ textShadow: '0px 0px 5px rgba(0, 0, 0, 1.9)' }}>Visualizar Inventario Existente</h4>
                </CardHeader>
                <img
                  alt="Imagen del inventario"
                  className="z-0 w-full h-full object-cover"
                  src='https://images.unsplash.com/photo-1648824572347-517357c9c44e?q=80&w=1512&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                />
              </Card>
              <Card className="col-span-12 sm:col-span-4 h-[300px]">
                <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                  <p className="text-tiny text-black/60 uppercase font-bold">Artículos</p>
                  <h4 className="text-white font-bold text-large " style={{ textShadow: '0px 0px 5px rgba(0, 0, 0, 1.9)' }}>Gestionar Artículos</h4>
                </CardHeader>
                <img
                  alt="Imagen del inventario"
                  className="z-0 w-full h-full object-cover"
                  src='https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                />
              </Card>
            </div>
          </div>
        <Footer/>
      </>
  )
}
