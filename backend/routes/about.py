from fastapi import APIRouter, Request
from datetime import date
from ..schemas.about import About


router = APIRouter()

@router.get("/about")
async def about(request: Request) -> About:
    return About(
        Project="News Context",
        Date=date.today().strftime("%d/%m/%Y"),
        ClientHost=request.client.host
    )
