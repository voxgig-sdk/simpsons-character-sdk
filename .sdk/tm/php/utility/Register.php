<?php
declare(strict_types=1);

// SimpsonsCharacter SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

SimpsonsCharacterUtility::setRegistrar(function (SimpsonsCharacterUtility $u): void {
    $u->clean = [SimpsonsCharacterClean::class, 'call'];
    $u->done = [SimpsonsCharacterDone::class, 'call'];
    $u->make_error = [SimpsonsCharacterMakeError::class, 'call'];
    $u->feature_add = [SimpsonsCharacterFeatureAdd::class, 'call'];
    $u->feature_hook = [SimpsonsCharacterFeatureHook::class, 'call'];
    $u->feature_init = [SimpsonsCharacterFeatureInit::class, 'call'];
    $u->fetcher = [SimpsonsCharacterFetcher::class, 'call'];
    $u->make_fetch_def = [SimpsonsCharacterMakeFetchDef::class, 'call'];
    $u->make_context = [SimpsonsCharacterMakeContext::class, 'call'];
    $u->make_options = [SimpsonsCharacterMakeOptions::class, 'call'];
    $u->make_request = [SimpsonsCharacterMakeRequest::class, 'call'];
    $u->make_response = [SimpsonsCharacterMakeResponse::class, 'call'];
    $u->make_result = [SimpsonsCharacterMakeResult::class, 'call'];
    $u->make_point = [SimpsonsCharacterMakePoint::class, 'call'];
    $u->make_spec = [SimpsonsCharacterMakeSpec::class, 'call'];
    $u->make_url = [SimpsonsCharacterMakeUrl::class, 'call'];
    $u->param = [SimpsonsCharacterParam::class, 'call'];
    $u->prepare_auth = [SimpsonsCharacterPrepareAuth::class, 'call'];
    $u->prepare_body = [SimpsonsCharacterPrepareBody::class, 'call'];
    $u->prepare_headers = [SimpsonsCharacterPrepareHeaders::class, 'call'];
    $u->prepare_method = [SimpsonsCharacterPrepareMethod::class, 'call'];
    $u->prepare_params = [SimpsonsCharacterPrepareParams::class, 'call'];
    $u->prepare_path = [SimpsonsCharacterPreparePath::class, 'call'];
    $u->prepare_query = [SimpsonsCharacterPrepareQuery::class, 'call'];
    $u->result_basic = [SimpsonsCharacterResultBasic::class, 'call'];
    $u->result_body = [SimpsonsCharacterResultBody::class, 'call'];
    $u->result_headers = [SimpsonsCharacterResultHeaders::class, 'call'];
    $u->transform_request = [SimpsonsCharacterTransformRequest::class, 'call'];
    $u->transform_response = [SimpsonsCharacterTransformResponse::class, 'call'];
});
