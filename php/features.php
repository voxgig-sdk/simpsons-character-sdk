<?php
declare(strict_types=1);

// SimpsonsCharacter SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class SimpsonsCharacterFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new SimpsonsCharacterBaseFeature();
            case "test":
                return new SimpsonsCharacterTestFeature();
            default:
                return new SimpsonsCharacterBaseFeature();
        }
    }
}
