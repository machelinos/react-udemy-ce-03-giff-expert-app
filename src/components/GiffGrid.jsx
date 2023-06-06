import PropTypes from 'prop-types'

export const GiffGrid = ({ category }) => {
  return (
    <div>
      <h2>{category}</h2>
      <p>{category}</p>
    </div>
  )
}

GiffGrid.propTypes = {
  category: PropTypes.string.isRequired,
}
