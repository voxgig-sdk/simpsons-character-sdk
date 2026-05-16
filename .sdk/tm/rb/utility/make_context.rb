# SimpsonsCharacter SDK utility: make_context
require_relative '../core/context'
module SimpsonsCharacterUtilities
  MakeContext = ->(ctxmap, basectx) {
    SimpsonsCharacterContext.new(ctxmap, basectx)
  }
end
