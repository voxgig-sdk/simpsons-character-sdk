# SimpsonsCharacter SDK exists test

import pytest
from simpsonscharacter_sdk import SimpsonsCharacterSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = SimpsonsCharacterSDK.test(None, None)
        assert testsdk is not None
