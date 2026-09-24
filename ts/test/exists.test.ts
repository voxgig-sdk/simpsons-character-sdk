
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { SimpsonsCharacterSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = SimpsonsCharacterSDK.test()
    equal(testsdk instanceof SimpsonsCharacterSDK, true,
      'SimpsonsCharacterSDK.test() must return a client synchronously')
  })

})
