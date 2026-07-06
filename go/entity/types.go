// Typed models for the SimpsonsCharacter SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import "encoding/json"

// Character is the typed data model for the character entity.
type Character struct {
	Age *int `json:"age,omitempty"`
	Birthdate *string `json:"birthdate,omitempty"`
	Gender *string `json:"gender,omitempty"`
	Id int `json:"id"`
	Name string `json:"name"`
	Occupation *string `json:"occupation,omitempty"`
	Phrase *[]any `json:"phrase,omitempty"`
	PortraitPath *string `json:"portrait_path,omitempty"`
	Status *string `json:"status,omitempty"`
}

// CharacterLoadMatch is the typed request payload for Character.LoadTyped.
type CharacterLoadMatch struct {
	Id int `json:"id"`
}

// CharacterListMatch is the typed request payload for Character.ListTyped.
type CharacterListMatch struct {
	Age *int `json:"age,omitempty"`
	Birthdate *string `json:"birthdate,omitempty"`
	Gender *string `json:"gender,omitempty"`
	Id *int `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	Occupation *string `json:"occupation,omitempty"`
	Phrase *[]any `json:"phrase,omitempty"`
	PortraitPath *string `json:"portrait_path,omitempty"`
	Status *string `json:"status,omitempty"`
}

// Episode is the typed data model for the episode entity.
type Episode struct {
	AirDate *string `json:"air_date,omitempty"`
	EpisodeNumber *int `json:"episode_number,omitempty"`
	Id int `json:"id"`
	ImagePath *string `json:"image_path,omitempty"`
	Season *int `json:"season,omitempty"`
	Synopsi *string `json:"synopsi,omitempty"`
	Title string `json:"title"`
}

// EpisodeLoadMatch is the typed request payload for Episode.LoadTyped.
type EpisodeLoadMatch struct {
	Id int `json:"id"`
}

// EpisodeListMatch is the typed request payload for Episode.ListTyped.
type EpisodeListMatch struct {
	AirDate *string `json:"air_date,omitempty"`
	EpisodeNumber *int `json:"episode_number,omitempty"`
	Id *int `json:"id,omitempty"`
	ImagePath *string `json:"image_path,omitempty"`
	Season *int `json:"season,omitempty"`
	Synopsi *string `json:"synopsi,omitempty"`
	Title *string `json:"title,omitempty"`
}

// Location is the typed data model for the location entity.
type Location struct {
	Description *string `json:"description,omitempty"`
	Id int `json:"id"`
	ImagePath *string `json:"image_path,omitempty"`
	Name string `json:"name"`
	Type *string `json:"type,omitempty"`
}

// LocationLoadMatch is the typed request payload for Location.LoadTyped.
type LocationLoadMatch struct {
	Id int `json:"id"`
}

// LocationListMatch is the typed request payload for Location.ListTyped.
type LocationListMatch struct {
	Description *string `json:"description,omitempty"`
	Id *int `json:"id,omitempty"`
	ImagePath *string `json:"image_path,omitempty"`
	Name *string `json:"name,omitempty"`
	Type *string `json:"type,omitempty"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedFrom decodes a runtime value (a map[string]any produced by the op
// pipeline) into a typed model T via a JSON round-trip. On any error it
// returns the zero value of T; the op's own (value, error) tuple carries the
// real error.
func typedFrom[T any](v any) T {
	var out T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value ([]any of maps) into a typed
// slice []T via a JSON round-trip, for list ops.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
