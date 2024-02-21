export interface Color {
  IdColor: number
  Nombre: string
}

export interface Colors {
  color: string
  class: string
  selectedClass: string
}

export const ColorEjemplo: Color[] = [
  {
    IdColor: 1,
    Nombre: 'Rojo'
  },
  {
    IdColor: 2,
    Nombre: 'Azul'
  },
  {
    IdColor: 3,
    Nombre: 'Verde'
  }
]
