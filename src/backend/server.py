from fastapi import FastAPI

server = FastAPI()


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(server)