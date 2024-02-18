import { ProductsCarrito } from '../models/products.d'
import { calculateTotalPrices } from '../utils/productsUtils'

export const OrderDetails = (): JSX.Element => {
  const products = ProductsCarrito
  return (
    <div className='mx-4 mt-3 xl:mt-4'>
      <div className='w-100'>
        <dl>
          <div className="px-2 pt-3 pb-2 d-flex justify-between border-b border-gray-400">
            <dt className="text-sm font-medium leading-6 text-white">Producto</dt>
            <dt className="text-sm font-medium leading-6 text-white">Precio</dt>
          </div>
          {
            products.map((item, index) => (
              <div key={index} className="px-2 py-3 d-flex justify-between">
                <dt className="mr-5 text-sm font-medium leading-6 text-white">{item.Producto.Articulo.Descripcion} x {item.Cantidad}</dt>
                <dd className="ml-5 text-sm leading-6 text-slate-200 sm:col-span-2 sm:mt-0">${item.Precio}</dd>
              </div>
            ))
          }
          <div className="px-2 py-6 d-flex justify-between border-t border-gray-400">
            <dt className="text-sm font-medium leading-6 text-white">Subtotal</dt>
            <dd className="text-sm leading-6 text-white sm:col-span-2 sm:mt-0">${calculateTotalPrices(products)}</dd>
          </div>
        </dl>
      </div>
    </div>
  )
}