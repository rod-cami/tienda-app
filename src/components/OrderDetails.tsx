import { useEffect, useState } from 'react'
import { getSalesLines, calculateTotalPrices, deleteSalesLine } from '../utils/paymentUtils'
import { PaymentModal } from './PaymentModal'
import { Button } from '@nextui-org/react'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { LineaDeVenta } from '../models/lineaDeVenta.d'
import { calculatePrice } from '../utils/productsUtils'
import { Venta } from '../models/venta.d'

export const OrderDetails = (): JSX.Element => {
  const [payButton, setPayButton] = useState<boolean>(true)
  const [sale, setSale] = useState<Venta>({})
  const [products, setProducts] = useState<LineaDeVenta[]>(getSalesLines())

  useEffect(() => {
    setPayButton(!(products.length > 0))
    const newSale: Venta = JSON.parse(`${localStorage.getItem('sale')}`)
    setSale(newSale)
  }, [products])

  const handleDelete = async (index: number, key: string): void => {
    console.log('hola, ', index)
    const result = await deleteSalesLine(index, key)
    if (result) {
      setProducts(getSalesLines())
    } else {
      console.log('no se borro correctamente')
    }
  }

  // Initial stat of show and card
  const [show, setShow] = useState<boolean>(false)

  // Show modal
  const handleShow = (): void => {
    setShow(!show)
  }
  return (
    <>
      <div className='border p-4 mt-5'>
        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight mb-3">Detalles de su compra</h2>
        <div className='mx-4 mt-3 xl:mt-4'>
          <div className='w-100'>
            <dl>
              <div className="px-2 pt-3 pb-2 d-flex justify-between border-b border-gray-400">
                <dt className="text-xl font-medium leading-6 fw-bolder">Producto</dt>
                <dt className="text-xl font-medium leading-6 fw-bolder">Precio Unitario</dt>
                <dt className="text-xl font-medium leading-6 fw-bolder">Subtotal</dt>
                <dt className="text-xl font-medium leading-6 fw-bolder">Eliminar</dt>
              </div>
              {
                products.map((item, index) => (
                  <div key={index} className="px-2 py-3 d-flex justify-between">
                      <dd className="text-sm ">{item.inventario.articulo.descripcion} - {item.inventario.color.nombre} - {item.inventario.talle.medida} x {item.cantidad}</dd>
                      <dd className="text-sm text-slate-800 sm:col-span-2 sm:mt-0">${calculatePrice(item.inventario)}</dd>
                      <dd className="text-sm text-slate-800 sm:col-span-2 sm:mt-0">${(item.subtotal).toFixed(2)}</dd>
                      <dd className="text-sm font-medium leading-6 mr-4"><FontAwesomeIcon onClick={ () => { handleDelete(index, `${item.idLineaDeVenta}`) } } className='text-red-600 cursor-pointer' icon={faTrashCan} /></dd>
                  </div>
                ))
              }
              <div className="px-2 py-6 d-flex justify-between border-t border-gray-400">
                <dt className="text-sm font-medium leading-6">Total</dt>
                <dd className="text-sm leading-6 sm:col-span-2 sm:mt-0">${sale.monto}</dd>
              </div>
            </dl>
            <div className='flex justify-end'>
              <Button isDisabled={payButton} className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"b variant="ghost" onClick={() => { handleShow() }}>
                Pagar
              </Button>
            </div>
          </div>
        </div>
      </div>
      <PaymentModal show={show} handleClose={handleShow}/>
    </>
  )
}
