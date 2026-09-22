from flask import request, g
from ..services.patient_service import PatientService
from ..utils.response import success_response, error_response

class PatientController:
    @staticmethod
    def get_patient(id):
        try:
            profile = PatientService.get_profile(id)
            return success_response(data=profile, message="Patient profile retrieved")
        except Exception as e:
            return error_response(message=str(e), status_code=500)

    @staticmethod
    def update_patient(id):
        try:
            data = request.get_json() or {}
            profile = PatientService.update_profile(id, data)
            return success_response(data=profile, message="Patient profile updated successfully")
        except Exception as e:
            return error_response(message=str(e), status_code=500)