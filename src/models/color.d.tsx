export interface Color {
  IdColor: number
  Nombre: string
}

export interface Colors {
  color: Color
  class: string
  selectedClass: string
}

export const ColorEx: Colors[] = [
  {
    color: {
      IdColor: 1,
      Nombre: 'Rojo'
    },
    class: 'bg-red',
    selectedClass: 'ring-red-500'
  },
  {
    color: {
      IdColor: 2,
      Nombre: 'Azul'
    },
    class: 'bg-blue',
    selectedClass: 'ring-blue-500'
  }
]
