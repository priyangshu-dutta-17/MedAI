from flask import Blueprint
from ..controllers.ml_controller import MLController

ml_bp = Blueprint('ml', __name__)
ml_bp.route('/disease-prediction', methods=['POST'])(MLController.disease_prediction)
ml_bp.route('/diabetes-risk', methods=['POST'])(MLController.diabetes_risk)
ml_bp.route('/heart-risk', methods=['POST'])(MLController.heart_risk)
ml_bp.route('/patient-risk', methods=['POST'])(MLController.patient_risk)
ml_bp.route('/text-classification', methods=['POST'])(MLController.text_classification)