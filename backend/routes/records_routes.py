from flask import Blueprint
from ..controllers.records_controller import RecordsController
from ..middleware.auth_middleware import jwt_required

records_bp = Blueprint('records', __name__)
records_bp.route('/medical-records', methods=['POST'])(jwt_required(RecordsController.create_record))
records_bp.route('/medical-records/<patientId>', methods=['GET'])(jwt_required(RecordsController.get_records))
records_bp.route('/prescriptions', methods=['POST'])(jwt_required(RecordsController.create_prescription))
records_bp.route('/prescriptions/<patientId>', methods=['GET'])(jwt_required(RecordsController.get_prescriptions))