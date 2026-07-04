# Typed models for the SimpsonsCharacter SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class Character:
    id: int
    name: str
    age: Optional[int] = None
    birthdate: Optional[str] = None
    gender: Optional[str] = None
    occupation: Optional[str] = None
    phrase: Optional[list] = None
    portrait_path: Optional[str] = None
    status: Optional[str] = None


@dataclass
class CharacterLoadMatch:
    id: int


@dataclass
class CharacterListMatch:
    age: Optional[int] = None
    birthdate: Optional[str] = None
    gender: Optional[str] = None
    id: Optional[int] = None
    name: Optional[str] = None
    occupation: Optional[str] = None
    phrase: Optional[list] = None
    portrait_path: Optional[str] = None
    status: Optional[str] = None


@dataclass
class Episode:
    id: int
    title: str
    air_date: Optional[str] = None
    episode_number: Optional[int] = None
    image_path: Optional[str] = None
    season: Optional[int] = None
    synopsi: Optional[str] = None


@dataclass
class EpisodeLoadMatch:
    id: int


@dataclass
class EpisodeListMatch:
    air_date: Optional[str] = None
    episode_number: Optional[int] = None
    id: Optional[int] = None
    image_path: Optional[str] = None
    season: Optional[int] = None
    synopsi: Optional[str] = None
    title: Optional[str] = None


@dataclass
class Location:
    id: int
    name: str
    description: Optional[str] = None
    image_path: Optional[str] = None
    type: Optional[str] = None


@dataclass
class LocationLoadMatch:
    id: int


@dataclass
class LocationListMatch:
    description: Optional[str] = None
    id: Optional[int] = None
    image_path: Optional[str] = None
    name: Optional[str] = None
    type: Optional[str] = None

