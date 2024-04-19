from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from Controllers.UserController import router as user_router
from Controllers.OutputController import router as output_router
from Controllers.DocumentController import router as document_router

app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# roteadores
app.include_router(user_router)
app.include_router(output_router)
app.include_router(document_router)
