import fetch from 'node-fetch'
jest.mock('node-fetch')

const { Response } = jest.requireActual('node-fetch')

import { fetchDoc } from '../src/fetchApi'

describe('fetchDoc', () => {
  it('GET Swagger OpenApi', async () => {
    ;(fetch as jest.Mock).mockReturnValue(
      Promise.resolve(new Response('4'))
    )
    const result = await fetchDoc()
    expect(fetch).toHaveBeenCalledTimes(1)
    expect(fetch).toHaveBeenCalledWith(
      'https://test-matrix.popmart.com/api/cost-calculation/v2/api-docs'
    )
    expect(result).toBe(1)
  })
})
