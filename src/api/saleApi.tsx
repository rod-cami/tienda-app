import toast from "react-hot-toast"
import Swal from "sweetalert2"
import { alertText } from "../utils/alertsUtils"

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
      await Swal.fire({
        icon: 'error',
        title: `${alertText(res)}`,
        showConfirmButton: false,
        timer: 2500
      })
      return false
    }

    const sale = await response.json()
    toast.success('Acción completada correctamente!')
    return sale
  } catch (error) {
    console.log('Error:', error)
    throw error
  }
}

export const postFinishData = async ({ URL, data, params }: SaleApiProps): Promise<T> => {
  try {
    const response = await fetch(`${URL}?${params}`, {
      method: 'POST',
      body: data,
      headers: {
        "Content-Type" : "application/json"
      }
    })

    if (!response.ok) {
      const res = await response.text()
      console.log(res)
      await Swal.fire({
        icon: 'error',
        title: `${alertText(res)}`,
        showConfirmButton: false,
        timer: 2500
      })
      return false
    }

    const sale = await response.text()
    await Swal.fire({
      icon: 'success',
      title: `Venta Finalizada con éxito!`,
      showConfirmButton: false,
      timer: 2500
    })
    return true
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
      const res = await response.text()
      await Swal.fire({
        icon: 'error',
        title: `${alertText(res)}`,
        showConfirmButton: false,
        timer: 2500
      })
      return false
    }

    const sale = await response.json()
    toast.success('Acción completada correctamente!')
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
      const res = await response.text()
      await Swal.fire({
        icon: 'error',
        title: `${alertText(res)}`,
        showConfirmButton: false,
        timer: 2500
      })
      return false
    }
    toast.success('Acción completada correctamente!')
    return true
  } catch (error) {
    console.log('Error:', error)
    throw error
  }
}
