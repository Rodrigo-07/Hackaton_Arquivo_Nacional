from fastapi import FastAPI
from Controllers.UserController import router as user_router
from Controllers.OutputController import router as output_router
from Controllers.DocumentController import router as document_router
from Controllers.TagController import router as tag_router

app = FastAPI()

# roteadores
app.include_router(user_router)
app.include_router(output_router)
app.include_router(document_router)
app.include_router(tag_router)
