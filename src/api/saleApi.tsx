interface SaleApiProps {
  URL: string
  data?: string
  params?: URLSearchParams
}

export const postData = async ({ URL, data }: SaleApiProps): Promise<T> => {
  try {
    const response = await fetch(URL, {
      method: 'POST',
      body: data,
      headers: {
        "Content-Type" : "application/json"
      }
    })

    if (!response.ok) {
      const res = await response.text()

      console.log(res)
      return false
      // const errorMessage = `Request failed with status: ${response.status}`
      // throw new Error(errorMessage)
    }

    const sale = await response.json()
    console.log(sale)
    return sale
  } catch (error) {
    console.log('Error:', error)
    throw error
  }
}

export const putData = async ({ URL, params }: SaleApiProps): Promise<T> => {
  try {
    const response = await fetch(`${URL}?${params}`, {
      method: 'PUT',
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

export const deleteSaleLine = async ({ URL }: SaleApiProps): Promise<T> => {
  try {
    const response = await fetch(`${URL}`, {
      method: 'DELETE',
      headers: { 'accept': '*/*' }
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
