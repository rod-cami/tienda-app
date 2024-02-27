export interface Pago {
  idPago: number
  fecha: Date
  ticket: number
  estado: string | null
  observaciones: string | null
  idVenta: number
}
