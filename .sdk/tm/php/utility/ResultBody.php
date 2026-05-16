<?php
declare(strict_types=1);

// SimpsonsCharacter SDK utility: result_body

class SimpsonsCharacterResultBody
{
    public static function call(SimpsonsCharacterContext $ctx): ?SimpsonsCharacterResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
