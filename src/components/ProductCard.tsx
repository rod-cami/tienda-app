import React from 'react'
import { Card, CardFooter, Input } from '@nextui-org/react'
import { ProductModal } from './ProductModal'
import { type ChangeEvent, useState, useEffect } from 'react'
import { type ArticuloEx } from '../models/articulo.d'
import { SearchIcon } from './SearchIcon'
import { updateListProducts } from '../utils/productsUtils'
import { getArticles } from '../services/servicesProducts'
import { type Inventario } from '../models/inventario.d'

export const ProductCard = (): JSX.Element => {
  // Inicial state of articles, products, and the product modal.
  const [articles, setArticles] = useState<ArticuloEx[]>([])
  const [productos, setProductos] = useState<Inventario[]>([])
  const [show, setShow] = useState<boolean>(false)

  // Search button
  const [searchArticle, setSearchArticle] = useState('')
  const [tableArticles, setTableArticles] = useState<ArticuloEx[]>([])

  const handleChangeArticle = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearchArticle(e.target.value)
    filterArticles(e.target.value)
  }

  const filterArticles = (item: string): void => {
    const searchTerm = item.trim()
    const result: ArticuloEx[] = tableArticles.filter((x) => {
      const codigo = x.codigo.toString()
      return codigo.includes(searchTerm)
    })
    setArticles(result)
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

  const fetchData = async (): Promise<void> => {
    const result = await getArticles()
    setArticles(result)
    setTableArticles(result)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <div className='w-25 mt-3'>
        <Input
          label="Buscar"
          isClearable
          radius="lg"
          classNames={{
            label: 'text-black/50 dark:text-white/90',
            input: [
              'bg-transparent',
              'text-black/90 dark:text-white/90',
              'placeholder:text-default-700/50 dark:placeholder:text-white/60'
            ],
            innerWrapper: 'bg-transparent',
            inputWrapper: [
              'shadow-xl',
              'bg-default-200/50',
              'dark:bg-default/60',
              'backdrop-blur-xl',
              'backdrop-saturate-200',
              'hover:bg-default-200/70',
              'dark:hover:bg-default/70',
              'group-data-[focused=true]:bg-default-200/50',
              'dark:group-data-[focused=true]:bg-default/60',
              '!cursor-text'
            ]
          }}
          placeholder="Buscar"
          startContent={
            <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
          }
          value={searchArticle}
          onChange={handleChangeArticle}
        />
      </div>
      <div className="gap-2 grid grid-cols-1  my-4 ">
        {articles.map((item, index) => (
          <Card shadow="sm" key={index} isPressable onPress={() => { handleShow(item.codigo) }}>
            <CardFooter className="text-small flex justify-between">
              <b>{item.codigo} - {item.descripcion}</b>
              <b>{item.marca.descripcion}</b>
            </CardFooter>
          </Card>
        ))}
      </div>
      <ProductModal show={show} handleClose={handleShow} productos={productos}/>
    </>
  )
}
