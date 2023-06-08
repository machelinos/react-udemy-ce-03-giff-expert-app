import { render, screen } from '@testing-library/react'
import { GiffGrid } from '../../src/components/GiffGrid'
import { useFetchGifs } from '../../src/hooks/useFetchGifs'

jest.mock('../../src/hooks/useFetchGifs')

describe('<GiffGrid /> tests', () => {
  const category = 'Buffy'

  const gifs = [
    {
      id: 'ABC',
      title: 'Buffy',
      url: 'https:localhost/buffy.jpg',
    },
    {
      id: '123',
      title: 'Lorelai',
      url: 'https:localhost/lorelai.jpg',
    },
  ]

  test('Must render "Loading..." initially', () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    })
    render(<GiffGrid category={category} />)
    expect(screen.getByText('Loading...')).toBeTruthy()
  })

  test('Must render the images loaded in the mock', () => {
    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    })
    render(<GiffGrid category={category} />)

    expect(screen.getAllByRole('img').length).toBe(2)
  })
})
