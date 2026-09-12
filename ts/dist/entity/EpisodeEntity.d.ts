import { SimpsonsCharacterEntityBase } from '../SimpsonsCharacterEntityBase';
import type { SimpsonsCharacterSDK } from '../SimpsonsCharacterSDK';
import type { Control } from '../types';
import type { Episode, EpisodeLoadMatch, EpisodeListMatch } from '../SimpsonsCharacterTypes';
declare class EpisodeEntity extends SimpsonsCharacterEntityBase<Episode> {
    constructor(client: SimpsonsCharacterSDK, entopts: any);
    make(this: EpisodeEntity): EpisodeEntity;
    load(this: any, reqmatch?: EpisodeLoadMatch, ctrl?: Control): Promise<EpisodeEntity>;
    list(this: any, reqmatch?: EpisodeListMatch, ctrl?: Control): Promise<EpisodeEntity[]>;
}
export { EpisodeEntity };
