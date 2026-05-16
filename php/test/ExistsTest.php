<?php
declare(strict_types=1);

// SimpsonsCharacter SDK exists test

require_once __DIR__ . '/../simpsonscharacter_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = SimpsonsCharacterSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
