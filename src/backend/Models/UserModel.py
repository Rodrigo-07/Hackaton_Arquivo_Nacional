from pydantic import BaseModel
from typing import Optional

table_name = "tbl_users"

class UserModel(BaseModel):
    id: int
    username: str
    password: str
    email: str
    isStudying: bool
    college: Optional[str] = None
    major: str
    role: int # 1: admin | 2: revisor | 3: default
    xp: int
    level: int
    credits: float
    hours_credit: int
