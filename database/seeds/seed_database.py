import os
import sys
from pathlib import Path
from datetime import datetime, timezone
import bcrypt
from pymongo import MongoClient

# Add backend directory to sys.path
sys.path.append(str(Path(__file__).resolve().parent.parent.parent / 'backend'))
from config.config import Config
from services.location_service import WEST_BENGAL_FACILITIES

def seed_db():
    print("==================================================")
    print(" SEEDING AI MEDICAL SYSTEM DATABASE (WEST BENGAL) ")
    print("==================================================")
    try:
        client = MongoClient(Config.MONGO_URI, serverSelectionTimeoutMS=4000)
        db = client[Config.DB_NAME]
        client.admin.command('ping')
        print("Connected to MongoDB successfully.")
    except Exception as e:
        print(f"Notice: MongoDB not available locally ({e}). Seed data prepared in code.")
        return

    # Clear existing collections for clean seed
    for col in ['users', 'patients', 'doctors', 'appointments', 'medical_records', 'prescriptions', 'healthcare_facilities', 'notifications']:
        db[col].delete_many({})

    salt = bcrypt.gensalt(12)
    pwd_hash = bcrypt.hashpw("Password123!".encode('utf-8'), salt).decode('utf-8')
    now = datetime.now(timezone.utc)

    # 1. Seed Users
    patient_user = {
        "name": "Sourav Das",
        "email": "patient@wbhealth.in",
        "passwordHash": pwd_hash,
        "phone": "+919876543210",
        "role": "patient",
        "profileImage": "",
        "isActive": True,
        "createdAt": now,
        "updatedAt": now
    }
    p_id = db.users.insert_one(patient_user).inserted_id

    doctor_user = {
        "name": "Dr. Anirban Mukherjee",
        "email": "doctor@wbhealth.in",
        "passwordHash": pwd_hash,
        "phone": "+919876543211",
        "role": "doctor",
        "profileImage": "",
        "isActive": True,
        "createdAt": now,
        "updatedAt": now
    }
    d_id = db.users.insert_one(doctor_user).inserted_id

    admin_user = {
        "name": "System Administrator",
        "email": "admin@wbhealth.in",
        "passwordHash": pwd_hash,
        "phone": "+919876543212",
        "role": "admin",
        "profileImage": "",
        "isActive": True,
        "createdAt": now,
        "updatedAt": now
    }
    db.users.insert_one(admin_user)

    # 2. Seed Patient Profile
    db.patients.insert_one({
        "userId": p_id,
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
        "allergies": ["Dust Mites"],
        "existingConditions": ["None"],
        "createdAt": now,
        "updatedAt": now
    })

    # 3. Seed Doctor Profile
    db.doctors.insert_one({
        "userId": d_id,
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
        "totalReviews": 142,
        "createdAt": now,
        "updatedAt": now
    })

    # 4. Seed Healthcare Facilities
    for fac in WEST_BENGAL_FACILITIES:
        doc = dict(fac)
        doc["location"] = {
            "type": "Point",
            "coordinates": [fac["lng"], fac["lat"]]
        }
        db.healthcare_facilities.insert_one(doc)

    print("Database seeding completed successfully.")

if __name__ == '__main__':
    seed_db()