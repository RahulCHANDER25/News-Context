from fastapi import HTTPException
import requests

from ...configBack.ollamaBaseURL import ollamaBaseURL
from ...configBack.headers import headers

from .router import router
from ...schemas.ollamaBody import OllamaBody


@router.post("/journal")
async def journal_analysis():
    try:
        response = requests.post(
            url=f"{ollamaBaseURL}/api/generate",
            json=OllamaBody(
                model="mistral",
                prompt="Say Hello in a few lines !",
                stream=False
            ).toJson(),
            headers=headers
        )
        response.raise_for_status()
        return {"generated_text": response.json()["response"]}
    except requests.RequestException as e:
        print(e)
        raise HTTPException(status_code=500, detail=e.__str__())

## List current available ollama models