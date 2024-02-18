import { User, type Users } from '../models/usuario.d'

export const handleLogin = (user: Users): boolean => {
  const userEx = User
  const userExJson = JSON.stringify(userEx)
  const userJson = JSON.stringify(user)

  console.log('UserEx', userExJson)
  console.log('User', userJson)

  if (userExJson === userJson) {
    console.log('hola')
    return true
  }

  return false
}
