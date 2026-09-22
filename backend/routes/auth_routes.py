from flask import Blueprint
from ..controllers.auth_controller import AuthController
from ..middleware.auth_middleware import jwt_required

auth_bp = Blueprint('auth', __name__)

auth_bp.route('/register', methods=['POST'])(AuthController.register)
auth_bp.route('/login', methods=['POST'])(AuthController.login)
auth_bp.route('/me', methods=['GET'])(jwt_required(AuthController.get_me))
