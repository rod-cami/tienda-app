import React, { useState } from 'react'
import { Form, Spinner } from 'react-bootstrap'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { type Users } from '../models/usuario.d'
import { handleLogin } from '../services/servicesLogin'

export const LoginForm = (): JSX.Element => {
  const [loading] = useState(false)
  const { register, formState: { errors }, handleSubmit } = useForm<Users>()

  const handleSubmitForm: SubmitHandler<Users> = (data, e) => {
    console.log(data)
    if (handleLogin(data)) {
      window.location.reload()
      window.location.href = '/home'
      e.target.reset()
    } else {
      console.log('no entro')
    }
  }

  return (
    <Form className='row m-0 p-1' onSubmit={ handleSubmit( handleSubmitForm ) }>
      <Form.Group className="col-12 mt-3">
        <Form.Label className='text-lg fw-light'>Username</Form.Label>
        <Form.Control
          placeholder="Ingrese username"
          className="input w-full border-2 border-gray-100 rounded-xl p-3 mt-1 text-black"
          minLength={2}
          maxLength={300}
            {
            ...register('username', {
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
                value: /^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/i,
                message: 'Este campo solo acepta Usernames'
              }
            })}
        ></Form.Control>
        <Form.Text className="text-danger tamLetra d-block">
          {errors.username?.message}
        </Form.Text>
      </Form.Group>
      <Form.Group className='col-12 mt-2'>
        <Form.Label className='text-lg fw-light'>Contraseña</Form.Label>
        <Form.Control
          placeholder="Ingrese contraseña"
          className='w-full border-2 border-gray-100 rounded-xl p-3 mt-1 '
          type="password"
          minLength={4}
          maxLength={16}
            {
            ...register('password', {
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
                value: /^[a-zA-Z]+[0-9]+$/i,
                message: 'La contraseña debe tener al entre 4 y 16 caracteres con números y letras'
              }
            })}
        ></Form.Control>
        <Form.Text className="text-danger tamLetra">
          {errors.password?.message}
        </Form.Text>
      </Form.Group>
      <div className='mt-8 flex flex-col gap-y-4'>
        <button type="submit" className='active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-3 rounded-xl text-black font-bold text-lg bg-white'> { loading ? <Spinner color='light'></Spinner> : <p className='fw-light'> Ingresar </p>}</button>
      </div>
    </Form>
  )
}
