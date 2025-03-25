from pydantic_settings import BaseSettings, SettingsConfigDict


import os

print("ENV: ", os.environ["OLLAMA_BASE_URL"])

class Settings(BaseSettings):
    headersReq: dict[str, str] = {
        "Content-Type": "application/json"
    }
    ollama_base_URL: str
    url_regex: str

    model_config = SettingsConfigDict(env_file=".env")
