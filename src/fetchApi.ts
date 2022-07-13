const mockApiJson =
  'https://test-matrix.popmart.com/api/cost-calculation/v2/api-docs'

import fetch from 'node-fetch'

export async function fetchDoc() {
  const response = await fetch(mockApiJson)
  const result = response.json()
  console.log('result', result)
  return result
}
