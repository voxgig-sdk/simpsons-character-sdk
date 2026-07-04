<?php
declare(strict_types=1);

// Typed models for the SimpsonsCharacter SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Character entity data model. */
class Character
{
    public ?int $age = null;
    public ?string $birthdate = null;
    public ?string $gender = null;
    public int $id;
    public string $name;
    public ?string $occupation = null;
    public ?array $phrase = null;
    public ?string $portrait_path = null;
    public ?string $status = null;
}

/** Request payload for Character#load. */
class CharacterLoadMatch
{
    public int $id;
}

/** Match filter for Character#list (any subset of Character fields). */
class CharacterListMatch
{
    public ?int $age = null;
    public ?string $birthdate = null;
    public ?string $gender = null;
    public ?int $id = null;
    public ?string $name = null;
    public ?string $occupation = null;
    public ?array $phrase = null;
    public ?string $portrait_path = null;
    public ?string $status = null;
}

/** Episode entity data model. */
class Episode
{
    public ?string $air_date = null;
    public ?int $episode_number = null;
    public int $id;
    public ?string $image_path = null;
    public ?int $season = null;
    public ?string $synopsi = null;
    public string $title;
}

/** Request payload for Episode#load. */
class EpisodeLoadMatch
{
    public int $id;
}

/** Match filter for Episode#list (any subset of Episode fields). */
class EpisodeListMatch
{
    public ?string $air_date = null;
    public ?int $episode_number = null;
    public ?int $id = null;
    public ?string $image_path = null;
    public ?int $season = null;
    public ?string $synopsi = null;
    public ?string $title = null;
}

/** Location entity data model. */
class Location
{
    public ?string $description = null;
    public int $id;
    public ?string $image_path = null;
    public string $name;
    public ?string $type = null;
}

/** Request payload for Location#load. */
class LocationLoadMatch
{
    public int $id;
}

/** Match filter for Location#list (any subset of Location fields). */
class LocationListMatch
{
    public ?string $description = null;
    public ?int $id = null;
    public ?string $image_path = null;
    public ?string $name = null;
    public ?string $type = null;
}

