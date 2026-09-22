from flask import jsonify
from bson import ObjectId
from datetime import datetime, date

def serialize_mongo(data):
    """Helper to convert BSON ObjectIds and datetimes to JSON-serializable types"""
    if isinstance(data, list):
        return [serialize_mongo(item) for item in data]
    if isinstance(data, dict):
        result = {}
        for k, v in data.items():
            if k == '_id' and isinstance(v, ObjectId):
                result['id'] = str(v)
            elif isinstance(v, ObjectId):
                result[k] = str(v)
            elif isinstance(v, (datetime, date)):
                result[k] = v.isoformat()
            elif isinstance(v, (dict, list)):
                result[k] = serialize_mongo(v)
            else:
                result[k] = v
        return result
    if isinstance(data, ObjectId):
        return str(data)
    if isinstance(data, (datetime, date)):
        return data.isoformat()
    return data

def success_response(data=None, message="Success", status_code=200):
    """Generate a standardized enveloped success JSON response"""
    payload = {
        "success": True,
        "message": message
    }
    if data is not None:
        payload["data"] = serialize_mongo(data)
    return jsonify(payload), status_code

def error_response(message="An error occurred", code="INTERNAL_ERROR", details=None, status_code=500):
    """Generate a standardized enveloped error JSON response"""
    payload = {
        "success": False,
        "error": {
            "code": code,
            "message": message,
            "details": details
        }
    }
    return jsonify(payload), status_code
