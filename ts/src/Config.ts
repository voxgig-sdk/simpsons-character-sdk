
import { BaseFeature } from './feature/base/BaseFeature'
import { RatelimitFeature } from './feature/ratelimit/RatelimitFeature'
import { RetryFeature } from './feature/retry/RetryFeature'
import { TestFeature } from './feature/test/TestFeature'
import { TimeoutFeature } from './feature/timeout/TimeoutFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   ratelimit: RatelimitFeature,
 retry: RetryFeature,
 test: TestFeature,
 timeout: TimeoutFeature,

}


const FEATURE_PLUGINS: Record<string, any[]> = {
  
}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'SimpsonsCharacter',
        slug: "simpsons-character",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     ratelimit:     {
      "options": {
        "active": false,
        "burst": 5,
        "rate": 5
      },
      "optspec": {
        "now": "`$FUNCTION`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 retry:     {
      "options": {
        "active": false,
        "factor": 2,
        "maxDelay": 2000,
        "minDelay": 50,
        "retries": 2,
        "statuses": [
          408,
          425,
          429,
          500,
          502,
          503,
          504
        ]
      },
      "optspec": {
        "jitter": "`$BOOLEAN`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 test:     {
      "options": {
        "active": false
      },
      "optspec": {
        "entity": "`$MAP`",
        "net": "`$MAP`"
      },
      "strict": false,
      "transport": "base"
    },
 timeout:     {
      "options": {
        "active": false,
        "ms": 30000
      },
      "optspec": {
        "clearTimer": "`$FUNCTION`",
        "now": "`$FUNCTION`",
        "setTimer": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },

  }


  options = {
    base: "https://thesimpsonsapi.com/api",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
        character: {
        },
  
        episode: {
        },
  
        location: {
        },
  
    }
  }


  entity = {
    "character": {
      "fields": [
        {
          "name": "age",
          "title": "Age",
          "type": "`$INTEGER`",
          "short": "Age of the character"
        },
        {
          "name": "birthdate",
          "title": "Birthdate",
          "type": "`$STRING`",
          "short": "Birthdate of the character in YYYY-MM-DD format",
          "format": "date"
        },
        {
          "name": "gender",
          "title": "Gender",
          "type": "`$STRING`",
          "short": "Gender of the character"
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$INTEGER`",
          "req": true,
          "short": "Unique identifier for the character"
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "req": true,
          "short": "Full name of the character"
        },
        {
          "name": "occupation",
          "title": "Occupation",
          "type": "`$STRING`",
          "short": "Occupation or job title of the character"
        },
        {
          "name": "phrases",
          "title": "Phrases",
          "type": "`$ARRAY`",
          "short": "Famous quotes and catchphrases of the character"
        },
        {
          "name": "portrait_path",
          "title": "Portrait Path",
          "type": "`$STRING`",
          "short": "Path to the character's portrait image (served via CDN)"
        },
        {
          "name": "status",
          "title": "Status",
          "type": "`$STRING`",
          "short": "Current status of the character"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "character",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/characters",
              "segments": [
                {
                  "lit": "characters"
                }
              ],
              "parts": [
                "characters"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "query": [
                  {
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`",
                    "kind": "query",
                    "example": 1
                  }
                ]
              },
              "select": {},
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/characters/{id}",
              "segments": [
                {
                  "lit": "characters"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "characters",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$INTEGER`",
                    "kind": "param",
                    "reqd": true,
                    "example": 1
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              },
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "episode": {
      "fields": [
        {
          "name": "air_date",
          "title": "Air Date",
          "type": "`$STRING`",
          "short": "Original air date of the episode",
          "format": "date"
        },
        {
          "name": "episode_number",
          "title": "Episode Number",
          "type": "`$INTEGER`",
          "short": "Episode number within the season"
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$INTEGER`",
          "req": true,
          "short": "Unique identifier for the episode"
        },
        {
          "name": "image_path",
          "title": "Image Path",
          "type": "`$STRING`",
          "short": "Path to the episode image"
        },
        {
          "name": "season",
          "title": "Season",
          "type": "`$INTEGER`",
          "short": "Season number"
        },
        {
          "name": "synopsis",
          "title": "Synopsis",
          "type": "`$STRING`",
          "short": "Brief synopsis of the episode"
        },
        {
          "name": "title",
          "title": "Title",
          "type": "`$STRING`",
          "req": true,
          "short": "Title of the episode"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "episode",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/episodes",
              "segments": [
                {
                  "lit": "episodes"
                }
              ],
              "parts": [
                "episodes"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "query": [
                  {
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`",
                    "kind": "query",
                    "example": 1
                  }
                ]
              },
              "select": {},
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/episodes/{id}",
              "segments": [
                {
                  "lit": "episodes"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "episodes",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$INTEGER`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              },
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "location": {
      "fields": [
        {
          "name": "description",
          "title": "Description",
          "type": "`$STRING`",
          "short": "Description of the location"
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$INTEGER`",
          "req": true,
          "short": "Unique identifier for the location"
        },
        {
          "name": "image_path",
          "title": "Image Path",
          "type": "`$STRING`",
          "short": "Path to the location image"
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "req": true,
          "short": "Name of the location"
        },
        {
          "name": "type",
          "title": "Type",
          "type": "`$STRING`",
          "short": "Type of location (home, business, landmark, etc.)"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "location",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/locations",
              "segments": [
                {
                  "lit": "locations"
                }
              ],
              "parts": [
                "locations"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "query": [
                  {
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`",
                    "kind": "query",
                    "example": 1
                  }
                ]
              },
              "select": {},
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/locations/{id}",
              "segments": [
                {
                  "lit": "locations"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "locations",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$INTEGER`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              },
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config,
  FEATURE_PLUGINS,
}

