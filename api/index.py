from pathlib import Path
import traceback
import uvicorn
from fastapi import FastAPI, Request, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from pydantic import BaseModel
import os
from dotenv import load_dotenv

try:
    from .agent import AgentAsTanveer
    from .agent_instructions import INSTRUCTION
    from .tools import tools
except ImportError:
    from agent import AgentAsTanveer
    from agent_instructions import INSTRUCTION
    from tools import tools

dotenv_path = Path(__file__).resolve().parent / ".env"
load_dotenv(dotenv_path=dotenv_path, override=True)

app = FastAPI()

@app.exception_handler(Exception)
async def all_exception_handler(request: Request, exc: Exception):
    traceback.print_exc()
    return JSONResponse(status_code=500, content={"error": str(exc)})


def get_env_var(name: str, default: str | None = None, required: bool = False) -> str:
    value = os.getenv(name, default)
    if required and not value:
        raise HTTPException(status_code=500, detail=f"Missing required environment variable: {name}")
    return value

class ChatRequest(BaseModel):
    message: str

ALLOWED_ORIGINS = [
    "https://tanveer-qasim.vercel.app", 
    "http://localhost:5173",             
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=ALLOWED_ORIGINS,
    allow_credentials=True,
    allow_methods=["POST"],
    allow_headers=["Content-Type", "X-Portfolio-Token"],
)

@app.post("/api/chat")
def chat(body: ChatRequest):
    NAME = get_env_var("NAME", default="Tanveer", required=True)
    MODEL = get_env_var("MODEL", default="gpt-5-mini", required=True)

    agent = AgentAsTanveer(
        name=NAME,
        model=MODEL,
        instructions=INSTRUCTION.strip(),
        tools=tools,
    )
    result = agent.chat(body.message)
    return {"output": result}

if __name__ == "__main__":
    uvicorn.run("index:app", host="localhost", port=8000, reload=True)
