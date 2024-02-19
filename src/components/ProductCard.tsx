import { Card, CardFooter, Input } from '@nextui-org/react'
import { ProductModal } from './ProductModal'
import { useState } from 'react'
import { type ArticuloEx, ListArticulos } from '../models/articulo.d'
import { type Producto, ProductsInventory } from '../models/products.d'
import { SearchButton } from './SearchButton'
import { SearchIcon } from './SearchIcon'

export const ProductCard = (): JSX.Element => {
  const [articles, setArticles] = useState(ListArticulos)
  const [productos, setProductos] = useState<Producto[]>([])
  const [show, setShow] = useState<boolean>(false)

  const [searchArticle, setSearchArticle] = useState('')
  const [tableArticles] = useState<ArticuloEx[]>(articles)

  const handleChangeArticle = (e): void => {
    setSearchArticle(e.target.value)
    filterArticles(e.target.value)
  }

  const filterArticles = (item: string): void => {
    const searchTerm = item.trim()
    const result: ArticuloEx[] = tableArticles.filter((x) => {
      const codigo = x.Codigo.toString()
      return codigo.includes(searchTerm)
    })

    setArticles(result)
  }
  const handleShow = (id: number): void => {
    setListProducts(id)
    setShow(!show)
  }

  const setListProducts = (id: number): void => {
    const newList = []
    for (const product of ProductsInventory) {
      if (id === product.Articulo.Codigo) {
        newList.push(product)
        setProductos(newList)
      }
    }
  }

  return (
    <>
      <div className='w-25'>
        <Input
          label="Search"
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
          placeholder="Type to search..."
          startContent={
            <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
          }
          value={searchArticle}
          onChange={handleChangeArticle}
        />
      </div>
      <div className="gap-2 grid grid-cols-1 sm:grid-cols-3 my-4 ">
        {articles.map((item, index) => (
          <Card shadow="sm" key={index} isPressable onPress={() => { handleShow(item.Codigo) }}>
            <CardFooter className="text-small justify-between">
              <b>{item.Codigo} {item.Descripcion} {item.Marca.Descripcion}</b>
            </CardFooter>
          </Card>
        ))}
      </div>
      <ProductModal show={show} handleClose={handleShow} productos={productos}/>
    </>
  )
}
