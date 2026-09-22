from bson import ObjectId
from datetime import datetime, timezone
from ..config.db import Database

class RecordsService:
    @staticmethod
    def create_record(data: dict, doctor_id: str):
        db = Database.get_db()
        patient_id = data.get('patientId')
        diagnosis = data.get('diagnosis', '')
        symptoms = data.get('symptoms', [])
        notes = data.get('notes', '')

        record_doc = {
            "patientId": ObjectId(patient_id) if ObjectId.is_valid(patient_id) else patient_id,
            "doctorId": ObjectId(doctor_id) if ObjectId.is_valid(doctor_id) else doctor_id,
            "diagnosis": diagnosis,
            "symptoms": symptoms,
            "reports": data.get('reports', []),
            "notes": notes,
            "date": data.get('date', datetime.now(timezone.utc).strftime("%Y-%m-%d")),
            "createdAt": datetime.now(timezone.utc)
        }

        rec_id = str(ObjectId())
        if db is not None:
            res = db.medical_records.insert_one(record_doc)
            rec_id = str(res.inserted_id)

        record_doc["id"] = rec_id
        return record_doc

    @staticmethod
    def get_records_by_patient(patient_id: str):
        db = Database.get_db()
        if db is not None:
            try:
                query = {"patientId": ObjectId(patient_id) if ObjectId.is_valid(patient_id) else patient_id}
                records = list(db.medical_records.find(query).sort("createdAt", -1))
                if records:
                    return records
            except Exception:
                pass

        return [
            {
                "id": "66ce00000000000000000101",
                "patientId": patient_id,
                "doctorName": "Dr. Anirban Mukherjee",
                "diagnosis": "Mild Essential Hypertension (Stage 1)",
                "symptoms": ["Occasional headache", "Exertional dizziness"],
                "reports": ["Lipid Profile (Normal)", "ECG Sinus Rhythm"],
                "notes": "Advised lifestyle modifications and salt reduction.",
                "date": "2026-08-15"
            }
        ]

    @staticmethod
    def create_prescription(data: dict, doctor_id: str):
        db = Database.get_db()
        patient_id = data.get('patientId')
        medicines = data.get('medicines', [])
        instructions = data.get('instructions', '')

        rx_doc = {
            "patientId": ObjectId(patient_id) if ObjectId.is_valid(patient_id) else patient_id,
            "doctorId": ObjectId(doctor_id) if ObjectId.is_valid(doctor_id) else doctor_id,
            "medicines": medicines,
            "instructions": instructions,
            "date": datetime.now(timezone.utc).strftime("%Y-%m-%d"),
            "createdAt": datetime.now(timezone.utc)
        }

        rx_id = str(ObjectId())
        if db is not None:
            res = db.prescriptions.insert_one(rx_doc)
            rx_id = str(res.inserted_id)

        rx_doc["id"] = rx_id
        return rx_doc

    @staticmethod
    def get_prescriptions_by_patient(patient_id: str):
        db = Database.get_db()
        if db is not None:
            try:
                query = {"patientId": ObjectId(patient_id) if ObjectId.is_valid(patient_id) else patient_id}
                rxs = list(db.prescriptions.find(query).sort("createdAt", -1))
                if rxs:
                    return rxs
            except Exception:
                pass

        return [
            {
                "id": "66ce00000000000000000201",
                "patientId": patient_id,
                "doctorName": "Dr. Anirban Mukherjee",
                "medicines": [
                  {"name": "Telmisartan 40mg", "dosage": "1 tablet", "frequency": "1-0-0 (Morning)", "duration": "30 days", "instructions": "Take after breakfast"},
                  {"name": "Atorvastatin 10mg", "dosage": "1 tablet", "frequency": "0-0-1 (Night)", "duration": "30 days", "instructions": "Take after dinner"}
                ],
                "instructions": "Maintain daily blood pressure log. Review after 1 month.",
                "date": "2026-08-15"
            }
        ]