import { Card, CardHeader, CardBody, Divider } from '@nextui-org/react'
import { ProductsEx } from '../models/products.d'

export const OrderDetails = (): JSX.Element => {
  const products = ProductsEx
  return (
    <div className='mx-40 mt-3 xl:mt-14'>
      <div className='w-100'>
        <dl>
          <div className="px-2 pt-3 pb-2 d-flex justify-between border-b border-gray-400">
            <dt className="text-sm font-medium leading-6 text-white">Producto</dt>
            <dt className="text-sm font-medium leading-6 text-white">Precio</dt>
          </div>
          {
            products.map((item, index) => (
              <div key={index} className="px-2 py-3 d-flex justify-between">
                <dt className="mr-5 text-sm font-medium leading-6 text-white">{item.name} x {item.quantity}</dt>
                <dd className="ml-5 text-sm leading-6 text-slate-200 sm:col-span-2 sm:mt-0">{item.price}</dd>
              </div>
            ))
          }
          <div className="px-2 py-6 d-flex justify-between border-t border-gray-400">
            <dt className="text-sm font-medium leading-6 text-white">Subtotal</dt>
            <dd className="text-sm leading-6 text-white sm:col-span-2 sm:mt-0">$122.00</dd>
          </div>
        </dl>
      </div>
    </div>
  )
}
