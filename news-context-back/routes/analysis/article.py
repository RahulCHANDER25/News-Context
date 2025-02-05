from fastapi import HTTPException
import requests

from ...configBack.ollamaBaseURL import ollamaBaseURL
from ...configBack.headers import headers

from .router import router
from ...schemas.ollamaBody import OllamaBody
from ...schemas.analysis import ArticleBody, AnalysisResponse


@router.post("/article")
async def article_analysis(article: ArticleBody):
    try:
        response = requests.post(
            url=f"{ollamaBaseURL}/api/generate",
            json=OllamaBody(
                model=article.model,
                prompt=f"You are given a article resume it to me in a few lines ! {article.articleURL}", ## Function that scrap the datas in the article
                stream=False
            ).toJson(),
            headers=headers
        )
        response.raise_for_status()
        return AnalysisResponse(generated_text=response.json()["response"]).toJson()
    except requests.RequestException as e:
        print(e)
        raise HTTPException(status_code=500, detail=e.__str__())
