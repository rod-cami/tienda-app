export interface Venta {
  idVenta: number
  fecha: Date
  monto: number
  estado: string
  observaciones: string | null
  idCliente: number
  idUsuario: number
  idTipoDeComprobante: number
  idPuntoVenta: number
}
