from flask import request
from ..ml.ml_service import MLInferenceService
from ..utils.response import success_response, error_response

class MLController:
    @staticmethod
    def disease_prediction():
        try:
            data = request.get_json() or {}
            symptoms = data.get('symptoms', [])
            if not symptoms:
                return error_response(message="Symptoms list is required", code="VALIDATION_ERROR", status_code=400)
            res = MLInferenceService.predict_disease(symptoms)
            return success_response(data=res, message="Disease prediction computed")
        except Exception as e:
            return error_response(message=str(e), status_code=500)

    @staticmethod
    def diabetes_risk():
        try:
            data = request.get_json() or {}
            res = MLInferenceService.predict_diabetes_risk(data)
            return success_response(data=res, message="Diabetes risk assessment computed")
        except Exception as e:
            return error_response(message=str(e), status_code=500)

    @staticmethod
    def heart_risk():
        try:
            data = request.get_json() or {}
            res = MLInferenceService.predict_heart_risk(data)
            return success_response(data=res, message="Cardiovascular risk computed")
        except Exception as e:
            return error_response(message=str(e), status_code=500)

    @staticmethod
    def patient_risk():
        try:
            data = request.get_json() or {}
            res = MLInferenceService.predict_patient_risk(data)
            return success_response(data=res, message="Patient risk tier calculated")
        except Exception as e:
            return error_response(message=str(e), status_code=500)

    @staticmethod
    def text_classification():
        try:
            data = request.get_json() or {}
            text = data.get('text', '')
            if not text:
                return error_response(message="Text description is required", code="VALIDATION_ERROR", status_code=400)
            res = MLInferenceService.classify_text(text)
            return success_response(data=res, message="NLP text triage completed")
        except Exception as e:
            return error_response(message=str(e), status_code=500)