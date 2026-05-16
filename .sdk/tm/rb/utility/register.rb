# SimpsonsCharacter SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

SimpsonsCharacterUtility.registrar = ->(u) {
  u.clean = SimpsonsCharacterUtilities::Clean
  u.done = SimpsonsCharacterUtilities::Done
  u.make_error = SimpsonsCharacterUtilities::MakeError
  u.feature_add = SimpsonsCharacterUtilities::FeatureAdd
  u.feature_hook = SimpsonsCharacterUtilities::FeatureHook
  u.feature_init = SimpsonsCharacterUtilities::FeatureInit
  u.fetcher = SimpsonsCharacterUtilities::Fetcher
  u.make_fetch_def = SimpsonsCharacterUtilities::MakeFetchDef
  u.make_context = SimpsonsCharacterUtilities::MakeContext
  u.make_options = SimpsonsCharacterUtilities::MakeOptions
  u.make_request = SimpsonsCharacterUtilities::MakeRequest
  u.make_response = SimpsonsCharacterUtilities::MakeResponse
  u.make_result = SimpsonsCharacterUtilities::MakeResult
  u.make_point = SimpsonsCharacterUtilities::MakePoint
  u.make_spec = SimpsonsCharacterUtilities::MakeSpec
  u.make_url = SimpsonsCharacterUtilities::MakeUrl
  u.param = SimpsonsCharacterUtilities::Param
  u.prepare_auth = SimpsonsCharacterUtilities::PrepareAuth
  u.prepare_body = SimpsonsCharacterUtilities::PrepareBody
  u.prepare_headers = SimpsonsCharacterUtilities::PrepareHeaders
  u.prepare_method = SimpsonsCharacterUtilities::PrepareMethod
  u.prepare_params = SimpsonsCharacterUtilities::PrepareParams
  u.prepare_path = SimpsonsCharacterUtilities::PreparePath
  u.prepare_query = SimpsonsCharacterUtilities::PrepareQuery
  u.result_basic = SimpsonsCharacterUtilities::ResultBasic
  u.result_body = SimpsonsCharacterUtilities::ResultBody
  u.result_headers = SimpsonsCharacterUtilities::ResultHeaders
  u.transform_request = SimpsonsCharacterUtilities::TransformRequest
  u.transform_response = SimpsonsCharacterUtilities::TransformResponse
}
