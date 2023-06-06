import { useEffect, useState } from 'react'
import { fetchImages } from '../helpers/fetchImages'

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function getImages() {
      const gifs = await fetchImages(category)
      setImages(gifs)
      setIsLoading(false)
    }

    getImages()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    images,
    isLoading,
  }
}
