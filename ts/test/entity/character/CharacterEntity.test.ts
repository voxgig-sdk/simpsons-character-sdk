

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { SimpsonsCharacterSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('CharacterEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when SIMPSONS_CHARACTER_TEST_LIVE=TRUE.
  afterEach(liveDelay('SIMPSONS_CHARACTER_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = SimpsonsCharacterSDK.test()
    const ent = testsdk.Character()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.SIMPSONS_CHARACTER_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'character.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"age","req":false,"short":"Age of the character","type":"`$INTEGER`","index$":0},{"active":true,"format":"date","name":"birthdate","req":false,"short":"Birthdate of the character in YYYY-MM-DD format","type":"`$STRING`","index$":1},{"active":true,"name":"gender","req":false,"short":"Gender of the character","type":"`$STRING`","index$":2},{"active":true,"name":"id","req":true,"short":"Unique identifier for the character","type":"`$INTEGER`","index$":3},{"active":true,"name":"name","req":true,"short":"Full name of the character","type":"`$STRING`","index$":4},{"active":true,"name":"occupation","req":false,"short":"Occupation or job title of the character","type":"`$STRING`","index$":5},{"active":true,"name":"phrases","req":false,"short":"Famous quotes and catchphrases of the character","type":"`$ARRAY`","index$":6},{"active":true,"name":"portrait_path","req":false,"short":"Path to the character's portrait image (served via CDN)","type":"`$STRING`","index$":7},{"active":true,"name":"status","req":false,"short":"Current status of the character","type":"`$STRING`","index$":8}],"id":{"field":"id","name":"id"},"name":"character","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"query":[{"active":true,"example":1,"kind":"query","name":"page","orig":"page","reqd":false,"type":"`$INTEGER`","index$":0}]},"contract":{"id":"GET /characters","json":"{\"operationId\":\"getCharacters\",\"parameters\":[{\"description\":\"Page number for pagination (20 items per page)\",\"in\":\"query\",\"name\":\"page\",\"required\":false,\"schema\":{\"default\":1,\"minimum\":1,\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":[{\"age\":39,\"birthdate\":\"1956-05-12\",\"gender\":\"Male\",\"id\":1,\"name\":\"Homer Simpson\",\"occupation\":\"Safety Inspector\",\"phrases\":[\"Doh!\",\"Why you little...!\",\"Woo-hoo!\"],\"portrait_path\":\"/character/1.webp\",\"status\":\"Alive\"}],\"schema\":{\"items\":{\"properties\":{\"age\":{\"description\":\"Age of the character\",\"example\":39,\"nullable\":true,\"type\":\"integer\"},\"birthdate\":{\"description\":\"Birthdate of the character in YYYY-MM-DD format\",\"example\":\"1956-05-12\",\"format\":\"date\",\"nullable\":true,\"type\":\"string\"},\"gender\":{\"description\":\"Gender of the character\",\"enum\":[\"Male\",\"Female\",\"Unknown\"],\"example\":\"Male\",\"type\":\"string\"},\"id\":{\"description\":\"Unique identifier for the character\",\"example\":1,\"type\":\"integer\"},\"name\":{\"description\":\"Full name of the character\",\"example\":\"Homer Simpson\",\"type\":\"string\"},\"occupation\":{\"description\":\"Occupation or job title of the character\",\"example\":\"Safety Inspector\",\"nullable\":true,\"type\":\"string\"},\"phrases\":{\"description\":\"Famous quotes and catchphrases of the character\",\"example\":[\"Doh!\",\"Why you little...!\",\"Woo-hoo!\"],\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"portrait_path\":{\"description\":\"Path to the character's portrait image (served via CDN)\",\"example\":\"/character/1.webp\",\"type\":\"string\"},\"status\":{\"description\":\"Current status of the character\",\"enum\":[\"Alive\",\"Deceased\",\"Unknown\"],\"example\":\"Alive\",\"type\":\"string\"}},\"required\":[\"id\",\"name\"],\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"Successful response with list of characters\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/characters","segments":[{"lit":"characters"}],"select":{"exist":["page"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"example":1,"kind":"param","name":"id","orig":"id","reqd":true,"type":"`$INTEGER`","index$":0}]},"contract":{"id":"GET /characters/{id}","json":"{\"operationId\":\"getCharacterById\",\"parameters\":[{\"description\":\"Unique identifier of the character\",\"example\":1,\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"minimum\":1,\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":{\"age\":39,\"birthdate\":\"1956-05-12\",\"gender\":\"Male\",\"id\":1,\"name\":\"Homer Simpson\",\"occupation\":\"Safety Inspector\",\"phrases\":[\"Doh!\",\"Why you little...!\",\"Woo-hoo!\",\"Mmm... (food)... *drooling*\",\"Stupid Flanders!\",\"Shut up Flanders!\",\"AAAAGHH!\",\"Lisa, knock off that racket!\",\"Uh oh, the boss.\",\"Lets all go out for frosty chocolate milkshakes!\",\"Whatever, Ill be at Moes.\",\"I am evil Ho-mer! I am evil Ho-mer! I am evil Ho-mer!\",\"Better them than me.\",\"Better them than me... Oh wait, that was me.\",\"Marge, my face hurts again!\"],\"portrait_path\":\"/character/1.webp\",\"status\":\"Alive\"},\"schema\":{\"properties\":{\"age\":{\"description\":\"Age of the character\",\"example\":39,\"nullable\":true,\"type\":\"integer\"},\"birthdate\":{\"description\":\"Birthdate of the character in YYYY-MM-DD format\",\"example\":\"1956-05-12\",\"format\":\"date\",\"nullable\":true,\"type\":\"string\"},\"gender\":{\"description\":\"Gender of the character\",\"enum\":[\"Male\",\"Female\",\"Unknown\"],\"example\":\"Male\",\"type\":\"string\"},\"id\":{\"description\":\"Unique identifier for the character\",\"example\":1,\"type\":\"integer\"},\"name\":{\"description\":\"Full name of the character\",\"example\":\"Homer Simpson\",\"type\":\"string\"},\"occupation\":{\"description\":\"Occupation or job title of the character\",\"example\":\"Safety Inspector\",\"nullable\":true,\"type\":\"string\"},\"phrases\":{\"description\":\"Famous quotes and catchphrases of the character\",\"example\":[\"Doh!\",\"Why you little...!\",\"Woo-hoo!\"],\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"portrait_path\":{\"description\":\"Path to the character's portrait image (served via CDN)\",\"example\":\"/character/1.webp\",\"type\":\"string\"},\"status\":{\"description\":\"Current status of the character\",\"enum\":[\"Alive\",\"Deceased\",\"Unknown\"],\"example\":\"Alive\",\"type\":\"string\"}},\"required\":[\"id\",\"name\"],\"type\":\"object\"}}},\"description\":\"Successful response with character details\"},\"404\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message\",\"type\":\"string\"},\"status\":{\"description\":\"HTTP status code\",\"type\":\"integer\"}},\"type\":\"object\"}}},\"description\":\"Character not found\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/characters/{id}","segments":[{"lit":"characters"},{"var":"id"}],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"character","name__orig":"character","Name":"Character","name_":"character","name-":"character","NAME":"CHARACTER","index$":0}, {"active":true,"entity":"character","key$":"BasicCharacterFlow","kind":"basic","name":"BasicCharacterFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"character_ref01"}}],"index$":0},{"active":true,"data":{},"input":{"ref":"character_ref01","srcdatavar":"character_ref01_data","suffix":"_dt0"},"match":{"id":"character01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-character_ref01"}}],"index$":1}]}, 'Character')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let character_ref01_data = Object.values(setup.data.existing.character)[0] as any

    // LIST
    const character_ref01_ent = client.Character()
    const character_ref01_match: any = {}

    const character_ref01_list = (await character_ref01_ent.list(character_ref01_match)).map((e: any) => e.data())


    // LOAD
    const character_ref01_match_dt0: any = {}
    character_ref01_match_dt0.id = character_ref01_data.id
    const character_ref01_data_dt0 = (await character_ref01_ent.load(character_ref01_match_dt0)).data()
    assert(character_ref01_data_dt0.id === character_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/character/CharacterTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = SimpsonsCharacterSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['character01','character02','character03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'SIMPSONS_CHARACTER_TEST_CHARACTER_ENTID': idmap,
    'SIMPSONS_CHARACTER_TEST_LIVE': 'FALSE',
    'SIMPSONS_CHARACTER_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['SIMPSONS_CHARACTER_TEST_CHARACTER_ENTID']

  const live = 'TRUE' === env.SIMPSONS_CHARACTER_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['SIMPSONS_CHARACTER_TEST_CHARACTER_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new SimpsonsCharacterSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.SIMPSONS_CHARACTER_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
