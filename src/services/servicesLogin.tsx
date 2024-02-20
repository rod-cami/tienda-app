import { User, type Users } from '../models/usuario.d'

export const handleLogin = (user: Users): boolean => {
  const userEx = User
  const userExJson = JSON.stringify(userEx)
  const userJson = JSON.stringify(user)

  if (userExJson === userJson) {
    return true
  }

  return false
}
