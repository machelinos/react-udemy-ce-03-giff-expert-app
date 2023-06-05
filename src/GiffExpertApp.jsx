import { useState } from 'react'
import { AddCategory } from './components/AddCategory'

export const GiffExpertApp = () => {
  const [categories, setCategories] = useState(['Buffy', 'Gilmore Girls'])

  return (
    <>
      <h1>GiffExpertApp</h1>

      <AddCategory onChangeCategory={setCategories} />

      <ol>
        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ol>
    </>
  )
}
