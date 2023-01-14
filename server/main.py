from fastapi import FastAPI, Body
from fastapi.middleware.cors import CORSMiddleware

# dto
from dto import FindCluster_Payload

# validator
from validator import validateFindCluster_Payload

# service
from service import clusterApartment

app = FastAPI()

# Cors middleware
app.add_middleware(
  CORSMiddleware, 
  allow_origins=["http://localhost:3000"],
  allow_methods=["OPTIONS","POST"],
)

@app.get("/")
def health():
  return { 
    "success": True,
    "message": "OK",
  }

@app.post("/clusters/check")
async def findCluster(payload: FindCluster_Payload = Body()):

  # validate payload
  validateFindCluster_Payload(payload)

  # call service
  result = await clusterApartment(payload)

  return {
    "success": True,
    "message": "OK",
    "data": result
  }