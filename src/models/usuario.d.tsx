import { EmpleadoEjemplo, EmpleadoEjemplo2, type Empleado } from './empleado.d'
import { RolEjemplo, type Rol } from './rol.d'

export interface Usuario {
  IdUsuario: number
  NombreUsuario: string
  Contraseña: string
  IdRol: number | null
  IdEmpleado: number
}

// User de prueba
export interface UsuarioEx {
  IdUsuario: number
  NombreUsuario: string
  Contraseña: string
  Rol: Rol
  Empleado: Empleado
}

export const User: UsuarioEx[] = [
  {
    IdUsuario: 1,
    NombreUsuario: 'cami',
    Contraseña: 'cami123',
    Rol: RolEjemplo,
    Empleado: EmpleadoEjemplo
  },
  {
    IdUsuario: 2,
    NombreUsuario: 'cami2',
    Contraseña: 'cami123',
    Rol: RolEjemplo,
    Empleado: EmpleadoEjemplo2
  }
]
