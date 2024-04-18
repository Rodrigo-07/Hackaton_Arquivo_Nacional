from fastapi import APIRouter, HTTPException
from Models.OutputModel import OutputModel
from Services.OutputService import OutputService
from Data.DBManager import DBManager

router = APIRouter()
db_manager = DBManager("Data/database/db.sqlite")
output_service = OutputService(db_manager)

@router.post("/outputs/")
async def create_output(output: OutputModel):
    output_service.create_output(**output.dict())
    return {"message": "Output created successfully"}

@router.get("/outputs/{output_id}")
async def get_output(output_id: int):
    output = output_service.get_output_by_id(output_id)
    if not output:
        raise HTTPException(status_code=404, detail="Output not found")
    return output

@router.put("/outputs/{output_id}")
async def update_output(output_id: int, output: OutputModel):
    existing_output = output_service.get_output_by_id(output_id)
    if not existing_output:
        raise HTTPException(status_code=404, detail="Output not found")
    output_service.update_output(output_id, **output.dict())
    return {"message": "Output updated successfully"}

@router.delete("/outputs/{output_id}")
async def delete_output(output_id: int):
    existing_output = output_service.get_output_by_id(output_id)
    if not existing_output:
        raise HTTPException(status_code=404, detail="Output not found")
    output_service.delete_output(output_id)
    return {"message": "Output deleted successfully"}
