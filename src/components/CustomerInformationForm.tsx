import { useEffect, useState } from 'react'
import { Form, Spinner } from 'react-bootstrap'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { type Cliente } from '../models/cliente.d'
import { type CondicionTributaria } from '../models/condicionTributaria.d'
import { getTaxCondition } from '../services/servicesSales'
import { type Venta } from '../models/venta.d'
import { MAXAMOUNT } from '../consts/consts'

export const CustomerInformationForm = (): JSX.Element => {
  const { register, formState: { errors }, handleSubmit } = useForm<Cliente>()
  const [loading, setLoading] = useState<boolean>(false)
  const [sale, setSale] = useState<Venta>({})
  const [form, setForm] = useState<boolean>(true)

  const handleSubmitForm: SubmitHandler<Cliente> = (data, e) => {
    console.log(data)
    setLoading(true)
  }

  //
  const [taxs, setTaxs] = useState<CondicionTributaria[]>([])

  const fetchData = async (): Promise<void> => {
    const result = await getTaxCondition()
    setTaxs(result)
  }

  useEffect(() => {
    fetchData()
    const newSale: Venta = JSON.parse(`${localStorage.getItem('sale')}`)
    setSale(newSale)
    if (newSale.monto < MAXAMOUNT) {
      setForm(false)
    }
  }, [taxs])

  return (
    <div>
      {
        form ?
        <>
          <p>Debido al monto de la compra (${sale.monto}), debe completar el siguiente formulario con la información personal del cliente. Todos los campos marcados con (*) son obligatorios.</p>
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
            <Form.Group className='col-12 col-md-4 mt-2'>
              <Form.Label className='text-sm lg:text-large fw-light'>DNI (*)</Form.Label>
              <Form.Control
                placeholder="Ingrese su dni"
                className='w-full border-2 border-gray-100 rounded-xl p-3 mt-1 '
                minLength={4}
                maxLength={16}
                  {
                  ...register('dni', {
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
                      value: /^(?:\d{7,8}|(?:\d{2}\.){2}\d{3,4})$/i,
                      message: 'Este campo solo acepta DNI'
                    }
                  })}
              ></Form.Control>
              <Form.Text className="text-danger">
                {errors.dni?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className='col-12 col-md-4 mt-2'>
              <Form.Label className='text-sm lg:text-large fw-light'>Cuil (*)</Form.Label>
              <Form.Control
                placeholder="Ingrese su Cuil"
                className='w-full border-2 border-gray-100 rounded-xl p-3 mt-1 '
                minLength={4}
                maxLength={16}
                  {
                  ...register('cuil', {
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
                      value: /^\d{2}-\d{8}-\d$/i,
                      message: 'Este campo solo acepta CUIL'
                    }
                  })}
              ></Form.Control>
              <Form.Text className="text-danger">
                {errors.cuil?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="col-12 col-md-4 mt-2">
              <Form.Label className='text-sm lg:text-large fw-light'>Condición Tributaria (*)</Form.Label>
              <Form.Select
                className='w-full border-2 border-gray-100 rounded-xl p-3 mt-1 '
                {...register('idCondicionTributaria')}>
                {taxs.map(tax => 
                  <option key={tax.idCondicionTributaria} value={tax.idCondicionTributaria}>{tax.descripcion}</option>
                )}
              </Form.Select>
              <Form.Text className="text-danger">
                {errors.idCondicionTributaria?.message}
              </Form.Text>
            </Form.Group>
            <div className='mt-8 flex flex-col gap-y-4'>
              <button type="submit" className='active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-3 rounded-xl text-white font-bold text-lg bg-black'> { loading ? <Spinner color='light'></Spinner> : <p className='fw-light'> Finalizar compra </p>}</button>
            </div>
          </Form>
        </>
        :
        <>
          <p>Por favor, complete su venta realizando el pago total de ${sale.monto}.</p>
          <div className='mt-8 flex flex-col gap-y-4'>
            <button type="button" className='active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-3 rounded-xl text-white font-bold text-lg bg-black'> { loading ? <Spinner color='light'></Spinner> : <p className='fw-light'> Finalizar compra </p>}</button>
          </div>
        </>
      }
    </div>
  )
}
