from flask import Blueprint
from ..controllers.doctor_controller import DoctorController
from ..middleware.auth_middleware import jwt_required

doctor_bp = Blueprint('doctors', __name__)
doctor_bp.route('', methods=['GET'])(DoctorController.get_doctors)
doctor_bp.route('/<id>', methods=['GET'])(DoctorController.get_doctor)
doctor_bp.route('/<id>', methods=['PUT'])(jwt_required(DoctorController.update_doctor))