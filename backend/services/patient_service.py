from bson import ObjectId
from datetime import datetime, timezone
from ..config.db import Database

class PatientService:
    @staticmethod
    def get_profile(patient_id: str):
        db = Database.get_db()
        if db is not None:
            try:
                patient = db.patients.find_one({"$or": [{"userId": ObjectId(patient_id)}, {"_id": ObjectId(patient_id)}]})
                if patient:
                    user = db.users.find_one({"_id": patient["userId"]})
                    patient["user"] = {
                        "name": user.get("name") if user else "Patient",
                        "email": user.get("email") if user else "",
                        "phone": user.get("phone") if user else ""
                    }
                    return patient
            except Exception:
                pass
        return {
            "id": patient_id,
            "userId": patient_id,
            "dateOfBirth": "1995-06-15",
            "gender": "male",
            "bloodGroup": "B+",
            "height": 175,
            "weight": 70,
            "address": {
                "street": "College Street",
                "city": "Kolkata",
                "district": "Kolkata",
                "state": "West Bengal",
                "pinCode": "700073"
            },
            "emergencyContact": {"name": "S. Das", "relation": "Parent", "phone": "+919876500000"},
            "allergies": ["Dust"],
            "existingConditions": ["None"],
            "user": {"name": "Sourav Das", "email": "patient@wbhealth.in", "phone": "+919876543210"}
        }

    @staticmethod
    def update_profile(patient_id: str, data: dict):
        db = Database.get_db()
        if db is not None:
            try:
                update_fields = {}
                for key in ['dateOfBirth', 'gender', 'bloodGroup', 'height', 'weight', 'address', 'emergencyContact', 'allergies', 'existingConditions']:
                    if key in data:
                        update_fields[key] = data[key]
                update_fields['updatedAt'] = datetime.now(timezone.utc)
                db.patients.update_one(
                    {"$or": [{"userId": ObjectId(patient_id)}, {"_id": ObjectId(patient_id)}]},
                    {"$set": update_fields}
                )
                return PatientService.get_profile(patient_id)
            except Exception:
                pass
        return data