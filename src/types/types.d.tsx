export interface ModalProps {
  show: boolean
  handleClose: () => void
}

export interface ButtonProps {
  quantity: number
  setQuantity: () => void
  maxQuantity: number
}

export interface Column {
  key: string
  label: string
}

export interface Rows {
  key: number
  nombre: string
  talle: string
  color: string
  precio: number
  cantidad: number
}

export interface ProductTableProps {
  Columns: Column[]
  Items: Rows[]
}
