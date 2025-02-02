from fastapi import APIRouter

router = APIRouter(
    prefix="/analysis"
)

@router.post("/journal")
async def journal_analysis():

    return {}
