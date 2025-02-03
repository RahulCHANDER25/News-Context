from pydantic import BaseModel

class About(BaseModel):
    Project: str
    Date: str
    ClientHost: str
