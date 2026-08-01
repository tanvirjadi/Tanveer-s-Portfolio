from .agent import AgentAsTanveer
import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import os
from dotenv import load_dotenv
from .agent_instructions import INSTRUCTION
from .tools import tools
load_dotenv(override=True)

app = FastAPI()

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
    NAME = os.getenv("NAME")
    MODEL = os.getenv("MODEL")

    agent = AgentAsTanveer(
        name = NAME,
        model = MODEL,
        instructions = INSTRUCTION,
        tools = tools
    )
    result = agent.chat(body.message)
    return {"message": result}

if __name__ == "__main__":
    uvicorn.run(app, host="localhost", port=8000, reload=True)
