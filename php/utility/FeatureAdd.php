<?php
declare(strict_types=1);

// SimpsonsCharacter SDK utility: feature_add

class SimpsonsCharacterFeatureAdd
{
    public static function call(SimpsonsCharacterContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
