from fastapi import FastAPI
from fastapi.openapi.utils import get_openapi
from fastapi.openapi.docs import get_swagger_ui_html
from starlette.responses import JSONResponse
from Controllers.UserController import router as user_router
from Controllers.OutputController import router as output_router

app = FastAPI()

# roteadores
app.include_router(user_router)
app.include_router(output_router)

# documentação do Swagger UI
@app.get("/docs", include_in_schema=False)
async def custom_swagger_ui_html():
    return get_swagger_ui_html(openapi_url="/openapi.json", title="API Docs")

# especificação OpenAPI
@app.get("/openapi.json", include_in_schema=False)
async def get_open_api_endpoint():
    return JSONResponse(get_openapi(title="API Docs", version="1.0.0", routes=app.routes))


@app.get("/")
async def get_archve():
    pass