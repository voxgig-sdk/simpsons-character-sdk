-- Typed models for the SimpsonsCharacter SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Character
---@field age? number
---@field birthdate? string
---@field gender? string
---@field id number
---@field name string
---@field occupation? string
---@field phrase? table
---@field portrait_path? string
---@field status? string

---@class CharacterLoadMatch
---@field id number

---@class CharacterListMatch
---@field age? number
---@field birthdate? string
---@field gender? string
---@field id? number
---@field name? string
---@field occupation? string
---@field phrase? table
---@field portrait_path? string
---@field status? string

---@class Episode
---@field air_date? string
---@field episode_number? number
---@field id number
---@field image_path? string
---@field season? number
---@field synopsi? string
---@field title string

---@class EpisodeLoadMatch
---@field id number

---@class EpisodeListMatch
---@field air_date? string
---@field episode_number? number
---@field id? number
---@field image_path? string
---@field season? number
---@field synopsi? string
---@field title? string

---@class Location
---@field description? string
---@field id number
---@field image_path? string
---@field name string
---@field type? string

---@class LocationLoadMatch
---@field id number

---@class LocationListMatch
---@field description? string
---@field id? number
---@field image_path? string
---@field name? string
---@field type? string

local M = {}

return M
