from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    headers = {
        "Content-Type": "application/json"
    }
    ollama_base_URL: str
    url_regex: str

    model_config = SettingsConfigDict(env_file=".env")
