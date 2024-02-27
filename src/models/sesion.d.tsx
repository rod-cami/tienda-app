import { type PuntoDeVenta } from './puntoDeVenta.d'
import { type Usuario } from './usuario.d'

export interface Sesion {
  idSesion: number
  fechaInicio: string
  fechaFin: string
  usuario: Usuario
  puntoDeVenta: PuntoDeVenta
}
