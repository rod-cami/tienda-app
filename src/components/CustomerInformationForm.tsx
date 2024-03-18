import { useEffect, useState } from 'react'
import { Form, Spinner } from 'react-bootstrap'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { type Cliente } from '../models/cliente.d'
import { type CondicionTributaria } from '../models/condicionTributaria.d'
import { addCustomerToSale, createCustomer, getCustomer, getTaxCondition } from '../services/servicesSales'
import { type Venta } from '../models/venta.d'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faPerson } from '@fortawesome/free-solid-svg-icons'
import { Card, CardFooter, Input } from '@nextui-org/react'

export const CustomerInformationForm = (): JSX.Element => {
  const { register, formState: { errors }, handleSubmit } = useForm<Cliente>()
  const [loading, setLoading] = useState<boolean>(false)
  const [customer, setCustomer] = useState<Cliente>(undefined)
  const [sale, setSale] = useState<Venta>({})
  const [form, setForm] = useState<boolean>(false)

  const handleSubmitForm: SubmitHandler<Cliente> = async (data, e) => {
    const result = await createCustomer(data)
    console.log(data)
    setLoading(true)
    if (result) {
      window.location.reload()
    }
  }

  //
  const [taxs, setTaxs] = useState<CondicionTributaria[]>([])

  const fetchData = async (): Promise<void> => {
    const result = await getTaxCondition()
    setTaxs(result)
  }

  useEffect(() => {
    fetchData()
  }, [taxs])

  // Search button
  const handleSearch: SubmitHandler<Cliente> = async (data, e) => {
    const result = await getCustomer(data.nroDocumento)
    console.log(result)
    if (result !== undefined) {
      setCustomer(result)
    }
  }

  const handleSelect = async (idCliente: number): Promise<void> => {
    const result = await addCustomerToSale(`${idCliente}`)
    if (result) {
      window.location.reload()
    }
  }

  const handleChange = async (): Promise<void> => {
    setForm(!form)
  }

  return (
    <div>
      {
        form ?
        <>
          <span className="sm:ml-3 flex justify-end">
            <button
              type="button"
              className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={ () => { handleChange() }}
            >
              <FontAwesomeIcon icon={faPerson} className='text-lg mr-2'/>
              Elegir cliente ya existente
            </button>
          </span>
          <Form className='row m-0 p-1' onSubmit={ handleSubmit( handleSubmitForm ) }>
            <Form.Group className="col-12 col-md-6 mt-3">
              <Form.Label className='text-sm lg:text-large fw-light'>Nombre(*)</Form.Label>
              <Form.Control
                placeholder="Ingrese su nombre"
                className="input w-full border-2 border-gray-100 rounded-xl p-3 mt-1 text-black"
                minLength={2}
                maxLength={300}
                  {
                  ...register('nombre', {
                    required: {
                      value: true,
                      message: 'Campo requerido'
                    },
                    maxLength: {
                      value: 200,
                      message: 'Debe ser menor a 50'
                    },
                    minLength: {
                      value: 2,
                      message: 'Debe ser mayor a 2'
                    },
                    pattern: { 
                      value: /^[A-Za-zñÑáéíóúÁÉÍÓÚ]+(?:[ -][A-Za-zñÑáéíóúÁÉÍÓÚ]+)*$/i,
                      message: 'Este campo solo acepta nombres y apellidos'
                    }
                  })}
              ></Form.Control>
              <Form.Text className="text-danger d-block">
                {errors.nombre?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="col-12 col-md-6 mt-3">
              <Form.Label className='text-sm lg:text-large fw-light'>Apellido (*)</Form.Label>
              <Form.Control
                placeholder="Ingrese su apellido"
                className="input w-full border-2 border-gray-100 rounded-xl p-3 mt-1 text-black"
                minLength={2}
                maxLength={300}
                  {
                  ...register('apellido', {
                    required: {
                      value: true,
                      message: 'Campo requerido'
                    },
                    maxLength: {
                      value: 200,
                      message: 'Debe ser menor a 50'
                    },
                    minLength: {
                      value: 2,
                      message: 'Debe ser mayor a 2'
                    },
                    pattern: {
                      value: /^[A-Za-zñÑáéíóúÁÉÍÓÚ]+(?:[ -][A-Za-zñÑáéíóúÁÉÍÓÚ]+)*$/i,
                      message: 'Este campo solo acepta nombres y apellidos'
                    }
                  })}
              ></Form.Control>
              <Form.Text className="text-danger d-block">
                {errors.apellido?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="col-12 col-md-4 mt-2">
              <Form.Label className='text-sm lg:text-large fw-light'>Tipo de Documento (*)</Form.Label>
              <Form.Select
                className='w-full border-2 border-gray-100 rounded-xl p-3 mt-1 '
                {...register('tipoDocumento')}>
                <option value={'DNI'}>DNI</option>
                <option value={'CUIT'}>CUIT</option>
              </Form.Select>
              <Form.Text className="text-danger">
                {errors.tipoDocumento?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className='col-12 col-md-4 mt-2'>
              <Form.Label className='text-sm lg:text-large fw-light'>Nro de Documento (*)</Form.Label>
              <Form.Control
                placeholder="Ingrese su nro"
                className='w-full border-2 border-gray-100 rounded-xl p-3 mt-1 '
                minLength={4}
                maxLength={16}
                  {
                  ...register('nroDocumento', {
                    required: {
                      value: true,
                      message: 'Campo requerido'
                    },
                    maxLength: {
                      value: 16,
                      message: 'Debe ser menor a 16'
                    },
                    minLength: {
                      value: 4,
                      message: 'Debe ser mayor a 4'
                    },
                    pattern: { 
                      value: /^\d{7,8}$|^\d{2}(?:\.\d{3}){2}\d{1}$|^\d{11}$/i,
                      message: 'Este campo solo acepta DNI o CUIL'
                    }
                  })}
              ></Form.Control>
              <Form.Text className="text-danger">
                {errors.nroDocumento?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="col-12 col-md-4 mt-2">
              <Form.Label className='text-sm lg:text-large fw-light'>Condición Tributaria (*)</Form.Label>
              <Form.Select
                className='w-full border-2 border-gray-100 rounded-xl p-3 mt-1 '
                {...register('idCondicionTributaria')}>
                {taxs.map(tax =>
                  <option key={tax.idCondicionTributaria} value={tax.idCondicionTributaria}>{tax.nombre}</option>
                )}
              </Form.Select>
              <Form.Text className="text-danger">
                {errors.idCondicionTributaria?.message}
              </Form.Text>
            </Form.Group>
            <span className="sm:ml-3 flex justify-end mt-3">
              <button type="submit" className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"> { loading ? <Spinner color='light'></Spinner> : <p className='fw-light'> Agregar Cliente </p>}</button>
            </span>
          </Form>
          
        </>
        :
        <>
          <span className="sm:ml-3 flex justify-end">
            <button
              type="button"
              className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={ () => { handleChange() }}
            >
              <FontAwesomeIcon icon={faPerson} className='text-lg mr-2'/>
              Agregar Cliente
            </button>
          </span>
          <div className=''>
            <p className="text-lg font-bolder leading-7 text-gray-900 sm:truncate sm:text-2xl sm:tracking-tight mb-3">
              Buscar cliente ya existente
            </p>
            <form className='flex' onSubmit={ handleSubmit( handleSearch ) }>
              <div className="flex flex-wrap md:flex-nowrap gap-4">
                <Input
                  type="number"
                  label="Nro documento del cliente"
                  {
                  ...register('nroDocumento', {
                    required: {
                      value: true,
                      message: 'Campo requerido'
                    },
                    maxLength: {
                      value: 50,
                      message: 'Debe ser menor a 50'
                    },
                    minLength: {
                      value: 2,
                      message: 'Debe ser mayor a 2'
                    },
                    pattern: {
                      value: /^\d+$/i,
                      message: 'Este campo solo acepta números'
                    }
                  })}
                />
                <span className="text-danger d-block">
                  {errors.nroDocumento?.message}
                </span>
              </div>
              <div className='px-1'>
                <button
                  type="submit"
                  className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  <FontAwesomeIcon icon={faMagnifyingGlass} className='text-lg my-2.5' />
                </button>
              </div>
            </form>
          </div>
          <div className="gap-2 grid grid-cols-1  my-4 ">
          { customer !== undefined ?
            <Card shadow="sm" isPressable onPress={() => { handleSelect(customer.idCliente) }}>
              <CardFooter className="text-small flex justify-between">
                <b className='text-2xl fw-bolder'>{customer.nombre}, {customer.apellido}</b>
                <b className='text-2xl fw-bolder'>{customer.nroDocumento}</b>
              </CardFooter>
            </Card>
            : null
          }
          
        </div>
        </>
      }
    </div>
  )
}
