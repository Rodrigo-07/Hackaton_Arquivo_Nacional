from fastapi import APIRouter, HTTPException
from Models.UserModel import UserModel
from Services.UserService import UserService
from Data.DBManager import DBManager

router = APIRouter()
db_manager = DBManager("Data/database/db.sqlite")
user_service = UserService(db_manager)

@router.post("/users/")
async def create_user(user: UserModel):
    user_service.create_user(**user.dict())
    return {"message": "User created successfully"}

@router.get("/users/{user_id}")
async def get_user(user_id: int):
    user = user_service.get_user_by_id(user_id)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return user