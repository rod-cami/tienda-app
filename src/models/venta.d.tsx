import { type Cliente } from './cliente.d'
import { type PuntoDeVenta } from './puntoDeVenta.d'
import { type TipoDeComprobante } from './tipoDeComprobante.d'
import { type Usuario } from './usuario.d'

export interface Venta {
  idVenta: number
  fecha: Date
  monto: number
  estado: string
  observaciones: string | null
  cliente: Cliente
  Usuario: Usuario
  tipoDeComprobante: TipoDeComprobante
  puntoDeVenta: PuntoDeVenta
}
