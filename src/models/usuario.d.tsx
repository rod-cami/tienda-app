import { type Empleado } from './empleado.d'
import { type Rol } from './rol.d'

export interface Usuario {
  idUsuario: number
  nombreUsuario: string
  contraseña: string
  idRol: number | null
  idEmpleado: number
}

// User de prueba
export interface UsuarioEx {
  idUsuario: number
  nombreUsuario: string
  contraseña: string
  rol: Rol
  empleado: Empleado
}

export interface UsuarioLogin {
  Username: string
  Password: string
  PuntoDeVentaId: string
}
