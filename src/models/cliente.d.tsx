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
