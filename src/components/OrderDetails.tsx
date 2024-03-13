import { useEffect, useState } from 'react'
import { getSalesLines, calculateTotalPrices, deleteSalesLine } from '../utils/paymentUtils'
import { PaymentModal } from './PaymentModal'
import { Button } from '@nextui-org/react'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const OrderDetails = (): JSX.Element => {
  const [payButton, setPayButton] = useState<boolean>(true)
  const [products, setProducts] = useState(getSalesLines())

  useEffect(() => {
    setPayButton(!(products.length > 0))
  }, [products])

  const handleDelete = (index: number, key: string): void => {
    console.log('hola, ', index)
    const result = deleteSalesLine(index, key)
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
      <div className='mx-4 mt-3 xl:mt-4'>
        <div className='w-100'>
          <dl>
            <div className="px-2 pt-3 pb-2 d-flex justify-between border-b border-gray-400">
              <dt className="text-xl font-medium leading-6 fw-bolder">Producto</dt>
              <dt className="text-xl font-medium leading-6 fw-bolder">Precio</dt>
              <dt className="text-xl font-medium leading-6 fw-bolder">Eliminar</dt>
            </div>
            {
              products.map((item, index) => (
                <div key={index} className="px-2 py-3 d-flex justify-between">
                    <dd className="text-sm ">{item.nombre} - {item.color} - {item.talle} x {item.cantidad}</dd>
                    <dd className="text-sm text-slate-800 sm:col-span-2 sm:mt-0">${(item.precio).toFixed(2)}</dd>
                    <dd className="text-sm font-medium leading-6 mr-4"><FontAwesomeIcon onClick={ () => { handleDelete(index, `${item.idLineaDeVenta}`) } } className='text-red-600 cursor-pointer' icon={faTrashCan} /></dd>
                </div>
              ))
            }
            <div className="px-2 py-6 d-flex justify-between border-t border-gray-400">
              <dt className="text-sm font-medium leading-6">Total</dt>
              <dd className="text-sm leading-6 sm:col-span-2 sm:mt-0">${(calculateTotalPrices(products).toFixed(2))}</dd>
            </div>
          </dl>
          <div className='flex justify-end'>
            <Button isDisabled={payButton} color="warning" variant="ghost" onClick={() => { handleShow() }}>
              Pagar
            </Button>
          </div>
        </div>
      </div>
      <PaymentModal show={show} handleClose={handleShow}/>
    </>
  )
}
