from flask import Blueprint
from ..config.config import Config
from ..config.db import Database
from ..utils.response import success_response

health_bp = Blueprint('health', __name__)

@health_bp.route('/health', methods=['GET'])
def health_check():
    """System health check & subsystem status endpoint"""
    db_connected = Database.is_connected()
    
    status_data = {
        "system": "AI Medical System Backend",
        "version": "1.0.0",
        "region": "West Bengal, India",
        "environment": Config.ENV,
        "database": {
            "type": "MongoDB Atlas",
            "connected": db_connected,
            "databaseName": Config.DB_NAME
        },
        "modules": {
            "auth": "Active",
            "patient": "Active",
            "doctor": "Active",
            "appointments": "Active",
            "medicalRecords": "Active",
            "prescriptions": "Active",
            "westBengalGIS": "Active",
            "machineLearning": "Active",
            "aiAssistant": "Active"
        }
    }
    return success_response(data=status_data, message="AI Medical System REST API is healthy")
