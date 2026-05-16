# SimpsonsCharacter SDK utility: make_context

from core.context import SimpsonsCharacterContext


def make_context_util(ctxmap, basectx):
    return SimpsonsCharacterContext(ctxmap, basectx)
