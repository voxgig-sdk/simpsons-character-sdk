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
    public ?array $phrases = null;
    public ?string $portrait_path = null;
    public ?string $status = null;
}

/** Request payload for Character#load. */
class CharacterLoadMatch
{
    public int $id;
}

/** Request payload for Character#list. */
class CharacterListMatch
{
    public ?int $page = null;
}

/** Episode entity data model. */
class Episode
{
    public ?string $air_date = null;
    public ?int $episode_number = null;
    public int $id;
    public ?string $image_path = null;
    public ?int $season = null;
    public ?string $synopsis = null;
    public string $title;
}

/** Request payload for Episode#load. */
class EpisodeLoadMatch
{
    public int $id;
}

/** Request payload for Episode#list. */
class EpisodeListMatch
{
    public ?int $page = null;
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

/** Request payload for Location#list. */
class LocationListMatch
{
    public ?int $page = null;
}

