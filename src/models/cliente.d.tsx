export interface Cliente {
  IdCliente: number
  Dni: string
  Cuil: string
  Nombre: string
  Apellido: string
  Telefono: string | null
  Email: string | null
  Domicilio: string
  IdCondicionTributaria: number | null
}

export interface ClienteEx {
  IdCliente: number
  Dni: string
  Cuil: string
  Nombre: string
  Apellido: string
  IdCondicionTributaria: number | null
  Tarjeta: number
  CVC: number
  Fecha_Expiracion: Date
}
