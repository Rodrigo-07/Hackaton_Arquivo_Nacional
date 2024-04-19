from fastapi import FastAPI
from fastapi.openapi.utils import get_openapi
from fastapi.openapi.docs import get_swagger_ui_html
from starlette.responses import JSONResponse
from Controllers.UserController import router as user_router
from Controllers.OutputController import router as output_router
from Controllers.DocumentController import router as document_router

app = FastAPI()

# roteadores
app.include_router(user_router)
app.include_router(output_router)
app.include_router(document_router)
