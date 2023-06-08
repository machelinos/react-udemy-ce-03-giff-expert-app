import { fireEvent, render, screen } from '@testing-library/react'
import { AddCategory } from '../../src/components/AddCategory'

describe('<AddCategory /> tests', () => {
  test('Writing on the field should update the input', () => {
    render(<AddCategory onAddCategory={() => {}} />)

    const inputElement = screen.getByRole('textbox')
    fireEvent.input(inputElement, { target: { value: 'Silicon Valley' } })

    expect(inputElement.value).toBe('Silicon Valley')
  })

  test('Form submit should set input to "" and call obAddCategory with the value input', () => {
    const inputValue = 'Silicon Valley'
    const handleAddCategory = jest.fn()

    render(<AddCategory onAddCategory={handleAddCategory} />)

    const inputElement = screen.getByRole('textbox')
    const form = screen.getByRole('form')
    fireEvent.input(inputElement, { target: { value: inputValue } })
    fireEvent.submit(form)

    expect(inputElement.value).toBe('')
    expect(handleAddCategory).toHaveBeenCalledTimes(1)
    expect(handleAddCategory).toHaveBeenCalledWith(inputValue)
  })

  test('handleAddCategory should not be called when there is no word larger that 3 characters in the input', () => {
    const inputValue = 'Si'
    const handleAddCategory = jest.fn()

    render(<AddCategory onAddCategory={handleAddCategory} />)

    const inputElement = screen.getByRole('textbox')
    const form = screen.getByRole('form')
    fireEvent.input(inputElement, { target: { value: inputValue } })
    fireEvent.submit(form)

    expect(handleAddCategory).not.toHaveBeenCalled()
  })
})
