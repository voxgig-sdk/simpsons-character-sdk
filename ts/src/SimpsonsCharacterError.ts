
import { Context } from './Context'


class SimpsonsCharacterError extends Error {

  isSimpsonsCharacterError = true

  sdk = 'SimpsonsCharacter'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  SimpsonsCharacterError
}

