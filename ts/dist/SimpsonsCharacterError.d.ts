import { Context } from './Context';
declare class SimpsonsCharacterError extends Error {
    isSimpsonsCharacterError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { SimpsonsCharacterError };
