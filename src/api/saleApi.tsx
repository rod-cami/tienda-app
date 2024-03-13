interface SaleApiProps {
  URL: string
  UsuarioId?: string
  PuntoDeVentaId?: string
  idVenta?: string
}

export const postSale = async ({ URL, UsuarioId, PuntoDeVentaId }: SaleApiProps): Promise<T> => {
  const params = new URLSearchParams({
    UsuarioId,
    PuntoDeVentaId
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

    const sale = await response.json()
    return sale
  } catch (error) {
    console.log('Error:', error)
    throw error
  }
}

export const putSale = async ({ URL, idVenta }: SaleApiProps): Promise<T> => {
  const params = new URLSearchParams({
    idVenta: `${idVenta}`
  })

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

    const sale = await response.json()
    return sale
  } catch (error) {
    console.log('Error:', error)
    throw error
  }
}

interface SaleLineApiProps {
  URL: string
  VentaId: string
  Cantidad?: string
  InventarioId?: string
  LineaDeVentaId?: string
}

export const postSaleLine = async({ URL, VentaId, Cantidad, InventarioId }: SaleLineApiProps): Promise<T> => {
  const params = new URLSearchParams({
    VentaId,
    Cantidad,
    InventarioId
  })

  try {
    const response = await fetch(`${URL}?${params}`, {
      method: 'POST',
      headers: { 'accept': 'text/plain' },
      body: ''
    })

    if (!response.ok) {
      return false
      // const errorMessage = `Request failed with status: ${response.status}`
      // throw new Error(errorMessage)
    }

    const sale = await response.json()
    return sale
  } catch (error) {
    console.log('Error:', error)
    throw error
  }
}

export const deleteSaleLine = async({ URL, VentaId, LineaDeVentaId }: SaleLineApiProps): Promise<T> => {
  const params = new URLSearchParams({
    VentaId,
    LineaDeVentaId: `${LineaDeVentaId}`
  })

  try {
    const response = await fetch(`${URL}?${params}`, {
      method: 'DELETE',
      headers: { 'accept': 'text/plain' },
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

export const getAuthorize = (): boolean => {
  return true
}
