import { SimpsonsCharacterEntityBase } from '../SimpsonsCharacterEntityBase';
import type { SimpsonsCharacterSDK } from '../SimpsonsCharacterSDK';
import type { Control } from '../types';
import type { Location, LocationLoadMatch, LocationListMatch } from '../SimpsonsCharacterTypes';
declare class LocationEntity extends SimpsonsCharacterEntityBase<Location> {
    constructor(client: SimpsonsCharacterSDK, entopts: any);
    make(this: LocationEntity): LocationEntity;
    load(this: any, reqmatch?: LocationLoadMatch, ctrl?: Control): Promise<LocationEntity>;
    list(this: any, reqmatch?: LocationListMatch, ctrl?: Control): Promise<LocationEntity[]>;
}
export { LocationEntity };
