import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Button } from '@nextui-org/react'
import { type ProductTableProps } from '../types/types.d'
import { useState } from 'react'
import { ButtonQuantity } from './ButtonQuantity'
import { updateSaleLine } from '../utils/productsUtils'

export const ProductTable = ({ Columns, Items }: ProductTableProps): JSX.Element => {
  // Initial state of quantity, maximum quantity, and inventory key of the selected product
  const [quantity, setQuantity] = useState<number>(1)
  const [maxQuantity, setMaxQuantity] = useState<number>(5)
  const [key, setKey] = useState<number>(0)

  // Function that updates the key values based on the selection in the table, also setting a limit for the quantity.
  const handleProductSelection = (key: number): void => {
    setKey(key)
    const product = Items[key]
    setQuantity(1)
    setMaxQuantity(product.cantidad)
  }

  // Function triggered when the add button is pressed, saving the selected data in localStorage.
  const addSaleLine = (): void => {
    updateSaleLine(Items[key], quantity)
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
        onRowAction={(key) => { handleProductSelection(key) }}
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
            <TableRow key={rowIndex} className={Number(key) === Number(rowIndex) ? 'text-center bg-slate-100 rounded-full' : 'text-center rounded-full'}>
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
        <Button color="warning" onClick={addSaleLine}>
          Agregar
        </Button>
      </div>
    </>
  )
}
