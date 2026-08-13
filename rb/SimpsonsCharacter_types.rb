# frozen_string_literal: true

# Typed models for the SimpsonsCharacter SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Character entity data model.
#
# @!attribute [rw] age
#   @return [Integer, nil]
#
# @!attribute [rw] birthdate
#   @return [String, nil]
#
# @!attribute [rw] gender
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] occupation
#   @return [String, nil]
#
# @!attribute [rw] phrases
#   @return [Array, nil]
#
# @!attribute [rw] portrait_path
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
Character = Struct.new(
  :age,
  :birthdate,
  :gender,
  :id,
  :name,
  :occupation,
  :phrases,
  :portrait_path,
  :status,
  keyword_init: true
)

# Request payload for Character#load.
#
# @!attribute [rw] id
#   @return [Integer]
CharacterLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Character#list.
#
# @!attribute [rw] age
#   @return [Integer, nil]
#
# @!attribute [rw] birthdate
#   @return [String, nil]
#
# @!attribute [rw] gender
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] occupation
#   @return [String, nil]
#
# @!attribute [rw] phrases
#   @return [Array, nil]
#
# @!attribute [rw] portrait_path
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
CharacterListMatch = Struct.new(
  :age,
  :birthdate,
  :gender,
  :id,
  :name,
  :occupation,
  :phrases,
  :portrait_path,
  :status,
  keyword_init: true
)

# Episode entity data model.
#
# @!attribute [rw] air_date
#   @return [String, nil]
#
# @!attribute [rw] episode_number
#   @return [Integer, nil]
#
# @!attribute [rw] id
#   @return [Integer]
#
# @!attribute [rw] image_path
#   @return [String, nil]
#
# @!attribute [rw] season
#   @return [Integer, nil]
#
# @!attribute [rw] synopsis
#   @return [String, nil]
#
# @!attribute [rw] title
#   @return [String]
Episode = Struct.new(
  :air_date,
  :episode_number,
  :id,
  :image_path,
  :season,
  :synopsis,
  :title,
  keyword_init: true
)

# Request payload for Episode#load.
#
# @!attribute [rw] id
#   @return [Integer]
EpisodeLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Episode#list.
#
# @!attribute [rw] air_date
#   @return [String, nil]
#
# @!attribute [rw] episode_number
#   @return [Integer, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] image_path
#   @return [String, nil]
#
# @!attribute [rw] season
#   @return [Integer, nil]
#
# @!attribute [rw] synopsis
#   @return [String, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
EpisodeListMatch = Struct.new(
  :air_date,
  :episode_number,
  :id,
  :image_path,
  :season,
  :synopsis,
  :title,
  keyword_init: true
)

# Location entity data model.
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer]
#
# @!attribute [rw] image_path
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] type
#   @return [String, nil]
Location = Struct.new(
  :description,
  :id,
  :image_path,
  :name,
  :type,
  keyword_init: true
)

# Request payload for Location#load.
#
# @!attribute [rw] id
#   @return [Integer]
LocationLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Location#list.
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] image_path
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
LocationListMatch = Struct.new(
  :description,
  :id,
  :image_path,
  :name,
  :type,
  keyword_init: true
)

