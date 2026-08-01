from agents import Agent, Runner, trace
from typing import Any
import os
from dotenv import load_dotenv
load_dotenv(override=True)

class AgentAsTanveer(Agent):
    def __init__(self, name: str, model: str, instructions: str, tools: list[Any] = None) -> None:
        super().__init__(
            name = name,
            instructions = instructions,
            tools = tools or [],
            model = model
        )

    def chat(self, message: str) -> str:
        with trace("Someone from Portfolio - Chat"):
            response = Runner.run_sync(
                starting_agent=self,
                input=message,
            )
            return response.final_output