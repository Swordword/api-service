import pkg from '../dist/index.esm.js'

async function test() {
  const res = await pkg.main()
  console.log('res', res)
}

test()
