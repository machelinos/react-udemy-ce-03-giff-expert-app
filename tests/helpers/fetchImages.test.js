import { fetchImages } from '../../src/helpers/fetchImages'

describe('fetchImages helper tests', () => {
  test('fetchImages should return a gifs array', async () => {
    const gifs = await fetchImages('Buffy')

    expect(gifs.length).toBeGreaterThan(0)
    expect(gifs[0]).toEqual({
      title: expect.any(String),
      id: expect.any(String),
      url: expect.any(String),
    })
  })
})
