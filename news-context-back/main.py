from dotenv import load_dotenv

load_dotenv() ## Load env

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .routes import about
from .routes.analysis import article

app = FastAPI()


origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def root():
    return {"message": "Hello World !"}

app.include_router(about.router)
app.include_router(article.router)
