from functools import lru_cache

from settings import Settings


@lru_cache
def getSettings() -> Settings:
    return Settings()
