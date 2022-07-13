import fetch from 'node-fetch'

import { parse, print } from 'recast'
import { cloneDeep } from 'lodash'
import { fetchDoc } from './fetchApi'

/**
 * TODO: 获取 api json OSA2 和OSA3的接口
 */
export async function main() {
  return await fetchDoc()
}
