# SimpsonsCharacter SDK feature factory

from feature.base_feature import SimpsonsCharacterBaseFeature
from feature.test_feature import SimpsonsCharacterTestFeature


def _make_feature(name):
    features = {
        "base": lambda: SimpsonsCharacterBaseFeature(),
        "test": lambda: SimpsonsCharacterTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
