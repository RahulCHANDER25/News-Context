from dotenv import load_dotenv

## Later use Settings
load_dotenv() ## Load env before doing anything !

from fastapi import FastAPI
from .routes import about
from .routes.analysis import article

app = FastAPI()


@app.get("/")
async def root():
    return {"message": "Hello World !"}

app.include_router(about.router)
app.include_router(article.router)
