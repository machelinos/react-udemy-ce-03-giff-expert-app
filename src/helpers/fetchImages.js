export const fetchImages = async (category) => {
  const url = 'https://api.giphy.com/v1/gifs/search'
  const apiKey = 'K2bFwNaKbTtfO37edtMPd4E4uwNmOBvK'

  const resp = await fetch(`${url}?api_key=${apiKey}&q=${category}&limit=10`)
  if (!resp.ok) console.error(`Couldn't get ${category} images`)
  const { data } = await resp.json()

  const gifs = data.map((img) => ({
    title: img.title,
    id: img.id,
    url: img.images.original.url,
  }))

  return gifs
}
