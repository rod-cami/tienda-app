import { getData } from '../api/productDataApi'
import { URL } from '../consts/consts'
import { type ArticuloEx } from '../models/articulo.d'
import { type Inventario } from '../models/inventario.d'

export const getArticles = async (): Promise<ArticuloEx[]> => {
  try {
    const articlesAux: ArticuloEx[] = await getData({ URL: `${URL}/Articulo` })
    return articlesAux
  } catch (error) {
    // Manejar errores aquí
    console.error('Error getting articles:', error)
    throw error// Re-lanzar el error para que sea manejado en fetchData
  }
}

export const getArticlesInventory = async (): Promise<Inventario[]> => {
  try {
    const inventoryAux: Inventario[] = await getData({ URL: `${URL}/Inventario` })
    return inventoryAux
  } catch (error) {
    // Manejar errores aquí
    console.error('Error getting articles:', error)
    throw error// Re-lanzar el error para que sea manejado en fetchData
  }
}
