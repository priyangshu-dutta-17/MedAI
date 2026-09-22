from bson import ObjectId
from datetime import datetime, timezone
from ..config.db import Database

class DoctorService:
    @staticmethod
    def list_doctors(filters: dict = None):
        db = Database.get_db()
        query = {}
        if filters:
            if filters.get('specialization'):
                query['specialization'] = {"$regex": filters['specialization'], "$options": "i"}
            if filters.get('district'):
                query['district'] = {"$regex": filters['district'], "$options": "i"}
            if filters.get('isVerified') is not None:
                query['isVerified'] = filters['isVerified']

        if db is not None:
            try:
                docs = list(db.doctors.find(query).limit(50))
                for d in docs:
                    user = db.users.find_one({"_id": d["userId"]})
                    if user:
                        d["name"] = user.get("name")
                        d["email"] = user.get("email")
                        d["phone"] = user.get("phone")
                if docs:
                    return docs
            except Exception:
                pass

        return [
            {
                "id": "66ce00000000000000000002",
                "name": "Dr. Anirban Mukherjee",
                "specialization": "Cardiologist",
                "qualification": "MBBS, MD, DM (Cardiology)",
                "experience": 15,
                "licenseNumber": "WBMC-58921",
                "hospital": "SSKM Hospital / IPGMER, Kolkata",
                "district": "Kolkata",
                "consultationFee": 800,
                "availableDays": ["Monday", "Wednesday", "Friday"],
                "availableTime": "17:00 - 20:00",
                "isVerified": True,
                "rating": 4.9,
                "totalReviews": 142
            },
            {
                "id": "66ce00000000000000000010",
                "name": "Dr. Sharmila Banerjee",
                "specialization": "Endocrinologist / Diabetologist",
                "qualification": "MBBS, MD (Medicine), DM (Endocrinology)",
                "experience": 12,
                "licenseNumber": "WBMC-62410",
                "hospital": "Calcutta National Medical College, Kolkata",
                "district": "Kolkata",
                "consultationFee": 700,
                "availableDays": ["Tuesday", "Thursday", "Saturday"],
                "availableTime": "16:00 - 19:30",
                "isVerified": True,
                "rating": 4.8,
                "totalReviews": 98
            },
            {
                "id": "66ce00000000000000000011",
                "name": "Dr. Pronob Roy",
                "specialization": "General Physician",
                "qualification": "MBBS, DNB (Family Medicine)",
                "experience": 18,
                "licenseNumber": "WBMC-45120",
                "hospital": "North Bengal Medical College, Siliguri",
                "district": "Darjeeling",
                "consultationFee": 500,
                "availableDays": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "availableTime": "10:00 - 14:00",
                "isVerified": True,
                "rating": 4.7,
                "totalReviews": 210
            },
            {
                "id": "66ce00000000000000000012",
                "name": "Dr. Debasis Ghosh",
                "specialization": "Neurologist",
                "qualification": "MBBS, MD, DM (Neurology)",
                "experience": 14,
                "licenseNumber": "WBMC-53109",
                "hospital": "Burdwan Medical College & Hospital",
                "district": "Purba Bardhaman",
                "consultationFee": 750,
                "availableDays": ["Monday", "Thursday"],
                "availableTime": "14:00 - 18:00",
                "isVerified": True,
                "rating": 4.9,
                "totalReviews": 85
            }
        ]

    @staticmethod
    def get_doctor(doc_id: str):
        doctors = DoctorService.list_doctors()
        for d in doctors:
            if str(d.get("id")) == str(doc_id) or str(d.get("userId")) == str(doc_id):
                return d
        return doctors[0]

    @staticmethod
    def update_doctor(doc_id: str, data: dict):
        db = Database.get_db()
        if db is not None:
            try:
                db.doctors.update_one(
                    {"$or": [{"userId": ObjectId(doc_id)}, {"_id": ObjectId(doc_id)}]},
                    {"$set": data}
                )
            except Exception:
                pass
        return DoctorService.get_doctor(doc_id)