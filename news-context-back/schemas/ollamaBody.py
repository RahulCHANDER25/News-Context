import json
from typing import Any


class OllamaBody:
    def __init__(self, model: str, prompt: str, stream: bool):
        self.model: str = model
        self.prompt: str = prompt
        self.stream: bool = stream

    def toJson(self) -> Any:
        return json.loads(json.dumps(self.__dict__))
