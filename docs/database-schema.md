# MongoDB Atlas Database Schema Specification

## AI Medical System (MCA Minor Project)

**Database Engine**: MongoDB 6.0+ / MongoDB Atlas  
**Database Name**: `ai_medical_system`

---

## Logical Collections Overview

1. `users` - Core authentication, profile, roles, and status.
2. `patients` - Patient demographics, vitals, medical history, emergency contacts.
3. `doctors` - Doctor qualifications, license, verification, scheduling, and fees.
4. `appointments` - Patient-doctor appointment bookings, slots, status, and cancellation notes.
5. `medical_records` - Clinical diagnoses, symptoms, uploaded report references, doctor notes.
6. `prescriptions` - Structured medicine lists, dosages, frequencies, and durations.
7. `ai_consultations` - Logs of AI assistant Q&A interactions for patient reference.
8. `notifications` - In-app system notifications for alerts, reminders, and updates.
9. `healthcare_facilities` - Spatial registry of West Bengal hospitals, clinics, pharmacies, diagnostic centres.
10. `ml_predictions` - Audit logs of machine learning risk predictions, confidence scores, and feature inputs.

---

## 1. Collection: `users`
Represents all system actors (`patient`, `doctor`, `admin`).

```json
{
  "_id": "ObjectId",
  "name": "String (required, 2-100 chars)",
  "email": "String (required, unique, lowercase, indexed)",
  "passwordHash": "String (required, bcrypt salt 12)",
  "phone": "String (required, 10-15 chars, indexed)",
  "role": "String (required, enum: ['patient', 'doctor', 'admin'])",
  "profileImage": "String (URL / placeholder path)",
  "isActive": "Boolean (default: true)",
  "createdAt": "ISODate",
  "updatedAt": "ISODate"
}
```

**Indexes**:
- `{ email: 1 }` (Unique)
- `{ phone: 1 }`
- `{ role: 1 }`

---

## 2. Collection: `patients`
Detailed medical and demographic profile for users with role `patient`.

```json
{
  "_id": "ObjectId",
  "userId": "ObjectId (required, ref: 'users', unique)",
  "dateOfBirth": "ISODate / String (YYYY-MM-DD)",
  "gender": "String (enum: ['male', 'female', 'other'])",
  "bloodGroup": "String (enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'])",
  "height": "Number (cm)",
  "weight": "Number (kg)",
  "address": {
    "street": "String",
    "city": "String",
    "district": "String (West Bengal District)",
    "state": "String (default: 'West Bengal')",
    "pinCode": "String (6 digits)"
  },
  "emergencyContact": {
    "name": "String",
    "relation": "String",
    "phone": "String"
  },
  "allergies": ["String"],
  "existingConditions": ["String"],
  "createdAt": "ISODate",
  "updatedAt": "ISODate"
}
```

**Indexes**:
- `{ userId: 1 }` (Unique)
- `{ "address.district": 1 }`

---

## 3. Collection: `doctors`
Professional profile, credentials, and verification status for doctors.

```json
{
  "_id": "ObjectId",
  "userId": "ObjectId (required, ref: 'users', unique)",
  "specialization": "String (required, indexed)",
  "qualification": "String (e.g. 'MBBS, MD, DNB')",
  "experience": "Number (years in practice)",
  "licenseNumber": "String (required, unique, e.g. 'WBMC-XXXXX')",
  "hospital": "String (affiliated hospital/clinic)",
  "district": "String (West Bengal District, indexed)",
  "consultationFee": "Number (INR)",
  "availableDays": ["String (enum: ['Monday', 'Tuesday', ...])"],
  "availableTime": "String (e.g. '17:00 - 20:00')",
  "isVerified": "Boolean (default: false, indexed)",
  "rating": "Number (default: 5.0, range 1.0-5.0)",
  "totalReviews": "Number (default: 0)",
  "createdAt": "ISODate",
  "updatedAt": "ISODate"
}
```

**Indexes**:
- `{ userId: 1 }` (Unique)
- `{ licenseNumber: 1 }` (Unique)
- `{ specialization: 1, district: 1, isVerified: 1 }`

---

## 4. Collection: `appointments`
Manages appointment lifecycle between patients and doctors.

```json
{
  "_id": "ObjectId",
  "patientId": "ObjectId (required, ref: 'users', indexed)",
  "doctorId": "ObjectId (required, ref: 'doctors', indexed)",
  "date": "String (YYYY-MM-DD, indexed)",
  "time": "String (HH:mm)",
  "status": "String (enum: ['pending', 'confirmed', 'completed', 'cancelled'], default: 'pending', indexed)",
  "reason": "String (short description)",
  "notes": "String",
  "createdAt": "ISODate",
  "updatedAt": "ISODate"
}
```

**Indexes**:
- `{ patientId: 1, date: -1 }`
- `{ doctorId: 1, date: 1, status: 1 }`

---

## 5. Collection: `medical_records`
Clinical records and diagnosis summaries created by doctors.

```json
{
  "_id": "ObjectId",
  "patientId": "ObjectId (required, ref: 'users', indexed)",
  "doctorId": "ObjectId (required, ref: 'users')",
  "diagnosis": "String (required)",
  "symptoms": ["String"],
  "reports": ["String (document links or test titles)"],
  "notes": "String",
  "date": "ISODate / String (YYYY-MM-DD)",
  "createdAt": "ISODate"
}
```

**Indexes**:
- `{ patientId: 1, date: -1 }`

---

## 6. Collection: `prescriptions`
Structured prescriptions with itemized medications.

```json
{
  "_id": "ObjectId",
  "patientId": "ObjectId (required, ref: 'users', indexed)",
  "doctorId": "ObjectId (required, ref: 'users', indexed)",
  "appointmentId": "ObjectId (optional, ref: 'appointments')",
  "medicines": [
    {
      "name": "String (required)",
      "dosage": "String (e.g. '1 tablet', '5ml')",
      "frequency": "String (e.g. '1-0-1 after food')",
      "duration": "String (e.g. '7 days')",
      "instructions": "String"
    }
  ],
  "instructions": "String",
  "date": "ISODate",
  "createdAt": "ISODate"
}
```

---

## 7. Collection: `healthcare_facilities`
Spatial directory of all West Bengal healthcare facilities across all 23 districts.

```json
{
  "_id": "ObjectId",
  "name": "String (required, indexed)",
  "type": "String (required, enum: ['hospital', 'clinic', 'pharmacy', 'diagnostic_centre', 'emergency'], indexed)",
  "district": "String (required, West Bengal District, indexed)",
  "city": "String (required, indexed)",
  "address": "String (full street address)",
  "pinCode": "String",
  "phone": "String",
  "location": {
    "type": "String (default: 'Point')",
    "coordinates": ["Number (longitude)", "Number (latitude)"]
  },
  "specialties": ["String"],
  "emergencyServices": "Boolean (default: false)",
  "bedCapacity": "Number (optional)",
  "googlePlaceId": "String (optional)",
  "rating": "Number (optional)",
  "isActive": "Boolean (default: true)"
}
```

**Indexes**:
- `{ location: "2dsphere" }` (Geo-spatial queries)
- `{ district: 1, type: 1 }`
- `{ city: 1 }`

---

## 8. Collection: `ml_predictions`
Audit trail of all ML inference calls.

```json
{
  "_id": "ObjectId",
  "userId": "ObjectId (ref: 'users', indexed)",
  "predictionType": "String (enum: ['disease', 'diabetes', 'heart', 'patient_risk', 'nlp_triage'])",
  "inputData": "Object (raw input features)",
  "prediction": "String / Object (output label or risk class)",
  "confidence": "Number (0.0 to 1.0)",
  "modelVersion": "String (e.g. '1.0.0')",
  "createdAt": "ISODate"
}
```

---

## 9. Collection: `notifications`
In-app alerts for appointment reminders, verification updates, etc.

```json
{
  "_id": "ObjectId",
  "userId": "ObjectId (required, ref: 'users', indexed)",
  "title": "String (required)",
  "message": "String (required)",
  "type": "String (enum: ['appointment', 'medical_record', 'system', 'doctor_verification'])",
  "isRead": "Boolean (default: false, indexed)",
  "link": "String (optional navigation route)",
  "createdAt": "ISODate"
}
```

---

## 10. Collection: `ai_consultations`
Archived Q&A history with the modular AI Medical Assistant.

```json
{
  "_id": "ObjectId",
  "userId": "ObjectId (required, ref: 'users', indexed)",
  "question": "String (required)",
  "response": "String (required)",
  "model": "String",
  "createdAt": "ISODate"
}
```