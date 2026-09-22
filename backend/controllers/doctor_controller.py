from flask import request
from ..services.doctor_service import DoctorService
from ..utils.response import success_response, error_response

class DoctorController:
    @staticmethod
    def get_doctors():
        try:
            filters = {}
            if request.args.get('specialization'):
                filters['specialization'] = request.args.get('specialization')
            if request.args.get('district'):
                filters['district'] = request.args.get('district')
            if request.args.get('isVerified'):
                filters['isVerified'] = request.args.get('isVerified').lower() == 'true'
            doctors = DoctorService.list_doctors(filters)
            return success_response(data=doctors, message="Doctors list retrieved")
        except Exception as e:
            return error_response(message=str(e), status_code=500)

    @staticmethod
    def get_doctor(id):
        try:
            doc = DoctorService.get_doctor(id)
            return success_response(data=doc, message="Doctor details retrieved")
        except Exception as e:
            return error_response(message=str(e), status_code=500)

    @staticmethod
    def update_doctor(id):
        try:
            data = request.get_json() or {}
            doc = DoctorService.update_doctor(id, data)
            return success_response(data=doc, message="Doctor updated successfully")
        except Exception as e:
            return error_response(message=str(e), status_code=500)