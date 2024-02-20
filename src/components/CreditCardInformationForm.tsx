import { useState } from 'react'
import { Form, Spinner } from 'react-bootstrap'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { type ClienteEx } from '../models/cliente.d'

export const CreditCardInformationForm = (): JSX.Element => {
  const { register, formState: { errors }, handleSubmit } = useForm<ClienteEx>()
  const [loading, setLoading] = useState<boolean>(false)

  const handleSubmitForm: SubmitHandler<ClienteEx> = (data, e): void => {
    setLoading(true)
    console.log(data)
  }

  return (
    <div>
      <p>Por favor, completa el siguiente formulario con tu información personal. Todos los campos marcados con (*) son obligatorios.</p>
      <Form className='row m-0 p-1' onSubmit={ handleSubmit( handleSubmitForm ) }>
      <Form.Group className="col-12 col-md-6 mt-3">
          <Form.Label className='text-sm lg:text-large fw-light'>Nombre(*)</Form.Label>
          <Form.Control
            placeholder="Ingrese su nombre"
            className="input w-full border-2 border-gray-100 rounded-xl p-3 mt-1 text-black"
            minLength={2}
            maxLength={300}
              {
              ...register('Nombre', {
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
            {errors.Nombre?.message}
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
              ...register('Apellido', {
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
            {errors.Apellido?.message}
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
              ...register('Dni', {
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
            {errors.Dni?.message}
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
              ...register('Cuil', {
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
            {errors.Cuil?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="col-12 col-md-4 mt-2">
          <Form.Label className='text-sm lg:text-large fw-light'>Condición Tributaria (*)</Form.Label>
          <Form.Select
            className='w-full border-2 border-gray-100 rounded-xl p-3 mt-1 '
            {...register('IdCondicionTributaria')}>
            <option value='F'>Femenino</option>
            <option value='M'>Masculino</option>
          </Form.Select>
          <Form.Text className="text-danger">
            {errors.IdCondicionTributaria?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className='col-12 mt-2'>
          <Form.Label className='text-sm lg:text-large fw-light'>Número de Tarjeta (*)</Form.Label>
          <Form.Control
            placeholder="Ingrese su número de tarjeta"
            className='w-full border-2 border-gray-100 rounded-xl p-3 mt-1 '
            minLength={4}
            maxLength={16}
              {
              ...register('Tarjeta', {
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
            {errors.Tarjeta?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className='col-12 col-md-6 mt-2'>
          <Form.Label className='text-sm lg:text-large fw-light'>Fecha de Expiración (*)</Form.Label>
          <Form.Control
            placeholder="Ingrese fecha de expiración"
            className="w-full border-2 border-gray-100 rounded-xl p-3 mt-1 "
            type='date'
              {
              ...register('Fecha_Expiracion', {
                required: {
                  value: true,
                  message: 'Campo requerido'
                }
              })}
          ></Form.Control>
          <Form.Text className="text-danger">
            {errors.Fecha_Expiracion?.message}
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
              ...register('CVC', {
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
            {errors.CVC?.message}
          </Form.Text>
        </Form.Group>
        <div className='mt-8 flex flex-col gap-y-4'>
          <button type="submit" className='active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-3 rounded-xl text-white font-bold text-lg bg-black'> { loading ? <Spinner color='light'></Spinner> : <p className='fw-light'> Finalizar compra </p>}</button>
        </div>
      </Form>
    </div>
  )
}
