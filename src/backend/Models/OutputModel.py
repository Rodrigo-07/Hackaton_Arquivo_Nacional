from pydantic import BaseModel
from typing import List, Optional
from datetime import date

table_name = "tbl_outputs"

class OutputModel(BaseModel):
    id: int
    title: str
    date: date
    content: str
    tags: str