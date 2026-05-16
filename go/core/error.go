package core

type SimpsonsCharacterError struct {
	IsSimpsonsCharacterError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewSimpsonsCharacterError(code string, msg string, ctx *Context) *SimpsonsCharacterError {
	return &SimpsonsCharacterError{
		IsSimpsonsCharacterError: true,
		Sdk:              "SimpsonsCharacter",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *SimpsonsCharacterError) Error() string {
	return e.Msg
}
