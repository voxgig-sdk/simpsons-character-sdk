# SimpsonsCharacter SDK feature factory

from simpsonscharacter_sdk.feature.base_feature import SimpsonsCharacterBaseFeature
from simpsonscharacter_sdk.feature.ratelimit_feature import SimpsonsCharacterRatelimitFeature
from simpsonscharacter_sdk.feature.retry_feature import SimpsonsCharacterRetryFeature
from simpsonscharacter_sdk.feature.test_feature import SimpsonsCharacterTestFeature
from simpsonscharacter_sdk.feature.timeout_feature import SimpsonsCharacterTimeoutFeature


_FEATURES = {
    "base": lambda: SimpsonsCharacterBaseFeature(),
    "ratelimit": lambda: SimpsonsCharacterRatelimitFeature(),
    "retry": lambda: SimpsonsCharacterRetryFeature(),
    "test": lambda: SimpsonsCharacterTestFeature(),
    "timeout": lambda: SimpsonsCharacterTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
