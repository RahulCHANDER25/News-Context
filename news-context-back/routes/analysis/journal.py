from fastapi import APIRouter, HTTPException
import requests

router = APIRouter(
    prefix="/analysis"
)

headers = {
    "Content-Type": "application/json"
}

@router.post("/journal")
async def journal_analysis():
    try:
        res = requests.post(
            url="http://localhost:11434/api/generate",
            json={"model": "mistral", "prompt": "Say Hello in a few lines !", "stream": False},
            headers=headers
        )
        res.raise_for_status()
        return {"generated_text": res.json()["response"]}
    except requests.RequestException as e:
        print(e)
        raise HTTPException(status_code=500, detail=e.__str__())
    return {}

## List current available ollama models