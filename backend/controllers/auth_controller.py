from flask import request, g
from ..services.auth_service import AuthService
from ..utils.response import success_response, error_response

class AuthController:
    """Controller handling Authentication Endpoints"""

    @staticmethod
    def register():
        try:
            data = request.get_json() or {}
            result = AuthService.register_user(data)
            return success_response(data=result, message="User registered successfully", status_code=201)
        except ValueError as e:
            return error_response(message=str(e), code="VALIDATION_ERROR", status_code=400)
        except Exception as e:
            return error_response(message=f"Registration failed: {str(e)}", code="INTERNAL_ERROR", status_code=500)

    @staticmethod
    def login():
        try:
            data = request.get_json() or {}
            email = data.get('email', '')
            password = data.get('password', '')
            result = AuthService.login_user(email, password)
            return success_response(data=result, message="Login successful", status_code=200)
        except ValueError as e:
            return error_response(message=str(e), code="AUTHENTICATION_FAILED", status_code=401)
        except Exception as e:
            return error_response(message=f"Login error: {str(e)}", code="INTERNAL_ERROR", status_code=500)

    @staticmethod
    def get_me():
        try:
            user_id = g.current_user.get('userId')
            profile = AuthService.get_user_profile(user_id)
            return success_response(data=profile, message="User profile retrieved successfully")
        except Exception as e:
            return error_response(message=str(e), code="INTERNAL_ERROR", status_code=500)
