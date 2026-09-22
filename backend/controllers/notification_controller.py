from flask import g
from ..services.notification_service import NotificationService
from ..utils.response import success_response, error_response

class NotificationController:
    @staticmethod
    def get_notifications():
        try:
            user_id = g.current_user.get('userId')
            notifs = NotificationService.get_user_notifications(user_id)
            return success_response(data=notifs, message="Notifications retrieved")
        except Exception as e:
            return error_response(message=str(e), status_code=500)

    @staticmethod
    def mark_as_read(id):
        try:
            res = NotificationService.mark_read(id)
            return success_response(data=res, message="Notification marked as read")
        except Exception as e:
            return error_response(message=str(e), status_code=500)