import { User, type UsuarioEx } from '../models/usuario.d'

export const handleLogin = ({ NombreUsuario, Contraseña }: Pick<UsuarioEx, 'NombreUsuario' | 'Contraseña'>): boolean => {
  for (const user of User) {
    console.log(user)
    if (NombreUsuario === user.NombreUsuario && Contraseña === user.Contraseña) {
      console.log('entro ', user)
      localStorage.setItem('user', JSON.stringify(user))
      return true
    }
  }
  return false
}
