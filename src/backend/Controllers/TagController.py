from fastapi import APIRouter, HTTPException, Path
from Models.TagModel import TagModel
from Services.TagService import TagService

router = APIRouter()

@router.post("/tags/")
async def create_tag(tag: TagModel):
    TagService.create_tag(tag)
    return {"message": "Tag created successfully"}

@router.get("/tags/{tag_id}")
async def read_tag(tag_id: int):
    tag = TagService.get_tag_by_id(tag_id)
    if tag:
        return tag.dict()
    else:
        raise HTTPException(status_code=404, detail="Tag not found")

@router.put("/tags/{tag_id}")
async def update_tag(tag_id: int, tag: TagModel):
    existing_tag = TagService.get_tag_by_id(tag_id)
    if existing_tag:
        TagService.update_tag(tag_id, tag)
        return {"message": "Tag updated successfully"}
    else:
        raise HTTPException(status_code=404, detail="Tag not found")

@router.delete("/tags/{tag_id}")
async def delete_tag(tag_id: int):
    existing_tag = TagService.get_tag_by_id(tag_id)
    if existing_tag:
        TagService.delete_tag(tag_id)
        return {"message": "Tag deleted successfully"}
    else:
        raise HTTPException(status_code=404, detail="Tag not found")
