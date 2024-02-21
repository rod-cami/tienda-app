export interface Sucursal {
  IdSucursal: number
  Nombre: string
  Telefono: string | null
  Email: string
  Domicilio: string
  Ciudad: string
}

export const SucursalEjemplo = [
  {
    IdSucursal: 1,
    Nombre: 'Centro',
    Telefono: null,
    Email: 'centro@gmail.com',
    Domicilio: 'Maipu 123',
    Ciudad: 'San Miguel de Tucumán'
  },
  {
    IdSucursal: 2,
    Nombre: 'YB',
    Telefono: null,
    Email: 'centro@gmail.com',
    Domicilio: 'Las Rosas 123',
    Ciudad: 'Yerba Buena'
  }
]
