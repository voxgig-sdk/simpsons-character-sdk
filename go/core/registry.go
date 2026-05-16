package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewCharacterEntityFunc func(client *SimpsonsCharacterSDK, entopts map[string]any) SimpsonsCharacterEntity

var NewEpisodeEntityFunc func(client *SimpsonsCharacterSDK, entopts map[string]any) SimpsonsCharacterEntity

var NewLocationEntityFunc func(client *SimpsonsCharacterSDK, entopts map[string]any) SimpsonsCharacterEntity

