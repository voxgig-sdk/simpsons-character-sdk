<?php
declare(strict_types=1);

// SimpsonsCharacter SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class SimpsonsCharacterMakeContext
{
    public static function call(array $ctxmap, ?SimpsonsCharacterContext $basectx): SimpsonsCharacterContext
    {
        return new SimpsonsCharacterContext($ctxmap, $basectx);
    }
}
