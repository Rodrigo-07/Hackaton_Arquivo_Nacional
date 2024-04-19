from pydantic import BaseModel
from typing import List, Optional

table_name = "tbl_documents"

class DocumentModel(BaseModel):
    id: int
    data_type: Optional[str] = None
    path: str