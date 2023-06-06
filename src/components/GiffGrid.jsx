import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { fetchImages } from '../helpers/fetchImages'
import { GiffItem } from './GiffItem'

export const GiffGrid = ({ category }) => {
  const [images, setImages] = useState([])

  useEffect(() => {
    async function getImages() {
      const gifs = await fetchImages(category)
      setImages(gifs)
    }

    getImages()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <h2>{category}</h2>

      <div className="card-grid">
        {images.map((img) => (
          <GiffItem key={img.id} {...img} />
        ))}
      </div>
    </div>
  )
}

GiffGrid.propTypes = {
  category: PropTypes.string.isRequired,
}
