import React from 'react'
import { Button, Card, CardFooter, Input } from '@nextui-org/react'
import { ProductModal } from './ProductModal'
import { type ChangeEvent, useState, useEffect } from 'react'
import { type ArticuloEx } from '../models/articulo.d'
import { SearchIcon } from './SearchIcon'
import { updateListProducts } from '../utils/productsUtils'
import { getArticles } from '../services/servicesProducts'
import { type Inventario } from '../models/inventario.d'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface SearchForm {
  code: string
}
export const ProductCard = (): JSX.Element => {
  // Inicial state of articles, products, and the product modal.
  const [articles, setArticles] = useState<ArticuloEx>()
  const [productos, setProductos] = useState<Inventario[]>([])
  const [show, setShow] = useState<boolean>(false)

  // Search button
  const { register, formState: { errors }, handleSubmit } = useForm<SearchForm>()
  const handleSearch: SubmitHandler<SearchForm> = async (data, e) => {
    const article: ArticuloEx = await getArticles(data.code)
    setArticles(article)
  }

  // Show Modal
  const handleShow = async (id: string): Promise<void> => {
    try {
      const upListProducts: Inventario[] = await updateListProducts(id)
      setProductos(upListProducts)
      setShow(!show)
    } catch (error) {
      console.error('Error handling show:', error)
    }
  }

  return (
    <>
      <div className=' border p-4 mt-5'>
        <div className='flex justify-between'>
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight mb-3">
            Buscar artículo
          </h2>
          <form className='flex' onSubmit={ handleSubmit( handleSearch ) }>
            <div className="flex flex-wrap md:flex-nowrap gap-4">
              <Input
                type="text"
                label="Código del artículo"
                {
                ...register('code', {
                  required: {
                    value: true,
                    message: 'Campo requerido'
                  },
                  maxLength: {
                    value: 50,
                    message: 'Debe ser menor a 50'
                  },
                  minLength: {
                    value: 2,
                    message: 'Debe ser mayor a 2'
                  },
                  pattern: {
                    value: /^\d+$/i,
                    message: 'Este campo solo acepta números'
                  }
                })}
              />
              <span className="text-danger d-block">
                {errors.code?.message}
              </span>
            </div>
            <div className='px-1'>
              <button
                type="submit"
                className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                <FontAwesomeIcon icon={faMagnifyingGlass} className='text-lg my-2.5' />
              </button>
            </div>
          </form>
        </div>
        <div className="gap-2 grid grid-cols-1  my-4 ">
          { articles  ? 
            <Card shadow="sm" isPressable onPress={() => { handleShow(articles.codigo) }}>
              <CardFooter className="text-small flex justify-between">
                <b className='text-2xl fw-bolder'>{articles.codigo} - {articles.descripcion}</b>
                <b className='text-2xl fw-bolder'>{articles.marca.descripcion}</b>
              </CardFooter>
            </Card>
            : null
          }
        </div>
      </div>
      <ProductModal show={show} handleClose={handleShow} productos={productos}/>
    </>
  )
}
