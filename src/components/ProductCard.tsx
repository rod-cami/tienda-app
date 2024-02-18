import { Card, CardFooter } from '@nextui-org/react'
import { ProductsEx } from '../models/products.d'
import { ProductModal } from './ProductModal'
import { useState } from 'react'

export const ProductCard = (): JSX.Element => {
  const list = ProductsEx
  const [show, setShow] = useState<boolean>(false)
  const handleShow = (): void => {
    setShow(!show)
  }

  return (
    <>
      <div className="gap-2 grid grid-cols-1 sm:grid-cols-3 my-4 ">
        {list.map((item, index) => (
          <Card shadow="sm" key={index} isPressable onPress={handleShow}>
            <CardFooter className="text-small justify-between">
              <b>{item.Articulo.Descripcion}</b>
              <p className="text-default-500">${(item.Articulo.Costo + (item.Articulo.Costo * item.Articulo.PorcentajeIVA) + (item.Articulo.Costo * item.Articulo.MargenGanancia)).toFixed(1)}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
      <ProductModal show={show} handleClose={handleShow}/>
    </>
  )
}
