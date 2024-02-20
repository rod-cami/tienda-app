export interface Usuario {
  IdUsuario: number
  NombreUsuario: string
  Contraseña: string
  IdRol: number | null
  IdEmpleado: number
}

// User de prueba
export interface Users {
  username: string
  password: string
}

export const User = {
  username: 'cami',
  password: 'cami123'
}
