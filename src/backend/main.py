from fastapi import FastAPI
from Controllers.UserController import router as user_router
from Controllers.OutputController import router as output_router

app = FastAPI()

app.include_router(user_router)
app.include_router(output_router)
