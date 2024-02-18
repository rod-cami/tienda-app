import { type ProductoCarrito } from '../models/products.d'

export const calculateTotalPrices = (products: ProductoCarrito[]): number => {
  let total = 0
  for (const product of products) {
    total += product.Precio
  }
  return total
}
