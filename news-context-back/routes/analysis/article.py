import re
from fastapi import HTTPException
import requests

from ...configBack.getSettings import getSettings

from .router import router
from ...schemas.ollamaBody import OllamaBody
from ...schemas.analysis import ArticleBody, AnalysisResponse
from ...tools.URLScrapper import WebSpider
from ...tools.IterateLines import iterate_lines

@router.post("/article")
async def article_analysis(article: ArticleBody):
    try:
        settings = getSettings()
        url = re.findall(settings.url_regex, article.articleBody)

        if len(url) == 0:
            content = None
        else:
            content = WebSpider(url[0], "html.parser").extract_page()
        print(content, url)
        response = requests.post(
            url=f"{settings.ollama_base_URL}/api/generate",
            json=OllamaBody(
                model=article.model,
                prompt=f'\
                    This is a content of an article:\
                    {content.content if content != None else ""}\
                    Resume me this article in 20 words\
                ',
                stream=True
            ).toJson(),
            headers=settings.headers
        )
        response.raise_for_status()
        return AnalysisResponse(generated_text=iterate_lines(response)).toJson()
    except requests.RequestException as e:
        print(e)
        raise HTTPException(status_code=500, detail=e.__str__())
