from fastapi import HTTPException
import requests

from ...configBack.ollamaBaseURL import ollamaBaseURL
from ...configBack.headers import headers

from .router import router
from ...schemas.ollamaBody import OllamaBody
from ...schemas.analysis import ArticleBody, AnalysisResponse
from ...tools.URLScrapper import WebSpider

@router.post("/article")
async def article_analysis(article: ArticleBody):
    try:
        content = WebSpider(article.articleURL, "html.parser").extract_page()
        response = requests.post(
            url=f"{ollamaBaseURL}/api/generate",
            json=OllamaBody(
                model=article.model,
                prompt=f"\
                    This is a content of an article:\
                    {content.content}\
                    Résume moi l'article en 3 mots\
                ",
                stream=False
            ).toJson(),
            headers=headers
        )
        response.raise_for_status()
        return AnalysisResponse(generated_text=response.json()["response"]).toJson()
    except requests.RequestException as e:
        print(e)
        raise HTTPException(status_code=500, detail=e.__str__())
