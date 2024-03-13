import { URL } from '../consts/consts'
import { getPointOfSale, logIn, logOut } from '../api/sessionApi'
import { type UsuarioLogin } from '../models/usuario.d'
import { type PuntoDeVentaSimple } from '../models/puntoDeVenta.d'
import { type Sesion } from '../models/sesion.d'

export const handleLogIn = async (User: UsuarioLogin): Promise<boolean> => {
  const session = await logIn({ URL: `${URL}/sesion/iniciarsesion`, data: User })
  if (session !== false) {
    localStorage.setItem('sesion', JSON.stringify(session))
    return true
  }
  return false
}

export const handleLogOut = async (): Promise<void> => {
  const sessionO: Sesion = JSON.parse(`${localStorage.getItem('sesion')}`)
  const session = await logOut({ URL: `${URL}/sesion/cerrarsesion`, sesionId: `${sessionO.idSesion}` })
  if (session) {
    localStorage.removeItem('sale')
    localStorage.removeItem('session')
  }
}

export const fetchPOS = async (): Promise<PuntoDeVentaSimple[]> => {
  const POS = await getPointOfSale({ URL: `${URL}/puntodeventa` })
  const simplifiedPOS: PuntoDeVentaSimple[] = POS
    .filter(pos => pos.sucursal.idSucursal === 1 && pos.habilitado)
    .map(pos => ({
      idPuntoDeVenta: pos.idPuntoDeVenta,
      numeroPtoVenta: pos.numeroPtoVenta
    }))

  return simplifiedPOS
}
