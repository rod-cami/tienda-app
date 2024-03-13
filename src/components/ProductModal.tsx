import { useEffect, useState } from 'react'
import { type Rows, type Column, type ProductModalProps } from '../types/types.d'
import { Modal, ModalContent, ModalHeader, ModalBody } from '@nextui-org/react'
import { ProductTable } from './ProductTable'
import { updateTableRows } from '../utils/productsUtils'

const columns: Column[] = [
  {
    key: 'nombre',
    label: 'PRODUCTO'
  },
  {
    key: 'talle',
    label: 'TALLE'
  },
  {
    key: 'color',
    label: 'COLOR'
  },
  {
    key: 'precio',
    label: 'PRECIO'
  },
  {
    key: 'cantidad',
    label: 'STOCK'
  }
]

export const ProductModal = ({ show, handleClose, productos }: ProductModalProps): JSX.Element => {
  // Initial state of table rows
  const [items, setItems] = useState<Rows[]>([])

  // Function that updates rows according to received products, storing only necessary data
  useEffect(() => {
    const itemsNew: Rows[] = updateTableRows(productos)
    setItems(itemsNew)
  }, [productos])

  return (
    <>
      <Modal size='3xl' backdrop='blur' isOpen={show} onClose={handleClose} scrollBehavior='inside'>
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1 text-2xl">Seleccione el producto</ModalHeader>
            <ModalBody className='mb-2'>
              <ProductTable Columns={columns} Items={items}/>
            </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
