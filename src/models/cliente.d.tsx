import { type CondicionTributaria } from "./condicionTributaria.d"

export interface Cliente {
  idCliente: number
  nroDocumento: string
  tipoDocumento: string
  nombre: string
  apellido: string
  telefono: string | null
  email: string | null
  domicilio: string
  idCondicionTributaria: number | null
}

export interface ClienteEx {
  idCliente: number
  nroDocumento: string
  tipoDocumento: string
  nombre: string
  apellido: string
  idCondicionTributaria: number | null
  tarjeta: number
  CVC: number
  fecha_Expiracion: Date
}

export interface ClienteExtendido {
  idCliente: number
  nroDocumento: string
  tipoDocumento: string
  nombre: string
  apellido: string
  telefono: string | null
  email: string | null
  domicilio: string
  condicionTributaria: CondicionTributaria
}
