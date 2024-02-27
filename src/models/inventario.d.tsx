import { type ArticuloEx } from './articulo.d'
import { type Color } from './color.d'
import { type Sucursal } from './sucursal.d'
import { type Talle } from './talle.d'

export interface Inventario {
  idInventario: number
  cantidad: number
  sucursal: Sucursal
  color: Color
  talle: Talle
  articulo: ArticuloEx
}
