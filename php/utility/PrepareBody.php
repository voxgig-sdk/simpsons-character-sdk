<?php
declare(strict_types=1);

// SimpsonsCharacter SDK utility: prepare_body

class SimpsonsCharacterPrepareBody
{
    public static function call(SimpsonsCharacterContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
