from http.client import HTTPException
from typing import Any
from bs4 import BeautifulSoup
from pydantic import BaseModel
import requests

class PageContent(BaseModel):
    content: list[Any]

class WebSpider:
    def __init__(self, url: str, type: str):
        self.url = url
        self.type = type

    def extract_page(self) -> PageContent:
        try:
            response = requests.get(self.url)
            response.raise_for_status()
        except requests.exceptions.RequestException as e:
            raise HTTPException(status_code=400, detail=f"Spider error while parsing the page : {e}")

        soup = BeautifulSoup(response.text, 'html.parser')
        paragraphs = soup.find_all('p')
        content = [p.get_text() for p in paragraphs]
        return PageContent(content=content)
