export interface Color {
  IdColor: number
  Nombre: string
}

export interface Colors {
  color: string
  class: string
  selectedClass: string
}

export const ColorEx: Colors[] = [
  {
    color: 'Rojo',
    class: 'bg-red',
    selectedClass: 'ring-red-500'
  },
  {
    color: 'Azul',
    class: 'bg-blue',
    selectedClass: 'ring-blue-500'
  }
]
