import { CharacterEntity } from './entity/CharacterEntity';
import { EpisodeEntity } from './entity/EpisodeEntity';
import { LocationEntity } from './entity/LocationEntity';
export type * from './SimpsonsCharacterTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { SimpsonsCharacterEntityBase } from './SimpsonsCharacterEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
type DirectResult = {
    ok: false;
    err: any;
    status?: undefined;
    headers?: undefined;
    data?: undefined;
} | {
    ok: boolean;
    status: number;
    headers: any;
    data: any;
    err?: any;
};
declare class SimpsonsCharacterSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<DirectResult>;
    _rawRequest(fetchargs?: any): Promise<DirectResult>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    Character(entopts?: Record<string, any>): CharacterEntity;
    Episode(entopts?: Record<string, any>): EpisodeEntity;
    Location(entopts?: Record<string, any>): LocationEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): SimpsonsCharacterSDK;
    tester(testopts?: any, sdkopts?: any): SimpsonsCharacterSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof SimpsonsCharacterSDK;
export { stdutil, config, BaseFeature, SimpsonsCharacterEntityBase, SimpsonsCharacterSDK, SDK, };
export type { DirectResult };
