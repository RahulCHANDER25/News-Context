from fastapi import FastAPI
from .routes import about
from .routes.analysis import journal

app = FastAPI()


@app.get("/")
async def root():
    return {"message": "Hello World !"}

app.include_router(about.router)
app.include_router(journal.router)
