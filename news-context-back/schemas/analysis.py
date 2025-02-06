import json
from typing import Any
from pydantic import BaseModel

class ArticleBody(BaseModel):
    model: str
    articleURL: str

    def toJson(self) -> Any:
        return json.loads(json.dumps(self.__dict__))

class AnalysisResponse(BaseModel):
    generated_text: str

    def toJson(self) -> Any:
        return json.loads(json.dumps(self.__dict__))
