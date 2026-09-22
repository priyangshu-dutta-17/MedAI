from flask import Blueprint
from ..controllers.patient_controller import PatientController
from ..middleware.auth_middleware import jwt_required

patient_bp = Blueprint('patients', __name__)
patient_bp.route('/<id>', methods=['GET'])(jwt_required(PatientController.get_patient))
patient_bp.route('/<id>', methods=['PUT'])(jwt_required(PatientController.update_patient))