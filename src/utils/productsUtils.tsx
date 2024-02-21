import { ProductsInventory, type Producto } from '../models/products.d'
import { UsuarioEx } from '../models/usuario.d'
import { type Rows } from '../types/types.d'

export const calculatePrice = (product: Producto): number => {
  const priceString = (product.Articulo.Costo + (product.Articulo.Costo * product.Articulo.MargenGanancia) + (product.Articulo.Costo * product.Articulo.PorcentajeIVA)).toFixed(2)
  return parseFloat(priceString)
}

export const updateTableRows = (products: Producto[]): Rows[] => {
  const itemsNew: Rows[] = []
  for (const product of products) {
    const item: Rows = {
      key: product.IdInventario,
      nombre: `${product.Articulo.Descripcion} ${product.Articulo.Marca.Descripcion}`,
      talle: `${product.Talle.Medida}`,
      color: product.Color.Nombre,
      precio: calculatePrice(product),
      cantidad: product.Cantidad
    }
    itemsNew.push(item)
  }
  return itemsNew
}

export const updateListProducts = (id: number): Producto[] => {
  const user: UsuarioEx = JSON.parse(`${localStorage.getItem('user')}`)
  const newList: Producto[] = []
  for (const product of ProductsInventory) {
    if (id === product.Articulo.Codigo && user.Empleado.IdSucursal === product.Sucursal.IdSucursal) {
      newList.push(product)
    }
  }
  return newList
}

export const updateSaleLine = (product: Rows, quantity: number): void => {
  const productsCarrito = JSON.parse(`${localStorage.getItem('products')}`)
  const newProduct = product
  newProduct.cantidad = quantity
  newProduct.precio = quantity * product.precio
  productsCarrito.push(newProduct)
  localStorage.setItem('products', JSON.stringify(productsCarrito))
}
