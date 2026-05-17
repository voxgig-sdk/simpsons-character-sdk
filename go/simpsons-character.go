package voxgigsimpsonscharactersdk

import (
	"github.com/voxgig-sdk/simpsons-character-sdk/go/core"
	"github.com/voxgig-sdk/simpsons-character-sdk/go/entity"
	"github.com/voxgig-sdk/simpsons-character-sdk/go/feature"
	_ "github.com/voxgig-sdk/simpsons-character-sdk/go/utility"
)

// Type aliases preserve external API.
type SimpsonsCharacterSDK = core.SimpsonsCharacterSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type SimpsonsCharacterEntity = core.SimpsonsCharacterEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type SimpsonsCharacterError = core.SimpsonsCharacterError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewCharacterEntityFunc = func(client *core.SimpsonsCharacterSDK, entopts map[string]any) core.SimpsonsCharacterEntity {
		return entity.NewCharacterEntity(client, entopts)
	}
	core.NewEpisodeEntityFunc = func(client *core.SimpsonsCharacterSDK, entopts map[string]any) core.SimpsonsCharacterEntity {
		return entity.NewEpisodeEntity(client, entopts)
	}
	core.NewLocationEntityFunc = func(client *core.SimpsonsCharacterSDK, entopts map[string]any) core.SimpsonsCharacterEntity {
		return entity.NewLocationEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewSimpsonsCharacterSDK = core.NewSimpsonsCharacterSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
