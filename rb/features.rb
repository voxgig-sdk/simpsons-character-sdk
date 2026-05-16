# SimpsonsCharacter SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module SimpsonsCharacterFeatures
  def self.make_feature(name)
    case name
    when "base"
      SimpsonsCharacterBaseFeature.new
    when "test"
      SimpsonsCharacterTestFeature.new
    else
      SimpsonsCharacterBaseFeature.new
    end
  end
end
