from fastapi import HTTPException
from dto import FindCluster_Payload

def validateFindCluster_Payload(payload: FindCluster_Payload):
    # validate payload.apartment is exists
    if payload.apartment is None:
        raise HTTPException(status_code=400, detail="The field 'apartment' is required")
