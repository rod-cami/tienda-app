import { useEffect, useState } from 'react'
import { Form, Spinner } from 'react-bootstrap'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { type ClienteEx } from '../models/cliente.d'
import { createCard, getTaxCondition } from '../services/servicesSales'
import { type CondicionTributaria } from '../models/condicionTributaria.d'
import Swal from 'sweetalert2'
import { DatosTarjeta, DatosTarjetaForm, Tarjeta } from '../models/datosTarjeta.d'
import { Venta } from '../models/venta.d'

export const CreditCardInformationForm = (): JSX.Element => {
  const { register, formState: { errors }, handleSubmit } = useForm<DatosTarjetaForm>()
  const [loading, setLoading] = useState<boolean>(false)

  const handleSubmitForm: SubmitHandler<DatosTarjetaForm> = async (data, e): void => {
    const sale: Venta = JSON.parse(`${localStorage.getItem('sale')}`)

    if (sale.cliente.idCliente === 0) {
      await Swal.fire('Debe ingresar un Cliente Primero!!! la tarjeta no se guardo')
    } else {
      setLoading(true)
      createCard(data)
      console.log(data)
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

  return (
    <div>
      <p>Por favor, completa el siguiente formulario con tu información personal. Todos los campos marcados con (*) son obligatorios.</p>
      <Form className='row m-0 p-1' onSubmit={ handleSubmit( handleSubmitForm ) }>
        <Form.Group className='col-12 mt-2'>
          <Form.Label className='text-sm lg:text-large fw-light'>Número de Tarjeta (*)</Form.Label>
          <Form.Control
            placeholder="Ingrese su número de tarjeta"
            className='w-full border-2 border-gray-100 rounded-xl p-3 mt-1 '
            minLength={4}
            maxLength={16}
              {
              ...register('numeroTarjeta', {
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
                  value: /^\d+$/i,
                  message: 'Este campo solo acepta DNI'
                }
              })}
          ></Form.Control>
          <Form.Text className="text-danger">
            {errors.numeroTarjeta?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className='col-12 col-md-6 mt-2'>
          <Form.Label className='text-sm lg:text-large fw-light'>Fecha de Expiración (*)</Form.Label>
          <Form.Control
            placeholder="Ingrese fecha de expiración"
            className="w-full border-2 border-gray-100 rounded-xl p-3 mt-1 "
            type='date'
              {
              ...register('fechaExpiracion', {
                required: {
                  value: true,
                  message: 'Campo requerido'
                }
              })}
          ></Form.Control>
          <Form.Text className="text-danger">
            {errors.fechaExpiracion?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className='col-6 mt-2'>
          <Form.Label className='text-sm lg:text-large fw-light'>CVC (*)</Form.Label>
          <Form.Control
            placeholder="Ingrese su CVC"
            className='w-full border-2 border-gray-100 rounded-xl p-3 mt-1 '
            minLength={1}
            maxLength={5}
              {
              ...register('cvc', {
                required: {
                  value: true,
                  message: 'Campo requerido'
                },
                maxLength: {
                  value: 5,
                  message: 'Debe ser menor a 5'
                },
                minLength: {
                  value: 1,
                  message: 'Debe ser mayor a 1'
                },
                pattern: { 
                  value: /^\d+$/i,
                  message: 'Este campo solo acepta cvc'
                }
              })}
          ></Form.Control>
          <Form.Text className="text-danger">
            {errors.cvc?.message}
          </Form.Text>
        </Form.Group>
        <div className='mt-8 flex flex-col gap-y-4'>
          <button type="submit" className='active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-3 rounded-xl text-white font-bold text-lg bg-black'> { loading ? <Spinner color='light'></Spinner> : <p className='fw-light'> Guardar tarjeta </p>}</button>
        </div>
      </Form>
    </div>
  )
}
