import { renderHook, waitFor } from '@testing-library/react'
import { useFetchGifs } from '../../src/hooks/useFetchGifs'

describe('useFetchGifs hook tests', () => {
  test('Should render the initial state', () => {
    const { result } = renderHook(() => {
      return useFetchGifs('Buffy')
    })
    expect(result.current).toEqual({ images: [], isLoading: true })
  })

  test('Should render images and isLoading to false after loading', async () => {
    const { result } = renderHook(() => {
      return useFetchGifs('Buffy')
    })

    await waitFor(() => {
      expect(result.current.images.length).toBeGreaterThan(0)
    })
    const { images, isLoading } = result.current
    expect(images.length).toBeGreaterThan(0)
    expect(isLoading).toBeFalsy()
  })
})
