<?php
declare(strict_types=1);

// SimpsonsCharacter SDK base feature

class SimpsonsCharacterBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(SimpsonsCharacterContext $ctx, array $options): void {}
    public function PostConstruct(SimpsonsCharacterContext $ctx): void {}
    public function PostConstructEntity(SimpsonsCharacterContext $ctx): void {}
    public function SetData(SimpsonsCharacterContext $ctx): void {}
    public function GetData(SimpsonsCharacterContext $ctx): void {}
    public function GetMatch(SimpsonsCharacterContext $ctx): void {}
    public function SetMatch(SimpsonsCharacterContext $ctx): void {}
    public function PrePoint(SimpsonsCharacterContext $ctx): void {}
    public function PreSpec(SimpsonsCharacterContext $ctx): void {}
    public function PreRequest(SimpsonsCharacterContext $ctx): void {}
    public function PreResponse(SimpsonsCharacterContext $ctx): void {}
    public function PreResult(SimpsonsCharacterContext $ctx): void {}
    public function PreDone(SimpsonsCharacterContext $ctx): void {}
    public function PreUnexpected(SimpsonsCharacterContext $ctx): void {}
}
