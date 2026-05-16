
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { SimpsonsCharacterSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await SimpsonsCharacterSDK.test()
    equal(null !== testsdk, true)
  })

})
