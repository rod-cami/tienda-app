import { Fragment, useEffect, useState } from 'react'
import {
  BriefcaseIcon,
  CalendarIcon,
  CheckIcon,
  ChevronDownIcon,
  CurrencyDollarIcon,
  LinkIcon,
  MapPinIcon,
  PencilIcon,
} from '@heroicons/react/20/solid'
import { Menu, Transition } from '@headlessui/react'
import { type Venta } from '../models/venta.d'
import { Sucursal } from '../models/sucursal.d'
import { Empleado } from '../models/empleado.d'
import { endSale, getBranch, getEmployee } from '../services/servicesSales'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faIdCardClip, faPerson, faXmark } from '@fortawesome/free-solid-svg-icons'

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(' ')
}

export const SaleInformation = (): JSX.Element => {
  const [branch, setBranch] = useState<Sucursal>({})
  const [employee, setEmployee] = useState<Empleado>({})
  const sale: Venta = JSON.parse(`${localStorage.getItem('sale')}`)

  const handleClose = async (): Promise<void> => {
    const result = await endSale()
    if (result) {
      window.location.reload()
      window.location.href = '/home'
    } else {
      console.log('error')
    }
  }

  const setData = async (): void => {
    const employee = await getEmployee()
    const branch = await getBranch()
    setBranch(branch)
    setEmployee(employee)

    console.log(employee, branch)
  }

  useEffect(() => {
    setData()
  }, [])
  return (
    <div className="lg:flex lg:items-center lg:justify-between mt-3 mx-4 border p-4">
      <div className="min-w-0 flex-1">
        <div className='row m-0 p-0'>
          <div className='col-6'>
            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight ">
              Venta #{sale.idVenta}
            </h2>
          </div>
          <div className="flex justify-end col-6">
            <span className="hidden sm:block">
              <button
                type="button"
                className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                <PencilIcon className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                Editar Cliente
              </button>
            </span>

            <span className="sm:ml-3">
              <button
                type="button"
                className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={ () => { handleClose() }}
              >
                <FontAwesomeIcon icon={faXmark} className='text-lg mr-2'/>
                Cancelar Venta
              </button>
            </span>
          </div>
        </div>
        <div className="mt-3 ml-3 flex justify-between sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <BriefcaseIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
            empleado
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <MapPinIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
            sucursal - punto de venta
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <CurrencyDollarIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
            {sale.tipoDeComprobante.nombre}
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <CalendarIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
            {sale.fecha}
          </div>
        </div>
        <div className="mt-3 ml-3 flex justify-between sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <FontAwesomeIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" icon={faPerson} />
            {sale.cliente.apellido}, {sale.cliente.nombre}
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <FontAwesomeIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" icon={faCartShopping} />
            {sale.cliente.condicionTributaria.nombre}
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <FontAwesomeIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" icon={faIdCardClip} />
            {sale.cliente.nroDocumento}
          </div>
        </div>
      </div>
    </div>
  )
}
