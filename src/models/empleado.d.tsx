export interface Empleado {
  IdEmpleado: number
  Legajo: number
  Nombre: string
  Apellido: string
  Email: string | null
  Domicilio: string | null
  IdSucursal: number
}

export const EmpleadoEjemplo: Empleado = {
  IdEmpleado: 1,
  Legajo: 52658,
  Nombre: 'Camila',
  Apellido: 'Rodriguez',
  Email: 'camila@gmail.com',
  Domicilio: 'Maipu 320',
  IdSucursal: 1
}

export const EmpleadoEjemplo2: Empleado = {
  IdEmpleado: 2,
  Legajo: 52659,
  Nombre: 'Camila',
  Apellido: 'Rodriguez',
  Email: 'camila@gmail.com',
  Domicilio: 'Maipu 320',
  IdSucursal: 2
}
