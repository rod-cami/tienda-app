import React, { useState } from 'react'
import { Form, Spinner } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { type CreditCard } from '../models/cliente.d'

export const CreditCardInformationForm = (): JSX.Element => {
  const { register, formState: { errors }, handleSubmit} = useForm()
  const [loading, setLoading] = useState<boolean>(false)

  const handleSubmitForm = (data: CreditCard, e: React.FormEvent): void => {
    setLoading(true)
    console.log(data)
  }

  return (
    <div>
      <p>Por favor, completa el siguiente formulario con tu información personal. Todos los campos marcados con (*) son obligatorios.</p>
      <Form className='row m-0 p-1' onSubmit={ () => handleSubmit(handleSubmitForm)}>
        <Form.Group className="col-12 col-md-6 mt-2">
          <Form.Label className='text-sm lg:text-large fw-light'>Nombre y Apellido (*)</Form.Label>
          <Form.Control
            placeholder="Ingrese su nombre y apellido"
            className="input w-full border-2 border-gray-100 rounded-xl p-3 mt-1 text-black"
            name="name"
            minLength={2}
            maxLength={300}
              {
              ...register('name', {
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
                  value: /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+(?:\s+[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+){1,5}(?:\s+[-\sa-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+)?$/i,
                  message: 'Este campo solo acepta nombres y apellidos'
                }
              })}
          ></Form.Control>
          <Form.Text className="text-danger d-block">
            {errors.name?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className='col-12 col-md-6 mt-2'>
          <Form.Label className='text-sm lg:text-large fw-light'>DNI (*)</Form.Label>
          <Form.Control
            placeholder="Ingrese su dni"
            className='w-full border-2 border-gray-100 rounded-xl p-3 mt-1 '
            name="dni"
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
                  value: /^ \ d {1,2} \.? \ d {3} \.? \ d {3} $/i,
                  message: 'Este campo solo acepta DNI'
                }
              })}
          ></Form.Control>
          <Form.Text className="text-danger">
            {errors.dni?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className='col-12 mt-2'>
          <Form.Label className='text-sm lg:text-large fw-light'>Número de Tarjeta (*)</Form.Label>
          <Form.Control
            placeholder="Ingrese su número de tarjeta"
            className='w-full border-2 border-gray-100 rounded-xl p-3 mt-1 '
            name="cardNumber"
            minLength={4}
            maxLength={16}
              {
              ...register('cardNumber', {
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
            {errors.cardNumber?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className='col-12 col-md-6 mt-2'>
          <Form.Label className='text-sm lg:text-large fw-light'>Fecha de Expiración (*)</Form.Label>
          <Form.Control
            placeholder="Ingrese fecha de expiración"
            className="w-full border-2 border-gray-100 rounded-xl p-3 mt-1 "
            type='date'
            name="dateEx"
              {
              ...register('dateEx', {
                required: {
                  value: true,
                  message: 'Campo requerido'
                }
              })}
          ></Form.Control>
          <Form.Text className="text-danger">
            {errors.dateEx?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className='col-6 mt-2'>
          <Form.Label className='text-sm lg:text-large fw-light'>CVC (*)</Form.Label>
          <Form.Control
            placeholder="Ingrese su CVC"
            className='w-full border-2 border-gray-100 rounded-xl p-3 mt-1 '
            name="cvc"
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
          <button type="submit" className='active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-3 rounded-xl text-white font-bold text-lg bg-black'> { loading ? <Spinner color='light'></Spinner> : <p className='fw-light'> Finalizar compra </p>}</button>
        </div>
      </Form>
    </div>
  )
}
