# SimpsonsCharacter SDK utility: feature_add
module SimpsonsCharacterUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
