import { LineaDeVenta } from '../models/lineaDeVenta.d'
import { removeSaleLine } from '../services/servicesSales'
import { type Rows } from '../types/types.d'

export const getSalesLines = (): LineaDeVenta[] => {
  const productsLineSale: LineaDeVenta[] = JSON.parse(`${localStorage.getItem('products')}`)
  return productsLineSale
}

export const deleteSalesLine = async (index: number, key: string): Promise<boolean> => {
  const productsLineSale: LineaDeVenta[] = JSON.parse(`${localStorage.getItem('products')}`)
  const updatedProducts = productsLineSale.filter((_, i) => i !== index)
  localStorage.setItem('products', JSON.stringify(updatedProducts))
  const result = await removeSaleLine(`${key}`)
  if (result) {
    console.log('borro bien')
    return true
  }
  return false
}

export const calculateTotalPrices = (products: Rows[]): number => {
  let total = 0
  for (const product of products) {
    total += product.precio
  }
  return total
}
