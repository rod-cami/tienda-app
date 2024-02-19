import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, ButtonGroup, Button } from '@nextui-org/react'
import { type ProductTableProps } from '../types/types.d'
import { useState } from 'react'
import { ButtonQuantity } from './ButtonQuantity'

export const ProductTable = ({ Columns, Items }: ProductTableProps): JSX.Element => {
  const [quantity, setQuantity] = useState<number>(1)
  const [maxQuantity, setMaxQuantity] = useState<number>(5)
  const [key, setKey] = useState<number>(0)

  const handleMaxQuantity = (key: number): void => {
    setKey(key)
    const product = Items[key]
    setQuantity(1)
    setMaxQuantity(product.cantidad)
  }

  const addToCart = (): void => {
    const productsCarrito = JSON.parse(localStorage.getItem('products'))
    const product = Items[key]
    const newProduct = product

    newProduct.cantidad = quantity
    newProduct.precio = quantity * product.precio
    productsCarrito.push(newProduct)
    localStorage.setItem('products', JSON.stringify(productsCarrito))
    window.location.reload()
  }

  return (
    <>
      <Table
        isHeaderSticky={true}
        removeWrapper={true}
        className='text-black bg-transparent'
        aria-label='Lista de Inventario'
        color='primary'
        selectionMode="single"
        selectionBehavior='toggle'
        onRowAction={(key) => { handleMaxQuantity(key) }}
      >
        <TableHeader columns={Columns}>
          {(columns) => (
            <TableColumn key={columns.key} className='text-center'>
              {columns.label}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody className='before:rounded-full'>
          {Items.map((item, rowIndex) => (
            <TableRow key={rowIndex} className={key == rowIndex ? 'text-center bg-slate-100 rounded-full' : 'text-center rounded-full'}>
              {Columns.map((col, colIndex) => (
                <TableCell key={`${rowIndex}-${colIndex}`} >
                  {item[col.key]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className='mt-2 d-flex align-items-center justify-between'>
        <ButtonQuantity quantity={quantity} setQuantity={setQuantity} maxQuantity={maxQuantity}/>
        <Button color="warning" onClick={addToCart}>
          Agregar
        </Button>
      </div>
    </>
  )
}
