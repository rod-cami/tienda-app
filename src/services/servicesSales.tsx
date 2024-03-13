import { getData } from '../api/productDataApi'
import { deleteSaleLine, getAuthorize, postData, putData } from '../api/saleApi'
import { URL } from '../consts/consts'
import { type CondicionTributaria } from '../models/condicionTributaria.d'
import { Empleado } from '../models/empleado.d'
import { type LineaDeVenta } from '../models/lineaDeVenta.d'
import { type Sesion } from '../models/sesion.d'
import { Sucursal } from '../models/sucursal.d'
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
    return true
  }
  return false
}

export const getTaxCondition = async (): Promise<CondicionTributaria[]> => {
  const taxConditions = await getData({ URL: `${URL}/condiciontributaria` })
  const simplifiedTaxConditions: CondicionTributaria[] = taxConditions
    .map(tax => ({
      idCondicionTributaria: tax.idCondicionTributaria,
      descripcion: tax.descripcion,
      idTipoDeComprobante: tax.tipoDeComprobante.idTipoDeComprobante
    }))
  return simplifiedTaxConditions
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

export const authorizeAFIP = (): void => {
  const result: boolean = getAuthorize()
  if (result) {
    console.log('Se autorizo afip')
  }
}

export const authorizePaymentSystem = (): void => {
  const result: boolean = getAuthorize()
  if (result) {
    console.log('Se autorizo sistema de pagos')
  }
}
