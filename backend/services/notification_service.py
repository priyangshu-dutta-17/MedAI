from bson import ObjectId
from datetime import datetime, timezone
from ..config.db import Database

class NotificationService:
    @staticmethod
    def get_user_notifications(user_id: str):
        db = Database.get_db()
        if db is not None:
            try:
                notifs = list(db.notifications.find({"userId": ObjectId(user_id) if ObjectId.is_valid(user_id) else user_id}).sort("createdAt", -1))
                if notifs:
                    return notifs
            except Exception:
                pass

        return [
            {
                "id": "notif_01",
                "userId": user_id,
                "title": "Welcome to AI Medical System",
                "message": "Your state-wide healthcare portal is active. Discover doctors & ML diagnostic tools.",
                "type": "system",
                "isRead": False,
                "createdAt": datetime.now(timezone.utc).isoformat()
            },
            {
                "id": "notif_02",
                "userId": user_id,
                "title": "West Bengal Facility Directory",
                "message": "Explore over 26 multi-tier tertiary hospitals across all 23 districts in the Healthcare Locator.",
                "type": "system",
                "isRead": True,
                "createdAt": datetime.now(timezone.utc).isoformat()
            }
        ]

    @staticmethod
    def mark_read(notif_id: str):
        db = Database.get_db()
        if db is not None:
            try:
                db.notifications.update_one({"_id": ObjectId(notif_id)}, {"$set": {"isRead": True}})
            except Exception:
                pass
        return {"id": notif_id, "isRead": True}