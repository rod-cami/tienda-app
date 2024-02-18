export interface Pago {
  IdPago: number
  Fecha: Date
  Ticket: number
  Estado: string | null
  Observaciones: string | null
  IdVenta: number
}
