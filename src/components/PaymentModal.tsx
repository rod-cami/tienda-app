import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from '@nextui-org/react'
import { type ModalProps } from '../types/types.d'
import { PaymentCard } from './PaymentCard'
import { faMoneyBills, faCreditCard, faCheck } from '@fortawesome/free-solid-svg-icons'
import { type Venta } from '../models/venta.d'
import { type LineaDeVenta } from '../models/lineaDeVenta.d'
import { type Sucursal } from '../models/sucursal.d'
import { type Empleado } from '../models/empleado.d'
import { useEffect, useState } from 'react'
import { finishSale, getBranch, getEmployee } from '../services/servicesSales'
import { Spinner } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const PaymentModal = ({ show, handleClose }: ModalProps): JSX.Element => {
  const sale: Venta = JSON.parse(`${localStorage.getItem('sale')}`)
  const articles: LineaDeVenta[] = JSON.parse(`${localStorage.getItem('products')}`)
  const [branch, setBranch] = useState<Sucursal>({})
  const [employee, setEmployee] = useState<Empleado>({})
  const [loading, setLoading] = useState<boolean>(false)

  const setData = async (): Promise<void> => {
    const employee = await getEmployee()
    const branch = await getBranch()
    setBranch(branch)
    setEmployee(employee)

  }

  const handleEnd = async (): void => {
    const result = await finishSale()
    if (result) {
      window.location.reload()
      window.location.href = '/home'
    }
  }

  useEffect(() => {
    setData()
  }, [])
  return (
    <>
      <Modal size='3xl' backdrop='blur' isOpen={show} onClose={handleClose}>
        <ModalContent>
          <ModalBody>
            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight mt-3">
              Venta #{sale.idVenta}
            </h2>
            <dl className="divide-y divide-gray-100">
              <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">Cliente</dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  <dd>{sale.cliente.apellido}, {sale.cliente.nombre}</dd>
                  <dd>({sale.cliente.tipoDocumento}) {sale.cliente.nroDocumento} </dd>
                  <dd>{sale.cliente.condicionTributaria.nombre}</dd>
                </dd>
              </div>
              <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">Empleado</dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  <dd>({employee.legajo}) {employee.apellido}, {employee.nombre}</dd>
                  <dd>(Sucursal) {branch.nombre}</dd>
                  <dd>(Ubicación) {branch.domicilio} - {branch.ciudad}</dd>
                </dd>
              </div>
              <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">Pago</dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  <dd>{JSON.parse(`${localStorage.getItem('pay')}`)}</dd>
                  <dd>{sale.tipoDeComprobante.nombre}</dd>
                </dd>
              </div>
              <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">Detalle de Venta</dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  { articles.map((art, index) =>
                    <dd key={index}> {art.inventario.articulo.descripcion} - {art.inventario.color.nombre} - {art.inventario.talle.medida} x {art.cantidad}</dd>
                  ) }
                </dd>
              </div>
              <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">Total Venta</dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">${sale.monto}</dd>
              </div>
            </dl>
            <span className="sm:ml-3 flex justify-end">
              <button
                type="button"
                className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={ () => { handleEnd() }}
              >
                <FontAwesomeIcon icon={faCheck} className='text-lg mr-2'/>
                Finalizar Venta
              </button>
            </span>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
