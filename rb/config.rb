# SimpsonsCharacter SDK configuration

module SimpsonsCharacterConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
  def self.make_config
    {
      "main" => {
        "name" => "SimpsonsCharacter",
        "slug" => "simpsons-character",
        "version" => "0.0.1",
        "target" => "rb",
      },
      "feature" => {
        "ratelimit" => {
          "options" => {
            "active" => false,
            "burst" => 5,
            "rate" => 5,
          },
          "optspec" => {
            "now" => "`$FUNCTION`",
            "sleep" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
        "retry" => {
          "options" => {
            "active" => false,
            "factor" => 2,
            "maxDelay" => 2000,
            "minDelay" => 50,
            "retries" => 2,
            "statuses" => [
              408,
              425,
              429,
              500,
              502,
              503,
              504,
            ],
          },
          "optspec" => {
            "jitter" => "`$BOOLEAN`",
            "sleep" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
        "test" => {
          "options" => {
            "active" => false,
          },
          "optspec" => {
            "entity" => "`$MAP`",
            "net" => "`$MAP`",
          },
          "strict" => false,
          "transport" => "base",
        },
        "timeout" => {
          "options" => {
            "active" => false,
            "ms" => 30000,
          },
          "optspec" => {
            "clearTimer" => "`$FUNCTION`",
            "setTimer" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
      },
      "options" => {
        "base" => "https://thesimpsonsapi.com/api",
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "character" => {},
          "episode" => {},
          "location" => {},
        },
      },
      "entity" => {
        "character" => {
          "fields" => [
            {
              "name" => "age",
              "title" => "Age",
              "type" => "`$INTEGER`",
              "short" => "Age of the character",
            },
            {
              "name" => "birthdate",
              "title" => "Birthdate",
              "type" => "`$STRING`",
              "short" => "Birthdate of the character in YYYY-MM-DD format",
              "format" => "date",
            },
            {
              "name" => "gender",
              "title" => "Gender",
              "type" => "`$STRING`",
              "short" => "Gender of the character",
            },
            {
              "name" => "id",
              "title" => "Id",
              "type" => "`$INTEGER`",
              "req" => true,
              "short" => "Unique identifier for the character",
            },
            {
              "name" => "name",
              "title" => "Name",
              "type" => "`$STRING`",
              "req" => true,
              "short" => "Full name of the character",
            },
            {
              "name" => "occupation",
              "title" => "Occupation",
              "type" => "`$STRING`",
              "short" => "Occupation or job title of the character",
            },
            {
              "name" => "phrases",
              "title" => "Phrases",
              "type" => "`$ARRAY`",
              "short" => "Famous quotes and catchphrases of the character",
            },
            {
              "name" => "portrait_path",
              "title" => "Portrait Path",
              "type" => "`$STRING`",
              "short" => "Path to the character's portrait image (served via CDN)",
            },
            {
              "name" => "status",
              "title" => "Status",
              "type" => "`$STRING`",
              "short" => "Current status of the character",
            },
          ],
          "id" => {
            "field" => "id",
            "name" => "id",
          },
          "name" => "character",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/characters",
                  "segments" => [
                    {
                      "lit" => "characters",
                    },
                  ],
                  "parts" => [
                    "characters",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "query" => [
                      {
                        "name" => "page",
                        "orig" => "page",
                        "type" => "`$INTEGER`",
                        "kind" => "query",
                        "example" => 1,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "page",
                    ],
                  },
                },
              ],
            },
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/characters/{id}",
                  "segments" => [
                    {
                      "lit" => "characters",
                    },
                    {
                      "var" => "id",
                    },
                  ],
                  "parts" => [
                    "characters",
                    "{id}",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "id",
                        "orig" => "id",
                        "type" => "`$INTEGER`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => 1,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "id",
                    ],
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "episode" => {
          "fields" => [
            {
              "name" => "air_date",
              "title" => "Air Date",
              "type" => "`$STRING`",
              "short" => "Original air date of the episode",
              "format" => "date",
            },
            {
              "name" => "episode_number",
              "title" => "Episode Number",
              "type" => "`$INTEGER`",
              "short" => "Episode number within the season",
            },
            {
              "name" => "id",
              "title" => "Id",
              "type" => "`$INTEGER`",
              "req" => true,
              "short" => "Unique identifier for the episode",
            },
            {
              "name" => "image_path",
              "title" => "Image Path",
              "type" => "`$STRING`",
              "short" => "Path to the episode image",
            },
            {
              "name" => "season",
              "title" => "Season",
              "type" => "`$INTEGER`",
              "short" => "Season number",
            },
            {
              "name" => "synopsis",
              "title" => "Synopsis",
              "type" => "`$STRING`",
              "short" => "Brief synopsis of the episode",
            },
            {
              "name" => "title",
              "title" => "Title",
              "type" => "`$STRING`",
              "req" => true,
              "short" => "Title of the episode",
            },
          ],
          "id" => {
            "field" => "id",
            "name" => "id",
          },
          "name" => "episode",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/episodes",
                  "segments" => [
                    {
                      "lit" => "episodes",
                    },
                  ],
                  "parts" => [
                    "episodes",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "query" => [
                      {
                        "name" => "page",
                        "orig" => "page",
                        "type" => "`$INTEGER`",
                        "kind" => "query",
                        "example" => 1,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "page",
                    ],
                  },
                },
              ],
            },
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/episodes/{id}",
                  "segments" => [
                    {
                      "lit" => "episodes",
                    },
                    {
                      "var" => "id",
                    },
                  ],
                  "parts" => [
                    "episodes",
                    "{id}",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "id",
                        "orig" => "id",
                        "type" => "`$INTEGER`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "id",
                    ],
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "location" => {
          "fields" => [
            {
              "name" => "description",
              "title" => "Description",
              "type" => "`$STRING`",
              "short" => "Description of the location",
            },
            {
              "name" => "id",
              "title" => "Id",
              "type" => "`$INTEGER`",
              "req" => true,
              "short" => "Unique identifier for the location",
            },
            {
              "name" => "image_path",
              "title" => "Image Path",
              "type" => "`$STRING`",
              "short" => "Path to the location image",
            },
            {
              "name" => "name",
              "title" => "Name",
              "type" => "`$STRING`",
              "req" => true,
              "short" => "Name of the location",
            },
            {
              "name" => "type",
              "title" => "Type",
              "type" => "`$STRING`",
              "short" => "Type of location (home, business, landmark, etc.)",
            },
          ],
          "id" => {
            "field" => "id",
            "name" => "id",
          },
          "name" => "location",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/locations",
                  "segments" => [
                    {
                      "lit" => "locations",
                    },
                  ],
                  "parts" => [
                    "locations",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "query" => [
                      {
                        "name" => "page",
                        "orig" => "page",
                        "type" => "`$INTEGER`",
                        "kind" => "query",
                        "example" => 1,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "page",
                    ],
                  },
                },
              ],
            },
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/locations/{id}",
                  "segments" => [
                    {
                      "lit" => "locations",
                    },
                    {
                      "var" => "id",
                    },
                  ],
                  "parts" => [
                    "locations",
                    "{id}",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "id",
                        "orig" => "id",
                        "type" => "`$INTEGER`",
                        "kind" => "param",
                        "reqd" => true,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "id",
                    ],
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    SimpsonsCharacterFeatures.make_feature(name)
  end
end
