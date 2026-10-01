import { describe, test } from 'node:test'
import { SDK } from '..'
import { runDefinitionPoint } from './definition-runner'
import { isControlSkipped } from './utility'


// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN: any[] = [
  {
    "entity": "character",
    "accessor": "Character",
    "op": "list",
    "method": "GET",
    "path": "/characters",
    "args": [],
    "select": {
      "page": "v1"
    },
    "headers": [],
    "query": [
      "page"
    ],
    "auth": null,
    "status": 200,
    "sample": [
      {
        "id": 1,
        "age": 39,
        "birthdate": "1956-05-12",
        "gender": "Male",
        "name": "Homer Simpson",
        "occupation": "Safety Inspector",
        "portrait_path": "/character/1.webp",
        "phrases": [
          "Doh!",
          "Why you little...!",
          "Woo-hoo!"
        ],
        "status": "Alive"
      }
    ],
    "idField": "id"
  },
  {
    "entity": "character",
    "accessor": "Character",
    "op": "load",
    "method": "GET",
    "path": "/characters/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": 1
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": null,
    "status": 200,
    "sample": {
      "id": 1,
      "age": 39,
      "birthdate": "1956-05-12",
      "gender": "Male",
      "name": "Homer Simpson",
      "occupation": "Safety Inspector",
      "portrait_path": "/character/1.webp",
      "phrases": [
        "Doh!",
        "Why you little...!",
        "Woo-hoo!"
      ],
      "status": "Alive"
    },
    "idField": "id"
  },
  {
    "entity": "episode",
    "accessor": "Episode",
    "op": "list",
    "method": "GET",
    "path": "/episodes",
    "args": [],
    "select": {
      "page": "v1"
    },
    "headers": [],
    "query": [
      "page"
    ],
    "auth": null,
    "status": 200,
    "sample": [
      {
        "id": 1,
        "title": "Simpsons Roasting on an Open Fire",
        "season": 1,
        "episode_number": 1,
        "air_date": "1989-12-17",
        "synopsis": "x",
        "image_path": "x"
      }
    ],
    "idField": "id"
  },
  {
    "entity": "episode",
    "accessor": "Episode",
    "op": "load",
    "method": "GET",
    "path": "/episodes/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": null,
    "status": 200,
    "sample": {
      "id": 1,
      "title": "Simpsons Roasting on an Open Fire",
      "season": 1,
      "episode_number": 1,
      "air_date": "1989-12-17",
      "synopsis": "x",
      "image_path": "x"
    },
    "idField": "id"
  },
  {
    "entity": "location",
    "accessor": "Location",
    "op": "list",
    "method": "GET",
    "path": "/locations",
    "args": [],
    "select": {
      "page": "v1"
    },
    "headers": [],
    "query": [
      "page"
    ],
    "auth": null,
    "status": 200,
    "sample": [
      {
        "id": 1,
        "name": "742 Evergreen Terrace",
        "type": "Home",
        "description": "x",
        "image_path": "x"
      }
    ],
    "idField": "id"
  },
  {
    "entity": "location",
    "accessor": "Location",
    "op": "load",
    "method": "GET",
    "path": "/locations/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "query": [],
    "auth": null,
    "status": 200,
    "sample": {
      "id": 1,
      "name": "742 Evergreen Terrace",
      "type": "Home",
      "description": "x",
      "image_path": "x"
    },
    "idField": "id"
  }
]


describe('definition', () => {
  for (const point of PLAN) {
    test(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
      const control = isControlSkipped('entityOp', point.entity + '.' + point.op, 'definition')
      if (control.skip) {
        t.skip(control.reason || 'skipped via sdk-test-control.json')
        return
      }
      await runDefinitionPoint(SDK, point)
    })
  }
})
