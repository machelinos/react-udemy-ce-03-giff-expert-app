import { useState } from 'react'
import { AddCategory, GiffGrid } from './components'

export const GiffExpertApp = () => {
  const [categories, setCategories] = useState(['Buffy', 'Gilmore Girls'])

  const handleAddCategory = (category) => {
    if (categories.includes(category)) return
    setCategories([category, ...categories])
  }

  return (
    <>
      <h1>GiffExpertApp</h1>

      <AddCategory onAddCategory={handleAddCategory} />

      {categories.map((category) => (
        <GiffGrid category={category} key={category} />
      ))}
    </>
  )
}
