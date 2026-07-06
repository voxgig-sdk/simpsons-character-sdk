// Typed models for the SimpsonsCharacter SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Character {
  age?: number
  birthdate?: string
  gender?: string
  id: number
  name: string
  occupation?: string
  phrase?: any[]
  portrait_path?: string
  status?: string
}

export interface CharacterLoadMatch {
  id: number
}

export interface CharacterListMatch {
  age?: number
  birthdate?: string
  gender?: string
  id?: number
  name?: string
  occupation?: string
  phrase?: any[]
  portrait_path?: string
  status?: string
}

export interface Episode {
  air_date?: string
  episode_number?: number
  id: number
  image_path?: string
  season?: number
  synopsi?: string
  title: string
}

export interface EpisodeLoadMatch {
  id: number
}

export interface EpisodeListMatch {
  air_date?: string
  episode_number?: number
  id?: number
  image_path?: string
  season?: number
  synopsi?: string
  title?: string
}

export interface Location {
  description?: string
  id: number
  image_path?: string
  name: string
  type?: string
}

export interface LocationLoadMatch {
  id: number
}

export interface LocationListMatch {
  description?: string
  id?: number
  image_path?: string
  name?: string
  type?: string
}

