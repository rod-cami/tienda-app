import { type Inventario } from '../models/inventario.d'
import { type Sesion } from '../models/sesion.d'
import { getArticlesInventory } from '../services/servicesProducts'
import { addSaleLine } from '../services/servicesSales'
import { type Rows } from '../types/types.d'

export const calculatePrice = (product: Inventario): number => {
  const netoGravado = product.articulo.costo + (product.articulo.costo * (product.articulo.margenGanancia / 100))
  const iva = netoGravado * (product.articulo.porcentajeIVA / 100)
  const priceString = (netoGravado + iva).toFixed(2)
  return parseFloat(priceString)
}

export const updateTableRows = (products: Inventario[]): Rows[] => {
  const itemsNew: Rows[] = []
  for (const product of products) {
    const item: Rows = {
      key: product.idInventario,
      nombre: `${product.articulo.descripcion} ${product.articulo.marca.descripcion}`,
      talle: `${product.talle.medida}`,
      color: product.color.nombre,
      precio: calculatePrice(product),
      cantidad: product.cantidad
    }
    itemsNew.push(item)
  }
  return itemsNew
}

export const updateListProducts = async (id: string): Promise<Inventario[]> => {
  const sesion: Sesion = JSON.parse(`${localStorage.getItem('sesion')}`)
  const inventoryListPromise: Promise<Inventario[]> = getArticlesInventory()
  const inventoryList: Inventario[] = await inventoryListPromise
  console.log(inventoryList)
  const newList: Inventario[] = []

  for (const product of inventoryList) {
    if (id === product.articulo.codigo && sesion.puntoDeVenta.idSucursal === product.sucursal.idSucursal) {
      newList.push(product)
    }
  }

  return newList
}

export const updateSaleLine = async (product: Rows, quantity: number): Promise<boolean> => {
  const res = await addSaleLine(`${quantity}`, `${product.key}`)
  const productsCarrito = JSON.parse(`${localStorage.getItem('products')}`)
  const newProduct = product
  newProduct.cantidad = quantity
  newProduct.precio = quantity * product.precio
  newProduct.idLineaDeVenta = res
  productsCarrito.push(newProduct)
  localStorage.setItem('products', JSON.stringify(productsCarrito))
  return res
}
