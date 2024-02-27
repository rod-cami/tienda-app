import { CategoriaEjemplo, type Categoria } from './categoria.d'
import { MarcaEjemplo, type Marca } from './marca.d'
import { TipoTalles, type TipoTalle } from './tipoTalle.d'

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
  idArticulo: number
  codigo: string
  descripcion: string
  costo: number
  porcentajeIVA: number
  margenGanancia: number
  categoria: Categoria
  marca: Marca
  tipoTalle: TipoTalle
}
