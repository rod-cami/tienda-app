export interface Tarjeta {
  esTarjeta: boolean
  datosTarjeta: DatosTarjeta
}

export interface DatosTarjeta {
  numeroTarjeta: string
  titular: Titular
  mesExpiracion: string
  añoExpiracion: string
  cvv: string
}

export interface Titular {
  nombreCompleto: string
  tipoDocumento: number
  nroDocumento: string
}

export interface DatosTarjetaForm {
  numeroTarjeta: string
  fechaExpiracion: Date
  cvc: string
}
