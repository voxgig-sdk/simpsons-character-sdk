# SimpsonsCharacter SDK utility: prepare_body
require_relative 'media'
module SimpsonsCharacterUtilities
  PrepareBody = ->(ctx) {
    return nil unless ctx.op.input == "data"
    return SimpsonsCharacterUtilities.raw_body(ctx.reqdata) if SimpsonsCharacterUtilities.raw_request?(ctx.point)
    ctx.utility.transform_request.call(ctx)
  }
end
