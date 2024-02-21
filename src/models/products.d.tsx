import { ListArticulos, type ArticuloEx } from './articulo.d'
import { ColorEjemplo, type Color } from './color.d'
import { SucursalEjemplo, type Sucursal } from './sucursal.d'
import { Talles, type Talle } from './talle.d'

export interface Producto {
  IdInventario: number
  Cantidad: number
  Sucursal: Sucursal
  Color: Color
  Talle: Talle
  Articulo: ArticuloEx
}

export const ProductsInventory: Producto[] = [
  {
    IdInventario: 1,
    Cantidad: 5,
    Sucursal: SucursalEjemplo[0],
    Color: ColorEjemplo[0],
    Talle: Talles[0],
    Articulo: ListArticulos[0]
  },
  {
    IdInventario: 2,
    Cantidad: 5,
    Sucursal: SucursalEjemplo[0],
    Color: ColorEjemplo[0],
    Talle: Talles[1],
    Articulo: ListArticulos[0]
  },
  {
    IdInventario: 3,
    Cantidad: 2,
    Sucursal: SucursalEjemplo[0],
    Color: ColorEjemplo[0],
    Talle: Talles[2],
    Articulo: ListArticulos[0]
  },
  {
    IdInventario: 4,
    Cantidad: 10,
    Sucursal: SucursalEjemplo[0],
    Color: ColorEjemplo[0],
    Talle: Talles[3],
    Articulo: ListArticulos[0]
  },
  {
    IdInventario: 5,
    Cantidad: 6,
    Sucursal: SucursalEjemplo[0],
    Color: ColorEjemplo[1],
    Talle: Talles[4],
    Articulo: ListArticulos[0]
  },
  {
    IdInventario: 6,
    Cantidad: 5,
    Sucursal: SucursalEjemplo[0],
    Color: ColorEjemplo[1],
    Talle: Talles[5],
    Articulo: ListArticulos[0]
  },
  {
    IdInventario: 7,
    Cantidad: 2,
    Sucursal: SucursalEjemplo[0],
    Color: ColorEjemplo[1],
    Talle: Talles[6],
    Articulo: ListArticulos[0]
  },
  {
    IdInventario: 8,
    Cantidad: 10,
    Sucursal: SucursalEjemplo[0],
    Color: ColorEjemplo[1],
    Talle: Talles[7],
    Articulo: ListArticulos[0]
  },
  {
    IdInventario: 9,
    Cantidad: 5,
    Sucursal: SucursalEjemplo[0],
    Color: ColorEjemplo[0],
    Talle: Talles[0],
    Articulo: ListArticulos[1]
  },
  {
    IdInventario: 10,
    Cantidad: 5,
    Sucursal: SucursalEjemplo[0],
    Color: ColorEjemplo[0],
    Talle: Talles[1],
    Articulo: ListArticulos[1]
  },
  {
    IdInventario: 11,
    Cantidad: 2,
    Sucursal: SucursalEjemplo[0],
    Color: ColorEjemplo[0],
    Talle: Talles[2],
    Articulo: ListArticulos[1]
  },
  {
    IdInventario: 12,
    Cantidad: 10,
    Sucursal: SucursalEjemplo[0],
    Color: ColorEjemplo[0],
    Talle: Talles[3],
    Articulo: ListArticulos[1]
  },
  {
    IdInventario: 13,
    Cantidad: 6,
    Sucursal: SucursalEjemplo[0],
    Color: ColorEjemplo[1],
    Talle: Talles[4],
    Articulo: ListArticulos[1]
  },
  {
    IdInventario: 14,
    Cantidad: 5,
    Sucursal: SucursalEjemplo[0],
    Color: ColorEjemplo[1],
    Talle: Talles[5],
    Articulo: ListArticulos[1]
  },
  {
    IdInventario: 15,
    Cantidad: 2,
    Sucursal: SucursalEjemplo[0],
    Color: ColorEjemplo[1],
    Talle: Talles[6],
    Articulo: ListArticulos[1]
  },
  {
    IdInventario: 16,
    Cantidad: 10,
    Sucursal: SucursalEjemplo[0],
    Color: ColorEjemplo[1],
    Talle: Talles[7],
    Articulo: ListArticulos[1]
  },
  {
    IdInventario: 17,
    Cantidad: 5,
    Sucursal: SucursalEjemplo[1],
    Color: ColorEjemplo[2],
    Talle: Talles[0],
    Articulo: ListArticulos[0]
  },
  {
    IdInventario: 18,
    Cantidad: 5,
    Sucursal: SucursalEjemplo[1],
    Color: ColorEjemplo[2],
    Talle: Talles[1],
    Articulo: ListArticulos[0]
  },
  {
    IdInventario: 19,
    Cantidad: 2,
    Sucursal: SucursalEjemplo[1],
    Color: ColorEjemplo[1],
    Talle: Talles[2],
    Articulo: ListArticulos[0]
  },
  {
    IdInventario: 20,
    Cantidad: 10,
    Sucursal: SucursalEjemplo[1],
    Color: ColorEjemplo[2],
    Talle: Talles[3],
    Articulo: ListArticulos[0]
  },
  {
    IdInventario: 21,
    Cantidad: 6,
    Sucursal: SucursalEjemplo[1],
    Color: ColorEjemplo[1],
    Talle: Talles[4],
    Articulo: ListArticulos[0]
  },
  {
    IdInventario: 22,
    Cantidad: 5,
    Sucursal: SucursalEjemplo[1],
    Color: ColorEjemplo[0],
    Talle: Talles[5],
    Articulo: ListArticulos[0]
  },
  {
    IdInventario: 23,
    Cantidad: 2,
    Sucursal: SucursalEjemplo[1],
    Color: ColorEjemplo[2],
    Talle: Talles[6],
    Articulo: ListArticulos[0]
  },
  {
    IdInventario: 24,
    Cantidad: 10,
    Sucursal: SucursalEjemplo[1],
    Color: ColorEjemplo[0],
    Talle: Talles[7],
    Articulo: ListArticulos[0]
  },
  {
    IdInventario: 25,
    Cantidad: 5,
    Sucursal: SucursalEjemplo[1],
    Color: ColorEjemplo[2],
    Talle: Talles[0],
    Articulo: ListArticulos[1]
  },
  {
    IdInventario: 26,
    Cantidad: 5,
    Sucursal: SucursalEjemplo[1],
    Color: ColorEjemplo[1],
    Talle: Talles[1],
    Articulo: ListArticulos[1]
  },
  {
    IdInventario: 27,
    Cantidad: 2,
    Sucursal: SucursalEjemplo[1],
    Color: ColorEjemplo[0],
    Talle: Talles[2],
    Articulo: ListArticulos[1]
  },
  {
    IdInventario: 28,
    Cantidad: 10,
    Sucursal: SucursalEjemplo[1],
    Color: ColorEjemplo[0],
    Talle: Talles[3],
    Articulo: ListArticulos[1]
  },
  {
    IdInventario: 29,
    Cantidad: 6,
    Sucursal: SucursalEjemplo[1],
    Color: ColorEjemplo[1],
    Talle: Talles[4],
    Articulo: ListArticulos[1]
  },
  {
    IdInventario: 30,
    Cantidad: 5,
    Sucursal: SucursalEjemplo[1],
    Color: ColorEjemplo[1],
    Talle: Talles[5],
    Articulo: ListArticulos[1]
  },
  {
    IdInventario: 31,
    Cantidad: 2,
    Sucursal: SucursalEjemplo[1],
    Color: ColorEjemplo[1],
    Talle: Talles[6],
    Articulo: ListArticulos[1]
  },
  {
    IdInventario: 32,
    Cantidad: 10,
    Sucursal: SucursalEjemplo[1],
    Color: ColorEjemplo[1],
    Talle: Talles[7],
    Articulo: ListArticulos[1]
  }
]
