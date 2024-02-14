import { Card, CardBody, CardFooter, Image } from '@nextui-org/react'
import { ProductsEx } from '../models/products.d'

export const ProductCard = (): JSX.Element => {
  const list = ProductsEx

  return (
    <div className="gap-2 grid grid-cols-2 sm:grid-cols-4 my-4 ">
      {list.map((item, index) => (
        <Card shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={item.imageAlt}
              className="w-full object-cover h-[140px]"
              src={item.imageSrc}
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>{item.name}</b>
            <p className="text-default-500">{item.price}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
