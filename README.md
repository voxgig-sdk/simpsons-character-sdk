# SimpsonsCharacter SDK

Browse characters, episodes, and Springfield locations from The Simpsons universe over a simple REST API

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About Simpsons Character API

The Simpsons API is an unofficial RESTful API for the Simpsons universe, built and maintained by [Facundo Gonza (FacuG03)](https://github.com/Facug03/the-simpsons-api). It exposes data drawn from The Simpsons Wiki for use in fan projects, demos, and tutorials.

What you get from the API:

- **Characters** (1,100+) — name, age, birthdate, gender, occupation, status, famous phrases, and a portrait image path.
- **Episodes** (700+) — episode records from the show's run.
- **Locations** (470+) — places in and around Springfield.
- **Images** — character portraits served via the project's CDN.

The API is open and requires no authentication or API key. Responses are JSON and list endpoints are paginated at 20 items per page. Service health and uptime can be checked at [status.thesimpsonsapi.com](https://status.thesimpsonsapi.com/), and the source code lives on [GitHub](https://github.com/Facug03/the-simpsons-api).

## Try it

**TypeScript**
```bash
npm install simpsons-character
```

**Python**
```bash
pip install simpsons-character-sdk
```

**PHP**
```bash
composer require voxgig/simpsons-character-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/simpsons-character-sdk/go
```

**Ruby**
```bash
gem install simpsons-character-sdk
```

**Lua**
```bash
luarocks install simpsons-character-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { SimpsonsCharacterSDK } from 'simpsons-character'

const client = new SimpsonsCharacterSDK({})

// List all characters
const characters = await client.Character().list()
```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o simpsons-character-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "simpsons-character": {
      "command": "/abs/path/to/simpsons-character-mcp"
    }
  }
}
```

## Entities

The API exposes 3 entities:

| Entity | Description | API path |
| --- | --- | --- |
| **Character** | A figure from The Simpsons universe with fields such as name, age, birthdate, gender, occupation, status, famous phrases, and portrait — served from `/api/characters`. | `/characters` |
| **Episode** | An episode record from the show's catalogue — served from `/api/episodes`. | `/episodes` |
| **Location** | A place in or around Springfield that appears in the show — served from `/api/locations`. | `/locations` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from simpsonscharacter_sdk import SimpsonsCharacterSDK

client = SimpsonsCharacterSDK({})

# List all characters
characters, err = client.Character(None).list(None, None)

# Load a specific character
character, err = client.Character(None).load(
    {"id": "example_id"}, None
)
```

### PHP

```php
<?php
require_once 'simpsonscharacter_sdk.php';

$client = new SimpsonsCharacterSDK([]);

// List all characters
[$characters, $err] = $client->Character(null)->list(null, null);

// Load a specific character
[$character, $err] = $client->Character(null)->load(
    ["id" => "example_id"], null
);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/simpsons-character-sdk/go"

client := sdk.NewSimpsonsCharacterSDK(map[string]any{})

// List all characters
characters, err := client.Character(nil).List(nil, nil)
```

### Ruby

```ruby
require_relative "SimpsonsCharacter_sdk"

client = SimpsonsCharacterSDK.new({})

# List all characters
characters, err = client.Character(nil).list(nil, nil)

# Load a specific character
character, err = client.Character(nil).load(
  { "id" => "example_id" }, nil
)
```

### Lua

```lua
local sdk = require("simpsons-character_sdk")

local client = sdk.new({})

-- List all characters
local characters, err = client:Character(nil):list(nil, nil)

-- Load a specific character
local character, err = client:Character(nil):load(
  { id = "example_id" }, nil
)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = SimpsonsCharacterSDK.test()
const result = await client.Character().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = SimpsonsCharacterSDK.test(None, None)
result, err = client.Character(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = SimpsonsCharacterSDK::test(null, null);
[$result, $err] = $client->Character(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.Character(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = SimpsonsCharacterSDK.test(nil, nil)
result, err = client.Character(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:Character(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the Simpsons Character API

- Upstream: [https://thesimpsonsapi.com/](https://thesimpsonsapi.com/)

- Underlying data is sourced from The Simpsons Wiki and is licensed under the **Creative Commons Attribution-ShareAlike License (CC BY-SA)**.
- If you redistribute or build on the data, give attribution and share derivative works under the same licence.
- The Simpsons names, characters, and related marks are property of their respective owners; this is an unofficial fan project.
- Check the [project homepage](https://thesimpsonsapi.com/) for the latest licence details before commercial use.

---

Generated from the Simpsons Character API OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
