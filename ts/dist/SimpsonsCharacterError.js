"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpsonsCharacterError = void 0;
class SimpsonsCharacterError extends Error {
    isSimpsonsCharacterError = true;
    sdk = 'SimpsonsCharacter';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.SimpsonsCharacterError = SimpsonsCharacterError;
//# sourceMappingURL=SimpsonsCharacterError.js.map