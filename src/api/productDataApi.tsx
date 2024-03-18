import toast from "react-hot-toast"
import { alertText } from "../utils/alertsUtils"

interface ProductApiProps {
  URL: string
}

export const getData = async ({ URL }: Pick<ProductApiProps, 'URL'>): Promise<T> => {
  try {
    const response = await fetch(URL)

    if (!response.ok) {
      toast.error('No se encontro el elemento!')
      return false
    }

    const data: T = await response.json().catch(() => null)
    toast.success('Acción completada correctamente!')
    return data
  } catch (error) {
    console.log('Error:', error)
    throw error
  }
}
