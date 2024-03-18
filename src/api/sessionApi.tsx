import toast from 'react-hot-toast'
import { type UsuarioLogin } from '../models/usuario.d'
import { alertText } from '../utils/alertsUtils'

interface SessionApiProps {
  URL: string
  data?: UsuarioLogin
  sesionId?: string
}

export const getPointOfSale = async ({ URL }: Pick<SessionApiProps, 'URL'>): Promise<T> => {
  try {
    const response = await fetch(URL)

    if (!response.ok) {
      const res = await response.text()
      const text = alertText(res)
      toast.error(text)
    }

    const data: T = await response.json().catch(() => null)
    // toast.success('Acción completada correctamente!')
    return data
  } catch (error) {
    console.log('Error:', error)
    throw error
  }
}

export const logIn = async ({ URL, data }: SessionApiProps): Promise<T> => {
  const params = new URLSearchParams({
    Username: data.Username,
    Password: data.Password,
    PuntoDeVentaId: data.PuntoDeVentaId
  })

  try {
    const response = await fetch(`${URL}?${params}`, {
      method: 'POST',
      headers: {
        'accept': 'text/plain'
      },
      body: ''
    })

    if (!response.ok) {
      const res = await response.text()
      const text = alertText(res)
      toast.error(text)
      return false
    }

    const session = await response.json()
    toast.success('Acción completada correctamente!')
    return session
  } catch (error) {
    console.log('Error:', error)
    throw error
  }
}

export const logOut = async ({ URL, sesionId }: Pick<SessionApiProps, 'URL' | 'sesionId'>): Promise<boolean> => {
  const params = new URLSearchParams({ sesionId: `${sesionId}` })

  try {
    const response = await fetch(`${URL}?${params}`, {
      method: 'PUT',
      headers: {
        'accept': 'text/plain'
      },
      body: ''
    })

    if (!response.ok) {
      const res = await response.text()
      const text = alertText(res)
      toast.error(text)
      return false
    }

    toast.success('Acción completada correctamente!')
    return true
  } catch (error) {
    console.log('Error:', error)
    throw error
  }
}
