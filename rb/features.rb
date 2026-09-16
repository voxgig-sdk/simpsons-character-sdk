# SimpsonsCharacter SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module SimpsonsCharacterFeatures
  def self.make_feature(name)
    case name
    when "base"
      SimpsonsCharacterBaseFeature.new
    when "ratelimit"
      SimpsonsCharacterRatelimitFeature.new
    when "retry"
      SimpsonsCharacterRetryFeature.new
    when "test"
      SimpsonsCharacterTestFeature.new
    when "timeout"
      SimpsonsCharacterTimeoutFeature.new
    else
      SimpsonsCharacterBaseFeature.new
    end
  end
end
