import { useEffect, useState } from 'react'
import { Form, Spinner } from 'react-bootstrap'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { type UsuarioLogin } from '../models/usuario.d'
import { fetchPOS, handleLogIn } from '../services/servicesLogin'
import { type PuntoDeVentaSimple } from '../models/puntoDeVenta.d'

export const LoginForm = (): JSX.Element => {
  // Initial state of the loading spinner and the Form (React Hook Forms library is used).
  const [loading] = useState(false)
  const { register, formState: { errors }, handleSubmit } = useForm<UsuarioLogin>()

  // Function that logs in the user once the form is submitted.
  const handleSubmitForm: SubmitHandler<UsuarioLogin> = async (data, e) => {
    const access = await handleLogIn(data)
    if (access) {
      window.location.reload()
      window.location.href = '/home'
    }
  }

  //
  const [POS, setPOS] = useState<PuntoDeVentaSimple[]>([])

  const fetchData = async (): Promise<void> => {
    const result = await fetchPOS()
    setPOS(result)
  }

  useEffect(() => {
    fetchData()
  }, [POS])

  return (
    <Form className='row m-0 p-1' onSubmit={ handleSubmit( handleSubmitForm ) }>
      <Form.Group className="col-12 mt-3">
        <Form.Label className='text-sm lg:text-large fw-light'>Usuario</Form.Label>
        <Form.Control
          placeholder="Ingrese nombre de usuario"
          className="input w-full border-2 border-gray-100 rounded-xl p-3 mt-1 text-black"
          minLength={2}
          maxLength={300}
            {
            ...register('Username', {
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
          {errors.Username?.message}
        </Form.Text>
      </Form.Group>
      <Form.Group className='col-12 mt-2'>
        <Form.Label className='text-sm lg:text-large fw-light'>Contraseña</Form.Label>
        <Form.Control
          placeholder="Ingrese contraseña"
          className='w-full border-2 border-gray-100 rounded-xl p-3 mt-1 '
          type="password"
          minLength={4}
          maxLength={16}
            {
            ...register('Password', {
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
          {errors.Password?.message}
        </Form.Text>
      </Form.Group>
      <Form.Group className="col-12 mt-2">
          <Form.Label className='text-sm lg:text-large fw-light'>Punto de Venta</Form.Label>
          <Form.Select
            className='w-full border-2 border-gray-100 rounded-xl p-3 mt-1 '
            {...register('PuntoDeVentaId')}>
            {POS.map(pos =>
              <option key={pos.idPuntoDeVenta} value={pos.idPuntoDeVenta}>{pos.numeroPtoVenta}</option>
            )}
          </Form.Select>
          <Form.Text className="text-danger">
            {errors.PuntoDeVentaId?.message}
          </Form.Text>
        </Form.Group>
      <div className='mt-8 flex flex-col gap-y-4'>
        <button type="submit" className='active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-3 rounded-xl text-black font-bold text-lg bg-white'> { loading ? <Spinner color='light'></Spinner> : <p className='fw-light'> Ingresar </p>}</button>
      </div>
    </Form>
  )
}
