import { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({ onChangeCategory }) => {
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = ({ target }) => {
    setInputValue(target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (inputValue.trim().length <= 2) return
    onChangeCategory((cats) => [...cats, inputValue])
    setInputValue('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search gifs..."
        value={inputValue}
        onChange={handleInputChange}
      />
    </form>
  )
}

AddCategory.propTypes = {
  onChangeCategory: PropTypes.func.isRequired,
}
