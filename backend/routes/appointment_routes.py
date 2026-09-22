from flask import Blueprint
from ..controllers.appointment_controller import AppointmentController
from ..middleware.auth_middleware import jwt_required

appointment_bp = Blueprint('appointments', __name__)
appointment_bp.route('', methods=['POST'])(jwt_required(AppointmentController.book))
appointment_bp.route('', methods=['GET'])(jwt_required(AppointmentController.list_appointments))
appointment_bp.route('/<id>', methods=['PUT'])(jwt_required(AppointmentController.update_appointment))