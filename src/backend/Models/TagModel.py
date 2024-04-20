from pydantic import BaseModel

table_name = "tbl_tags"

class TagModel(BaseModel):
    id: int
    tag_name: str
    indice: str