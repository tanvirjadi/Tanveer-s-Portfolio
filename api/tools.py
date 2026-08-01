from agents import function_tool
from .knowledge_base import stats, projects, contact, journey, skills, milestones, bio, next_goals, currently_learning, certificates
import json

@function_tool
def get_stats() -> str:
    """Returns Tanveer's current status, certificates, and learning path."""
    return json.dumps(stats)

@function_tool
def get_projects() -> str:
    """Returns details about Tanveer's portfolio projects including descriptions and technologies used."""
    return json.dumps(projects)

@function_tool
def get_contact() -> str:
    """Returns Tanveer's contact information including email, location, LinkedIn, and GitHub."""
    return json.dumps(contact)

@function_tool
def get_journey() -> str:
    """Returns Tanveer's learning journey and milestones over the years."""
    return json.dumps(journey)

@function_tool
def get_skills() -> str:
    """Returns Tanveer's technical skills organised by category."""
    return json.dumps(skills)

@function_tool
def get_milestones() -> str:
    """Returns Tanveer's educational milestones and certifications."""
    return json.dumps(milestones)

@function_tool
def get_bio() -> str:
    """Returns Tanveer's bio."""
    return json.dumps(bio)

@function_tool
def get_current_learning() -> str:
    """Returns what is Tanveer learning nowadays."""
    return json.dumps(currently_learning)

@function_tool
def get_certificates() -> str:
    """Returns Tanveer's certificates and their URLs."""
    return json.dumps(certificates)

@function_tool
def get_next_goals() -> str:
    """Returns Tanveer's next goals."""
    return json.dumps(next_goals)

tools = [get_stats, get_projects, get_contact, get_journey, get_skills, get_milestones, get_bio, get_certificates, get_next_goals, get_current_learning]