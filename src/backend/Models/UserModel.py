from pydantic import BaseModel
from typing import Optional

table_name = "tbl_users"

class UserModel(BaseModel):
    id: int
    username: str
    email: str
    college: Optional[str] = None
    role: str
    xp: int
    level: int
