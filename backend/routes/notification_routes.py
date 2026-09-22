from flask import Blueprint
from ..controllers.notification_controller import NotificationController
from ..middleware.auth_middleware import jwt_required

notification_bp = Blueprint('notifications', __name__)
notification_bp.route('', methods=['GET'])(jwt_required(NotificationController.get_notifications))
notification_bp.route('/<id>/read', methods=['PUT'])(jwt_required(NotificationController.mark_as_read))