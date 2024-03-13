import { removeSaleLine } from '../services/servicesSales'
import { type Rows } from '../types/types.d'

export const getSalesLines = (): Rows[] => {
  const productsLineSale: Rows[] = JSON.parse(`${localStorage.getItem('products')}`)
  const products = []
  for (const pctoCarrito of productsLineSale) {
    const subtotal = pctoCarrito.precio * pctoCarrito.cantidad

    const productWithSubtotal: Rows = {
      ...pctoCarrito,
      subtotal
    }

    products.push(productWithSubtotal)
  }
  return products
}

export const deleteSalesLine = async (index: number, key: string): boolean => {
  const productsLineSale: Rows[] = JSON.parse(`${localStorage.getItem('products')}`)
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
