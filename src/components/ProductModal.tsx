import { useEffect, useState } from 'react'
import { Rows, Column, type ModalProps } from '../types/types.d'
import { Button, ButtonGroup, Modal, ModalContent, ModalHeader, ModalBody} from '@nextui-org/react'
import { type Producto, ProductsInventory } from '../models/products.d'
import { Table } from 'react-bootstrap'
import { ProductTable } from './ProductTable'

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

interface ProductModalProps extends ModalProps {
  productos: Producto[]
}

export const ProductModal = ({ show, handleClose, productos }: ProductModalProps): JSX.Element => {
  const [items, setItems] = useState<Rows[]>([])

  const handlePrice = (product: Producto): number => {
    const priceString = (product.Articulo.Costo + (product.Articulo.Costo * product.Articulo.MargenGanancia) + (product.Articulo.Costo * product.Articulo.PorcentajeIVA)).toFixed(2)
    return parseFloat(priceString)
  }

  const setItemsFunction = (): void => {
    const itemsNew: Rows[] = []
    for (const product of productos) {
      const item: Rows = {
        key: product.IdInventario,
        nombre: `${product.Articulo.Descripcion} ${product.Articulo.Marca.Descripcion}`,
        talle: product.Talle.Medida,
        color: product.Color.Nombre,
        precio: handlePrice(product),
        cantidad: product.Cantidad
      }
      itemsNew.push(item)
    }
    setItems(itemsNew)
  }

  useEffect(() => {
    setItemsFunction()
    console.log(items)
  }, productos)

  return (
    <>
      <Modal size='xl' backdrop='blur' isOpen={show} onClose={handleClose}>
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">Seleccione el producto</ModalHeader>
            <ModalBody className='mb-2'>
              <ProductTable Columns={columns} Items={items}/>
            </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
