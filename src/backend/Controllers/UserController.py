from fastapi import APIRouter, HTTPException
from Models.UserModel import UserModel
from Services.UserService import UserService

router = APIRouter()

@router.post("/users/")
async def create_user(user: UserModel):
    UserService.create_user(user)
    return {"message": "User created successfully"}

@router.get("/users/{user_id}")
async def get_user(user_id: int):
    user = UserService.get_user_by_id(user_id)
    if user:
        return user.dict()
    else:
        raise HTTPException(status_code=404, detail="User not found")

@router.put("/users/{user_id}")
async def update_user(user_id: int, user: UserModel):
    existing_user = UserService.get_user_by_id(user_id)
    if existing_user:
        UserService.update_user(user_id, user)
        return {"message": "User updated successfully"}
    else:
        raise HTTPException(status_code=404, detail="User not found")

@router.delete("/users/{user_id}")
async def delete_user(user_id: int):
    existing_user = UserService.get_user_by_id(user_id)
    if existing_user:
        UserService.delete_user(user_id)
        return {"message": "User deleted successfully"}
    else:
        raise HTTPException(status_code=404, detail="User not found")
