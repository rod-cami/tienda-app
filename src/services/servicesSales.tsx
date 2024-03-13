import { getData } from '../api/productDataApi'
import { deleteSaleLine, getAuthorize, postSale, postSaleLine, putSale } from '../api/saleApi'
import { URL } from '../consts/consts'
import { type CondicionTributaria } from '../models/condicionTributaria.d'
import { type LineaDeVenta } from '../models/lineaDeVenta.d'
import { type Venta } from '../models/venta.d'

export const startSale = async (UsuarioId: string, PuntoDeVentaId: string): Promise<boolean> => {
  const sale = await postSale({ URL: `${URL}/Venta/Iniciar`, UsuarioId, PuntoDeVentaId })
  if (sale !== false) {
    console.log(sale)
    localStorage.setItem('sale', JSON.stringify(sale))
    return true
  }
  return false
}

export const getTaxCondition = async (): Promise<CondicionTributaria[]> => {
  const taxConditions = await getData({ URL: `${URL}/CondicionTributaria` })
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

  const result: LineaDeVenta = await postSaleLine({ URL: `${URL}/Venta/LineaDeVenta/Agregar`, VentaId, Cantidad, InventarioId })

  const newSale = await getData({ URL: `${URL}/Venta/${VentaId}` })

  if (newSale !== false) {
    console.log(result)
    localStorage.setItem('sale', JSON.stringify(newSale))
    return result.idLineaDeVenta
  }
  return false
}

export const endSale = async (): Promise<boolean> => {
  const sale: Venta = JSON.parse(`${localStorage.getItem('sale')}`)
  const idVenta = `${sale.idVenta}`
  const newSale = await putSale({ URL: `${URL}/Venta/Cancelar`, idVenta })
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
  const result = await deleteSaleLine({ URL: `${URL}/Venta/LineaDeVenta/Quitar`, VentaId, LineaDeVentaId })
  if (result !== false) {
    const newSale = await getData({ URL: `${URL}/Venta/${VentaId}` })
    localStorage.setItem('sale', JSON.stringify(newSale))
    return true
  }
  return false
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
