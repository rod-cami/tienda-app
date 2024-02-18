export interface Venta {
  IdVenta: number
  Fecha: Date
  Monto: number
  Estado: string
  Observaciones: string | null
  IdCliente: number
  IdUsuario: number
  IdTipoDeComprobante: number
  IdPuntoVenta: number
}
