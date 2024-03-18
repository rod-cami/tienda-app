import { card } from '@nextui-org/react'
import { getData } from '../api/productDataApi'
import { deleteSaleLine, getAuthorize, postData, postFinishData, putData } from '../api/saleApi'
import { URL } from '../consts/consts'
import Swal from 'sweetalert2'
import { type Cliente } from '../models/cliente.d'
import { type CondicionTributaria } from '../models/condicionTributaria.d'
import { DatosTarjeta, DatosTarjetaForm, Tarjeta, Titular } from '../models/datosTarjeta.d'
import { type Empleado } from '../models/empleado.d'
import { type LineaDeVenta } from '../models/lineaDeVenta.d'
import { type Sesion } from '../models/sesion.d'
import { type Sucursal } from '../models/sucursal.d'
import { type Venta } from '../models/venta.d'

export const startSale = async (): Promise<boolean> => {
  const sesion: Sesion = JSON.parse(`${localStorage.getItem('sesion')}`)
  const data = {
    sesionId: sesion.idSesion
  }
  const sale = await postData({ URL: `${URL}/venta/iniciar`, data: JSON.stringify(data) })
  if (sale !== false) {
    console.log(sale)
    localStorage.setItem('sale', JSON.stringify(sale))
    localStorage.setItem('pay', JSON.stringify('Efectivo'))
    return true
  }
  return false
}

export const getTaxCondition = async (): Promise<CondicionTributaria[]> => {
  const taxConditions = await getData({ URL: `${URL}/condiciontributaria` })
  return taxConditions
}

export const addSaleLine = async (Cantidad: string, InventarioId: string): Promise<T> => {
  const sale: Venta = JSON.parse(`${localStorage.getItem('sale')}`)
  const VentaId: string = `${sale.idVenta}`
  const data = {
    cantidad: Cantidad,
    inventarioId: InventarioId
  }

  const result: LineaDeVenta = await postData({ URL: `${URL}/venta/${VentaId}/lineadeventa/agregar`, data: JSON.stringify(data) })
  console.log(result)

  const newSale = await getData({ URL: `${URL}/venta/${VentaId}` })

  if (newSale !== false) {
    console.log(result)
    localStorage.setItem('sale', JSON.stringify(newSale))
    return result
  }
  return false
}

export const endSale = async (): Promise<boolean> => {
  const sale: Venta = JSON.parse(`${localStorage.getItem('sale')}`)
  const params = new URLSearchParams({
    ventaId: `${sale.idVenta}`
  })

  const newSale = await putData({ URL: `${URL}/venta/cancelar`, params: params })
  if (newSale !== false) {
    localStorage.removeItem('sale')
    localStorage.removeItem('card')
    localStorage.removeItem('pay')
    localStorage.setItem('products', JSON.stringify([]))
    return true
  }
  return false
}

export const removeSaleLine = async (LineaDeVentaId: string): Promise<boolean> => {
  const sale: Venta = JSON.parse(`${localStorage.getItem('sale')}`)
  const VentaId = `${sale.idVenta}`
  const result = await deleteSaleLine({ URL: `${URL}/venta/${VentaId}/lineadeventa/quitar/${LineaDeVentaId}` })

  if (result !== false) {
    const newSale = await getData({ URL: `${URL}/venta/${VentaId}` })
    localStorage.setItem('sale', JSON.stringify(newSale))
    return true
  }
  return false
}

export const getEmployee = async (): Promise<Empleado> => {
  const sale: Venta = JSON.parse(`${localStorage.getItem('sale')}`)
  const employee: Empleado = await getData({ URL: `${URL}/empleado/${sale.usuario.idEmpleado}` })

  return employee
}

export const getBranch = async (): Promise<Sucursal> => {
  const sale: Venta = JSON.parse(`${localStorage.getItem('sale')}`)
  const branch: Sucursal = await getData({ URL: `${URL}/sucursal/${sale.puntoDeVenta.idSucursal}` })

  return branch
}

export const getCustomer = async (nroDocumento: string): Promise<T> => {
  const customers: Cliente[] = await getData({ URL: `${URL}/cliente` })
  console.log(customers)
  const foundCustomer = customers.find((customer) => `${customer.nroDocumento}` === `${nroDocumento}`)

  return foundCustomer
}

export const addCustomerToSale = async (idCliente: string): Promise<boolean> => {
  const sale: Venta = JSON.parse(`${localStorage.getItem('sale')}`)
  const params = new URLSearchParams({
    clienteId: `${idCliente}`
  })

  const result = await putData({ URL: `${URL}/venta/${sale.idVenta}/cliente/modificar`, params: params })
  console.log(result)
  if (result !== false) {
    const newSale = await getData({ URL: `${URL}/venta/${sale.idVenta}` })
    localStorage.setItem('sale', JSON.stringify(newSale))
    return true
  }
  return false
}

export const finishSale = async (): Promise<boolean> => {
  const pay: string = JSON.parse(`${localStorage.getItem('pay')}`)
  const sale: Venta = JSON.parse(`${localStorage.getItem('sale')}`)
  let data
  const params = new URLSearchParams({
    ventaId: `${sale.idVenta}`
  })

  if (pay === 'Efectivo') {
    data = {
      esTarjeta: false
    }
  } else if (pay === 'Tarjeta') {
    data = JSON.parse(`${localStorage.getItem('card')}`)
  }

  const result = await postFinishData({ URL: `${URL}/venta/finalizar`, data: JSON.stringify(data), params })
  if (result !== false) {
    console.log(result)
    localStorage.removeItem('sale')
    localStorage.removeItem('pay')
    localStorage.setItem('products', JSON.stringify([]))
    return true
  }
  return false
}

export const createCard = (data: DatosTarjetaForm): void => {
  const dateString = `${data.fechaExpiracion}`
  const [year, month] = dateString.split('-')

  localStorage.setItem('pay', JSON.stringify('Tarjeta'))
  const sale: Venta = JSON.parse(`${localStorage.getItem('sale')}`)

  if (sale.cliente.idCliente === 0) {
    Swal.fire("Necesita un cliente")
  }

  const tipoDoc = sale.cliente.tipoDocumento === 'CUIT' ? 1 : 0

  const titular: Titular = {
    nombreCompleto: `${sale.cliente.apellido} ${sale.cliente.nombre}`,
    tipoDocumento: tipoDoc,
    nroDocumento: sale.cliente.nroDocumento
  }

  const datosTarjeta: DatosTarjeta = {
    numeroTarjeta: data.numeroTarjeta,
    titular: titular,
    mesExpiracion: `${month}`,
    añoExpiracion: `${year[2]}${year[3]}`,
    cvv: data.cvc
  }

  const tarjeta: Tarjeta = {
    esTarjeta: true,
    datosTarjeta: datosTarjeta
  }

  localStorage.setItem('card', JSON.stringify(tarjeta))
}

export const createCustomer = async (dataForm: Cliente): Promise<boolean> => {
  const data = {
    tipoDocumento: dataForm.tipoDocumento,
    nroDocumento: dataForm.nroDocumento,
    nombre: dataForm.nombre,
    apellido: dataForm.apellido,
    domicilio: 'sin domicilio',
    idCondicionTributaria: dataForm.idCondicionTributaria
  }
  const customer: Cliente = await postData({ URL: `${URL}/cliente`, data: JSON.stringify(data) })
  if (customer !== false) {
    const sale1: Venta = JSON.parse(`${localStorage.getItem('sale')}`)
    const params = new URLSearchParams({
      clienteId: `${customer.idCliente}`
    })
    const newSale = await putData({ URL: `${URL}/venta/${sale1.idVenta}/cliente/modificar`, params })
    console.log(newSale)
    localStorage.setItem('sale', JSON.stringify(newSale))
    localStorage.setItem('pay', JSON.stringify('Efectivo'))
    return true
  }
  return false
}
