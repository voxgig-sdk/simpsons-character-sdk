-- SimpsonsCharacter SDK error

local SimpsonsCharacterError = {}
SimpsonsCharacterError.__index = SimpsonsCharacterError


function SimpsonsCharacterError.new(code, msg, ctx)
  local self = setmetatable({}, SimpsonsCharacterError)
  self.is_sdk_error = true
  self.sdk = "SimpsonsCharacter"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function SimpsonsCharacterError:error()
  return self.msg
end


function SimpsonsCharacterError:__tostring()
  return self.msg
end


return SimpsonsCharacterError
