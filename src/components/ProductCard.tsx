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
      <form className='flex justify-between' onSubmit={ handleSubmit( handleSearch ) }>
        <div className="flex w-75 flex-wrap md:flex-nowrap gap-4">
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
          <span className="text-danger tamLetra d-block">
            {errors.code?.message}
          </span>
        </div>
        <div className='p-2'>
          <Button type='submit' isIconOnly color="primary" className='my-auto' aria-label="search">
            <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
          </Button>
        </div>
      </form>
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
      <ProductModal show={show} handleClose={handleShow} productos={productos}/>
    </>
  )
}
