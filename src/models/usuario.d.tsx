export interface Usuario {
  IdUsuario: number
  NombreUsuario: string
  Contraseña: string
  IdRol: number | null
  IdEmpleado: number
}

export const User = {
  username: 'cami',
  password: 'cami123'
}
