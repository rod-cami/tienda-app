import { ProductsInventory } from '../models/products.d'
import { type Rows } from '../types/types.d'

export const getSalesLines = (): Rows[] => {
  const productsLineSale: Rows[] = JSON.parse(`${localStorage.getItem('products')}`)
  const products = []
  for (const pcto of ProductsInventory) {
    for (const pctoCarrito of productsLineSale) {
      if (pcto.IdInventario === pctoCarrito.key) {
        products.push(pctoCarrito)
      }
    }
  }
  return products
}

export const calculateTotalPrices = (products: Rows[]): number => {
  let total = 0
  for (const product of products) {
    total += product.precio
  }
  return total
}
