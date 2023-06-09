import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { GiffExpertApp } from '../src/GiffExpertApp'

describe('<GiffExpertApp /> tests', () => {
  test('Should load the initial 20 images and headings', async () => {
    render(<GiffExpertApp />)
    await waitFor(() => {
      expect(screen.getAllByRole('img').length).toBe(20)
    })
    expect(screen.getAllByRole('img').length).toBe(20)
    expect(
      screen.getAllByRole('heading', { level: 2, name: 'Buffy' }).length,
    ).toBe(1)
    expect(
      screen.getAllByRole('heading', { level: 2, name: 'Gilmore Girls' })
        .length,
    ).toBe(1)
  })

  test('When adding a new category it should render its GiffGrid and 10 more images', async () => {
    render(<GiffExpertApp />)
    const cat = 'Silicon Valley'
    const inputElement = screen.getByRole('textbox')
    const form = screen.getByRole('form')

    fireEvent.input(inputElement, { target: { value: cat } })
    fireEvent.submit(form)
    await waitFor(() => {
      expect(screen.getAllByRole('img').length).toBe(30)
    })
    expect(screen.getAllByRole('heading', { level: 2, name: cat }).length).toBe(
      1,
    )
    expect(screen.getAllByRole('img').length).toBe(30)
  })
})
