import { useState } from 'react'
import { AddCategory } from './components/AddCategory'

export const GiffExpertApp = () => {
  const [categories, setCategories] = useState(['Buffy', 'Gilmore Girls'])

  const handleAddCategory = (category) => {
    if (categories.includes(category)) return
    setCategories([...categories, category])
  }

  return (
    <>
      {/* Title */}
      <h1>GiffExpertApp</h1>

      <AddCategory onAddCategory={handleAddCategory} />

      <ol>
        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ol>
    </>
  )
}
