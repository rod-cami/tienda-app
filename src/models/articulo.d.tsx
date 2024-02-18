import { type Categoria } from './categoria.d'
import { type Marca } from './marca.d'
import { type TipoTalle } from './tipoTalle.d'

export interface Articulo {
  IdArticulo: number
  Codigo: number
  Descripcion: string
  Costo: number
  PorcentajeIVA: number
  MargenGanancia: number
  IdCategoria: number | null
  IdMarca: number | null
  IdTipoTalle: number | null
}

export interface ArticuloEx {
  IdArticulo: number
  Codigo: number
  Descripcion: string
  Costo: number
  PorcentajeIVA: number
  MargenGanancia: number
  Categoria: Categoria
  Marca: Marca
  TipoTalle: TipoTalle
}
