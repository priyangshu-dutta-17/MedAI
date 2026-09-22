from flask import request, g
from ..services.records_service import RecordsService
from ..utils.response import success_response, error_response

class RecordsController:
    @staticmethod
    def create_record():
        try:
            data = request.get_json() or {}
            rec = RecordsService.create_record(data, g.current_user.get('userId'))
            return success_response(data=rec, message="Medical record created", status_code=201)
        except Exception as e:
            return error_response(message=str(e), status_code=500)

    @staticmethod
    def get_records(patientId):
        try:
            recs = RecordsService.get_records_by_patient(patientId)
            return success_response(data=recs, message="Medical records retrieved")
        except Exception as e:
            return error_response(message=str(e), status_code=500)

    @staticmethod
    def create_prescription():
        try:
            data = request.get_json() or {}
            rx = RecordsService.create_prescription(data, g.current_user.get('userId'))
            return success_response(data=rx, message="Prescription created", status_code=201)
        except Exception as e:
            return error_response(message=str(e), status_code=500)

    @staticmethod
    def get_prescriptions(patientId):
        try:
            rxs = RecordsService.get_prescriptions_by_patient(patientId)
            return success_response(data=rxs, message="Prescriptions retrieved")
        except Exception as e:
            return error_response(message=str(e), status_code=500)