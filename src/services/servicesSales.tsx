import { getData } from '../api/productDataApi'
import { postSale, postSaleLine } from '../api/saleApi'
import { URL } from '../consts/consts'
import { type CondicionTributaria } from '../models/condicionTributaria.d'
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

export const addSaleLine = async (Cantidad: string, InventarioId: string): Promise<boolean> => {
  const sale: Venta = JSON.parse(`${localStorage.getItem('sale')}`)
  const VentaId: string = `${sale.idVenta}`

  const result: boolean = await postSaleLine({ URL: `${URL}/Venta/LineaDeVenta/Agregar`, VentaId, Cantidad, InventarioId })

  const newSale = await getData({ URL: `${URL}/Venta/${VentaId}` })

  if (newSale !== false && result) {
    console.log(newSale)
    localStorage.setItem('sale', JSON.stringify(newSale))
    return true
  }
  return false
}
