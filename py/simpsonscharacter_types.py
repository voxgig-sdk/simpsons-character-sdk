# Typed models for the SimpsonsCharacter SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class CharacterRequired(TypedDict):
    id: int
    name: str


class Character(CharacterRequired, total=False):
    age: int
    birthdate: str
    gender: str
    occupation: str
    phrase: list
    portrait_path: str
    status: str


class CharacterLoadMatch(TypedDict):
    id: int


class CharacterListMatch(TypedDict, total=False):
    age: int
    birthdate: str
    gender: str
    id: int
    name: str
    occupation: str
    phrase: list
    portrait_path: str
    status: str


class EpisodeRequired(TypedDict):
    id: int
    title: str


class Episode(EpisodeRequired, total=False):
    air_date: str
    episode_number: int
    image_path: str
    season: int
    synopsi: str


class EpisodeLoadMatch(TypedDict):
    id: int


class EpisodeListMatch(TypedDict, total=False):
    air_date: str
    episode_number: int
    id: int
    image_path: str
    season: int
    synopsi: str
    title: str


class LocationRequired(TypedDict):
    id: int
    name: str


class Location(LocationRequired, total=False):
    description: str
    image_path: str
    type: str


class LocationLoadMatch(TypedDict):
    id: int


class LocationListMatch(TypedDict, total=False):
    description: str
    id: int
    image_path: str
    name: str
    type: str
