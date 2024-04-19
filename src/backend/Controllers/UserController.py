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

@router.get("/users/", response_model=list[UserModel])
async def get_all_users():
    return user_service.get_all_users()

@router.put("/users/{user_id}")
async def update_user(user_id: int, user: UserModel):
    updated_user = user_service.update_user_by_id(user_id, **user.dict())
    if not updated_user:
        raise HTTPException(status_code=404, detail="User not found")
    return {"message": "User updated successfully"}

@router.delete("/users/{user_id}")
async def delete_user(user_id: int):
    deleted = user_service.delete_user_by_id(user_id)
    if not deleted:
        raise HTTPException(status_code=404, detail="User not found")
    return {"message": "User deleted successfully"}