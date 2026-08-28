# SimpsonsCharacter Golang SDK



The Golang SDK for the SimpsonsCharacter API — an entity-oriented client using standard Go conventions. No generics required; data flows as `map[string]any`.

It exposes the API as capitalised, semantic **Entities** — e.g. `client.Character(nil)` — each with the same small set of operations (`List`, `Load`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Also generated from this model: `go-cli`, `go-mcp`, `lua`, `php`, `py`, `rb`, `ts` — see
> the [top-level README](../README.md).


## Install
```bash
go get github.com/voxgig-sdk/simpsons-character-sdk/go@latest
```

The Go module proxy resolves the version from the `go/vX.Y.Z` GitHub
release tag — see [Releases](https://github.com/voxgig-sdk/simpsons-character-sdk/releases) for the available versions.

To vendor from a local checkout instead, clone this repo alongside your
project and add a `replace` directive pointing at the checked-out
`go/` directory:

```bash
go mod edit -replace github.com/voxgig-sdk/simpsons-character-sdk/go=../simpsons-character-sdk/go
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### Quickstart

A complete program: create a client, then call the entity operations.
Each operation returns `(value, error)` — the value is the data itself
(there is no `{ok, data}` wrapper), so check `err` and use the value
directly.

```go
package main

import (
    "fmt"
    sdk "github.com/voxgig-sdk/simpsons-character-sdk/go"
)

func main() {
    client := sdk.New()

    // List character records — the value is the array of records itself.
    characters, err := client.Character(nil).List(nil, nil)
    if err != nil {
        panic(err)
    }
    for _, item := range characters.([]any) {
        fmt.Println(item)
    }

    // Load a single character — the value is the loaded record.
    character, err := client.Character(nil).Load(map[string]any{"id": 1}, nil)
    if err != nil {
        panic(err)
    }
    fmt.Println(character)
}
```


## Error handling

Every entity operation returns `(value, error)`. Check `err` before
using the value — there is no exception to catch:

```go
episodes, err := client.Episode(nil).List(nil, nil)
if err != nil {
    // handle err
    return
}
_ = episodes
```

`Direct` follows the same `(value, error)` convention:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example_id"},
})
if err != nil {
    // handle err
}
_ = result
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

if result["ok"] == true {
    fmt.Println(result["status"]) // 200
    fmt.Println(result["data"])   // response body
}
```

### Prepare a request without sending it

```go
fetchdef, err := client.Prepare(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "DELETE",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

fmt.Println(fetchdef["url"])
fmt.Println(fetchdef["method"])
fmt.Println(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```go
client := sdk.Test()

episode, err := client.Episode(nil).List(
    nil, nil,
)
if err != nil {
    panic(err)
}
fmt.Println(episode) // the returned mock data
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```go
mockFetch := func(url string, init map[string]any) (map[string]any, error) {
    return map[string]any{
        "status":     200,
        "statusText": "OK",
        "headers":    map[string]any{},
        "json": (func() any)(func() any {
            return map[string]any{"id": "mock01"}
        }),
    }, nil
}

client := sdk.NewSimpsonsCharacterSDK(map[string]any{
    "base": "http://localhost:8080",
    "system": map[string]any{
        "fetch": (func(string, map[string]any) (map[string]any, error))(mockFetch),
    },
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
SIMPSONS_CHARACTER_TEST_LIVE=TRUE
```

Then run:

```bash
cd go && go test ./test/...
```


## Reference

### NewSimpsonsCharacterSDK

```go
func NewSimpsonsCharacterSDK(options map[string]any) *SimpsonsCharacterSDK
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `"base"` | `string` | Base URL of the API server. |
| `"prefix"` | `string` | URL path prefix prepended to all requests. |
| `"suffix"` | `string` | URL path suffix appended to all requests. |
| `"feature"` | `map[string]any` | Feature activation flags. |
| `"extend"` | `[]any` | Additional Feature instances to load. |
| `"system"` | `map[string]any` | System overrides (e.g. custom `"fetch"` function). |

### TestSDK

```go
func TestSDK(testopts map[string]any, sdkopts map[string]any) *SimpsonsCharacterSDK
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### SimpsonsCharacterSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `OptionsMap` | `() map[string]any` | Deep copy of current SDK options. |
| `GetUtility` | `() *Utility` | Copy of the SDK utility object. |
| `Prepare` | `(fetchargs map[string]any) (map[string]any, error)` | Build an HTTP request definition without sending. |
| `Direct` | `(fetchargs map[string]any) (map[string]any, error)` | Build and send an HTTP request. |
| `Character` | `(data map[string]any) SimpsonsCharacterEntity` | Create a Character entity instance. |
| `Episode` | `(data map[string]any) SimpsonsCharacterEntity` | Create an Episode entity instance. |
| `Location` | `(data map[string]any) SimpsonsCharacterEntity` | Create a Location entity instance. |

### Entity interface (SimpsonsCharacterEntity)

All entities implement the `SimpsonsCharacterEntity` interface.

| Method | Signature | Description |
| --- | --- | --- |
| `Load` | `(reqmatch, ctrl map[string]any) (any, error)` | Load a single entity by match criteria. |
| `List` | `(reqmatch, ctrl map[string]any) (any, error)` | List entities matching the criteria. |
| `Data` | `(args ...any) any` | Get or set entity data. |
| `Match` | `(args ...any) any` | Get or set entity match criteria. |
| `Make` | `() Entity` | Create a new instance with the same options. |
| `GetName` | `() string` | Return the entity name. |

### Result shape

Entity operations return `(value, error)`. The `value` is the
operation's data **directly** — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `Load` | the entity record (`map[string]any`) |
| `List` | a `[]any` of entity records |

Check `err` first, then use the value directly (or the typed
`...Typed` variants, which return the entity's model struct and a typed
slice):

    character, err := client.Character(nil).List(map[string]any{/* fields */}, nil)
    if err != nil { /* handle */ }
    // character is the returned record

Only `Direct()` returns a response envelope — a `map[string]any` with
`"ok"`, `"status"`, `"headers"`, and `"data"` keys.

### Entities

#### Character

| Field | Description |
| --- | --- |
| `"age"` | Age of the character |
| `"birthdate"` | Birthdate of the character in YYYY-MM-DD format |
| `"gender"` | Gender of the character |
| `"id"` | Unique identifier for the character |
| `"name"` | Full name of the character |
| `"occupation"` | Occupation or job title of the character |
| `"phrases"` | Famous quotes and catchphrases of the character |
| `"portrait_path"` | Path to the character's portrait image (served via CDN) |
| `"status"` | Current status of the character |

Operations: List, Load.

API path: `/characters`

#### Episode

| Field | Description |
| --- | --- |
| `"air_date"` | Original air date of the episode |
| `"episode_number"` | Episode number within the season |
| `"id"` | Unique identifier for the episode |
| `"image_path"` | Path to the episode image |
| `"season"` | Season number |
| `"synopsis"` | Brief synopsis of the episode |
| `"title"` | Title of the episode |

Operations: List, Load.

API path: `/episodes`

#### Location

| Field | Description |
| --- | --- |
| `"description"` | Description of the location |
| `"id"` | Unique identifier for the location |
| `"image_path"` | Path to the location image |
| `"name"` | Name of the location |
| `"type"` | Type of location (home, business, landmark, etc.) |

Operations: List, Load.

API path: `/locations`



## Entities


### Character

Create an instance: `character := client.Character(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `age` | `int` | Age of the character |
| `birthdate` | `string` | Birthdate of the character in YYYY-MM-DD format |
| `gender` | `string` | Gender of the character |
| `id` | `int` | Unique identifier for the character |
| `name` | `string` | Full name of the character |
| `occupation` | `string` | Occupation or job title of the character |
| `phrases` | `[]any` | Famous quotes and catchphrases of the character |
| `portrait_path` | `string` | Path to the character's portrait image (served via CDN) |
| `status` | `string` | Current status of the character |

#### Example: Load

```go
character, err := client.Character(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(character) // the loaded record
```

#### Example: List

```go
characters, err := client.Character(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(characters) // the array of records
```


### Episode

Create an instance: `episode := client.Episode(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `air_date` | `string` | Original air date of the episode |
| `episode_number` | `int` | Episode number within the season |
| `id` | `int` | Unique identifier for the episode |
| `image_path` | `string` | Path to the episode image |
| `season` | `int` | Season number |
| `synopsis` | `string` | Brief synopsis of the episode |
| `title` | `string` | Title of the episode |

#### Example: Load

```go
episode, err := client.Episode(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(episode) // the loaded record
```

#### Example: List

```go
episodes, err := client.Episode(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(episodes) // the array of records
```


### Location

Create an instance: `location := client.Location(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `string` | Description of the location |
| `id` | `int` | Unique identifier for the location |
| `image_path` | `string` | Path to the location image |
| `name` | `string` | Name of the location |
| `type` | `string` | Type of location (home, business, landmark, etc.) |

#### Example: Load

```go
location, err := client.Location(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(location) // the loaded record
```

#### Example: List

```go
locations, err := client.Location(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(locations) // the array of records
```

## Features

This SDK ships 1 optional features. Each is **inactive until you
switch it on**, so an SDK you have not configured behaves exactly as if none of
them existed — no retries, no cache, no logging, no measurable overhead.

Activate a feature by name in the client options, alongside the options shown
above:

| Feature | What it does |
|---|---|
| [`test`](#test) | In-memory mock transport for testing without a live server |

### test

In-memory mock transport for testing without a live server.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.test.active` to enable it, then override any of the options above.


## Advanced

> The sections above cover everyday use. The material below explains the
> SDK's internals — useful when extending it with custom features, but not
> needed for normal use.

### The operation pipeline

Every entity operation follows a six-stage pipeline. Each stage fires a
feature hook before executing:

```
PrePoint → PreSpec → PreRequest → PreResponse → PreResult → PreDone
```

- **PrePoint**: Resolves which API endpoint to call based on the
  operation name and entity configuration.
- **PreSpec**: Builds the HTTP spec — URL, method, headers, body —
  from the resolved point and the caller's parameters.
- **PreRequest**: Sends the HTTP request. Features can intercept here
  to replace the transport (as TestFeature does with mocks).
- **PreResponse**: Parses the raw HTTP response.
- **PreResult**: Extracts the business data from the parsed response.
- **PreDone**: Final stage before returning to the caller. Entity
  state (match, data) is updated here.

If any stage errors, the pipeline short-circuits and the error surfaces
to the caller — see [Error handling](#error-handling) for how that looks
in this language.

### Features and hooks

Features are the extension mechanism. A feature implements the
`Feature` interface and provides hooks — functions keyed by pipeline
stage names.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as maps

The Go SDK uses `map[string]any` throughout rather than typed structs.
This mirrors the dynamic nature of the API and keeps the SDK
flexible — no code generation is needed when the API schema changes.

Use `core.ToMapAny()` to safely cast results and nested data.

### Package structure

```
github.com/voxgig-sdk/simpsons-character-sdk/go/
├── simpsons-character.go        # Root package — type aliases and constructors
├── core/               # SDK core — client, types, pipeline
├── entity/             # Entity implementations
├── feature/            # Built-in features (Base, Test, Log)
├── utility/            # Utility functions and struct library
└── test/               # Test suites
```

The root package (`github.com/voxgig-sdk/simpsons-character-sdk/go`) re-exports everything needed
for normal use. Import sub-packages only when you need specific types
like `core.ToMapAny`.

### Entity state

Entity instances are stateful. After a successful `List`, the entity
stores the returned data and match criteria internally.

```go
episode := client.Episode(nil)
episode.List(nil, nil)

// episode.Data() now returns the episode data from the last list
// episode.Match() returns the last match criteria
```

Call `Make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`Direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `Prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
