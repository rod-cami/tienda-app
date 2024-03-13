import { type Inventario } from './inventario.d'
import { type Venta } from './venta.d'

export interface LineaDeVenta {
  idLineaDeVenta: number
  cantidad: number
  inventario: Inventario
  venta: Venta
  montoIva: number
  netoGravado: number
  subtotal: number
}
