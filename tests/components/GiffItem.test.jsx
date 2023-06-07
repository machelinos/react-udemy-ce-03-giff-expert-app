import { screen, render } from '@testing-library/react'
import { GiffItem } from '../../src/components/GiffItem'

describe('<GiffItem /> tests', () => {
  const urlImg =
    'https://media0.giphy.com/media/3o6Zt9MapEhDVITFpC/giphy.gif?cid=001d3785bwobjphsdmhyek0m4pyv3ufzylysh5redeoj9fq0&ep=v1_gifs_search&rid=giphy.gif&ct=g'
  const title = 'Buffy'

  test('<GiffItem /> render shoould match the snapshot', () => {
    const { container } = render(<GiffItem url={urlImg} title={title} />)
    expect(container).toMatchSnapshot()
  })

  test('<GiffItem /> should show an img with the alt and url passed', () => {
    render(<GiffItem url={urlImg} title={title} />)
    const { src, alt } = screen.getByRole('img')
    expect(src).toBe(urlImg)
    expect(alt).toBe(title)
  })

  test('<GiffItem /> should include title somewhere', () => {
    render(<GiffItem url={urlImg} title={title} />)
    expect(screen.getByText(title)).toBeTruthy()
  })
})
