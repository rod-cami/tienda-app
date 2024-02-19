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

export const ListArticulos: ArticuloEx[] = [
  {
    IdArticulo: 1,
    Codigo: 1001,
    Descripcion: 'Remera',
    Costo: 15000.78,
    PorcentajeIVA: 0.21,
    MargenGanancia: 0.15,
    Categoria: {
      IdCategoria: 1,
      Descripcion: 'Remera'
    },
    Marca: {
      IdMarca: 1,
      Descripcion: 'Adidas'
    },
    TipoTalle: {
      IdTipoTalle: 1,
      Descripcion: 'Americano'
    }
  },
  {
    IdArticulo: 2,
    Codigo: 1002,
    Descripcion: 'Remera',
    Costo: 15000.78,
    PorcentajeIVA: 0.21,
    MargenGanancia: 0.15,
    Categoria: {
      IdCategoria: 1,
      Descripcion: 'Remera'
    },
    Marca: {
      IdMarca: 1,
      Descripcion: 'Nike'
    },
    TipoTalle: {
      IdTipoTalle: 1,
      Descripcion: 'Americano'
    }
  }
]
