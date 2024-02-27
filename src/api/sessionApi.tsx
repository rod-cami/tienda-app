import { type UsuarioLogin } from '../models/usuario.d'

interface SessionApiProps {
  URL: string
  data?: UsuarioLogin
  sesionId?: string
}

export const getPointOfSale = async ({ URL }: Pick<SessionApiProps, 'URL'>): Promise<T> => {
  try {
    const response = await fetch(URL)

    if (!response.ok) {
      const errorMessage = `Request failed with status: ${response.status}`
      throw new Error(errorMessage)
    }

    const data: T = await response.json().catch(() => null)
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
      return false
      // const errorMessage = `Request failed with status: ${response.status}`
      // throw new Error(errorMessage)
    }

    const session = await response.json()
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
      return false
      // const errorMessage = `Request failed with status: ${response.status}`
      // throw new Error(errorMessage)
    }

    return true
  } catch (error) {
    console.log('Error:', error)
    throw error
  }
}
