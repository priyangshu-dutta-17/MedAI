from flask import request
from ..services.ai_service import AIAssistantService
from ..utils.response import success_response, error_response

class AIController:
    @staticmethod
    def ask_assistant():
        try:
            data = request.get_json() or {}
            question = data.get('question', '').strip()
            if not question:
                return error_response(message="Question is required", code="VALIDATION_ERROR", status_code=400)
            history = data.get('conversationHistory', [])
            result = AIAssistantService.get_medical_advice(question, history)
            return success_response(data=result, message="AI Medical Assistant responded")
        except Exception as e:
            return error_response(message=str(e), status_code=500)