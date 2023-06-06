import PropTypes from 'prop-types'
import { GiffItem } from './GiffItem'
import { useFetchGifs } from '../hooks/useFetchGifs'

export const GiffGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category)

  return (
    <>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <div>
          <h2>{category}</h2>

          <div className="card-grid">
            {images.map((img) => (
              <GiffItem key={img.id} {...img} />
            ))}
          </div>
        </div>
      )}
    </>
  )
}

GiffGrid.propTypes = {
  category: PropTypes.string.isRequired,
}
