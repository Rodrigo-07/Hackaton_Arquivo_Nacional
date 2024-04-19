from fastapi import APIRouter, HTTPException, Path
from Models.OutputModel import OutputModel
from Services.OutputService import OutputService

router = APIRouter()

@router.post("/outputs/")
async def create_output(output: OutputModel):
    OutputService.create_output(output)
    return {"message": "Output created successfully"}

@router.get("/outputs/{output_id}")
async def read_output(output_id: int):
    output = OutputService.get_output_by_id(output_id)
    if output:
        return output.dict()
    else:
        raise HTTPException(status_code=404, detail="Output not found")

@router.put("/outputs/{output_id}")
async def update_output(output_id: int, output: OutputModel):
    existing_output = OutputService.get_output_by_id(output_id)
    if existing_output:
        OutputService.update_output(output_id, output)
        return {"message": "Output updated successfully"}
    else:
        raise HTTPException(status_code=404, detail="Output not found")

@router.delete("/outputs/{output_id}")
async def delete_output(output_id: int):
    existing_output = OutputService.get_output_by_id(output_id)
    if existing_output:
        OutputService.delete_output(output_id)
        return {"message": "Output deleted successfully"}
    else:
        raise HTTPException(status_code=404, detail="Output not found")
