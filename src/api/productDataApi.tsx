interface ProductApiProps {
  URL: string
}

export const getData = async ({ URL }: Pick<ProductApiProps, 'URL'>): Promise<T> => {
  try {
    const response = await fetch(URL)

    if (!response.ok) {
      const errorMessage = `Request failed with status: ${response.status}`
      throw new Error(errorMessage)
    }

    const data: T = await response.json().catch(() => null)
    return data
  } catch (error) {
    console.log('Error:', error)
    throw error
  }
}
