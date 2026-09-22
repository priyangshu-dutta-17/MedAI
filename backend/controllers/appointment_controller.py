from flask import request, g
from ..services.appointment_service import AppointmentService
from ..utils.response import success_response, error_response

class AppointmentController:
    @staticmethod
    def book():
        try:
            data = request.get_json() or {}
            result = AppointmentService.book_appointment(data, g.current_user)
            return success_response(data=result, message="Appointment booked successfully", status_code=201)
        except ValueError as e:
            return error_response(message=str(e), code="VALIDATION_ERROR", status_code=400)
        except Exception as e:
            return error_response(message=str(e), status_code=500)

    @staticmethod
    def list_appointments():
        try:
            user_id = g.current_user.get('userId')
            role = g.current_user.get('role')
            appts = AppointmentService.get_appointments(user_id, role)
            return success_response(data=appts, message="Appointments retrieved")
        except Exception as e:
            return error_response(message=str(e), status_code=500)

    @staticmethod
    def update_appointment(id):
        try:
            data = request.get_json() or {}
            status = data.get('status', 'confirmed')
            notes = data.get('notes', '')
            res = AppointmentService.update_status(id, status, notes)
            return success_response(data=res, message="Appointment updated")
        except Exception as e:
            return error_response(message=str(e), status_code=500)