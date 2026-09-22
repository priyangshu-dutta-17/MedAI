# REST API Documentation & Contract Specification

## AI Medical System (MCA Minor Project)

**Base URL**: `http://localhost:5000/api`  
**Data Format**: `application/json`  
**Authentication**: Bearer Token in `Authorization: Bearer <JWT_TOKEN>`

---

## Standard Response Envelopes

### Success Envelope
```json
{
  "success": true,
  "message": "Human-readable status summary",
  "data": { ... }
}
```

### Error Envelope
```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR | UNAUTHORIZED | FORBIDDEN | NOT_FOUND | INTERNAL_ERROR",
    "message": "Descriptive error message",
    "details": null
  }
}
```

---

## 1. Authentication Endpoints (`/api/auth`)

### 1.1 Register User
- **Method**: `POST`
- **Path**: `/api/auth/register`
- **Auth**: None (Public)
- **Request Body**:
```json
{
  "name": "Sourav Das",
  "email": "sourav.das@example.com",
  "password": "Password123!",
  "phone": "+919876543210",
  "role": "patient"
}
```
*Note: `role` must be one of: `"patient"`, `"doctor"`, `"admin"`.*
- **Response (201 Created)**:
```json
{
  "success": true,
  "message": "User registered successfully",
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
      "id": "66ce30a1f9e8a1001bc12345",
      "name": "Sourav Das",
      "email": "sourav.das@example.com",
      "phone": "+919876543210",
      "role": "patient",
      "isActive": true
    }
  }
}
```

### 1.2 Login User
- **Method**: `POST`
- **Path**: `/api/auth/login`
- **Auth**: None (Public)
- **Request Body**:
```json
{
  "email": "sourav.das@example.com",
  "password": "Password123!"
}
```
- **Response (200 OK)**:
```json
{
  "success": true,
  "message": "Login successful",
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
      "id": "66ce30a1f9e8a1001bc12345",
      "name": "Sourav Das",
      "email": "sourav.das@example.com",
      "role": "patient"
    }
  }
}
```

### 1.3 Get Current Profile (`/me`)
- **Method**: `GET`
- **Path**: `/api/auth/me`
- **Auth**: Required (`patient`, `doctor`, `admin`)
- **Response (200 OK)**:
```json
{
  "success": true,
  "data": {
    "id": "66ce30a1f9e8a1001bc12345",
    "name": "Sourav Das",
    "email": "sourav.das@example.com",
    "role": "patient",
    "phone": "+919876543210"
  }
}
```

---

## 2. Patient Endpoints (`/api/patients`)

### 2.1 Get Patient Profile
- **Method**: `GET`
- **Path**: `/api/patients/:id`
- **Auth**: Required (Owner Patient, Assigned Doctor, Admin)
- **Response (200 OK)**:
```json
{
  "success": true,
  "data": {
    "id": "66ce30a1f9e8a1001bc12345",
    "userId": "66ce30a1f9e8a1001bc12345",
    "dateOfBirth": "1994-05-12",
    "gender": "male",
    "bloodGroup": "O+",
    "height": 172.5,
    "weight": 68.0,
    "address": {
      "street": "12/A Rashbehari Avenue",
      "city": "Kolkata",
      "district": "Kolkata",
      "state": "West Bengal",
      "pinCode": "700029"
    },
    "emergencyContact": {
      "name": "Ananya Das",
      "relation": "Spouse",
      "phone": "+919876543219"
    },
    "allergies": ["Penicillin", "Dust Mites"],
    "existingConditions": ["Mild Hypertension"]
  }
}
```

### 2.2 Update Patient Profile
- **Method**: `PUT`
- **Path**: `/api/patients/:id`
- **Auth**: Required (Owner Patient, Admin)

---

## 3. Doctor Endpoints (`/api/doctors`)

### 3.1 List / Search Doctors
- **Method**: `GET`
- **Path**: `/api/doctors`
- **Query Params**: `specialization`, `district`, `city`, `isVerified`
- **Auth**: Public or Authenticated
- **Response (200 OK)**:
```json
{
  "success": true,
  "data": [
    {
      "id": "66ce30b2f9e8a1001bc67890",
      "name": "Dr. Anirban Mukherjee",
      "specialization": "Cardiologist",
      "qualification": "MBBS, MD, DM (Cardiology)",
      "experience": 14,
      "licenseNumber": "WBMC-58921",
      "hospital": "SSKM Hospital, Kolkata",
      "consultationFee": 800,
      "availableDays": ["Monday", "Wednesday", "Friday"],
      "availableTime": "17:00 - 20:00",
      "isVerified": true,
      "rating": 4.8
    }
  ]
}
```

---

## 4. Appointments (`/api/appointments`)

### 4.1 Book Appointment
- **Method**: `POST`
- **Path**: `/api/appointments`
- **Auth**: Required (`patient`)
- **Request Body**:
```json
{
  "doctorId": "66ce30b2f9e8a1001bc67890",
  "date": "2026-09-02",
  "time": "17:30",
  "reason": "Chest tightness and routine follow-up"
}
```
- **Response (201 Created)**:
```json
{
  "success": true,
  "message": "Appointment booked successfully",
  "data": {
    "id": "66ce30c3f9e8a1001bc99999",
    "patientId": "66ce30a1f9e8a1001bc12345",
    "doctorId": "66ce30b2f9e8a1001bc67890",
    "date": "2026-09-02",
    "time": "17:30",
    "status": "pending",
    "reason": "Chest tightness and routine follow-up"
  }
}
```

### 4.2 Update Appointment Status
- **Method**: `PUT`
- **Path**: `/api/appointments/:id`
- **Auth**: Required (`doctor`, `admin`)
- **Request Body**:
```json
{
  "status": "confirmed | completed | cancelled",
  "notes": "Doctor confirmed appointment slot."
}
```

---

## 5. Medical Records & Prescriptions

### 5.1 Create Medical Record
- **Method**: `POST`
- **Path**: `/api/medical-records`
- **Auth**: Required (`doctor`, `admin`)
- **Request Body**:
```json
{
  "patientId": "66ce30a1f9e8a1001bc12345",
  "diagnosis": "Stage 1 Essential Hypertension",
  "symptoms": ["Occasional headache", "Dizziness after exertion"],
  "reports": ["Lipid Profile (2026-08)", "ECG Normal"],
  "notes": "Advised low-sodium DASH diet and regular monitoring."
}
```

### 5.2 Create Prescription
- **Method**: `POST`
- **Path**: `/api/prescriptions`
- **Auth**: Required (`doctor`)
- **Request Body**:
```json
{
  "patientId": "66ce30a1f9e8a1001bc12345",
  "medicines": [
    {
      "name": "Telmisartan 40mg",
      "dosage": "1 tablet daily",
      "duration": "30 days",
      "instructions": "Take after breakfast"
    }
  ],
  "instructions": "Follow up after 30 days with BP chart."
}
```

---

## 6. Machine Learning Endpoints (`/api/ml`)

### 6.1 Disease Prediction
- **Method**: `POST`
- **Path**: `/api/ml/disease-prediction`
- **Request Body**:
```json
{
  "symptoms": ["itching", "skin_rash", "nodal_skin_eruptions"]
}
```
- **Response (200 OK)**:
```json
{
  "success": true,
  "data": {
    "prediction": "Fungal infection",
    "confidence": 0.94,
    "topPredictions": [
      { "disease": "Fungal infection", "probability": 0.94 },
      { "disease": "Allergy", "probability": 0.04 }
    ],
    "disclaimer": "This is an AI-based risk estimate for informational support only, NOT a medical diagnosis.",
    "modelVersion": "1.0.0"
  }
}
```

### 6.2 Diabetes Risk Assessment
- **Method**: `POST`
- **Path**: `/api/ml/diabetes-risk`
- **Request Body**:
```json
{
  "pregnancies": 0,
  "glucose": 140,
  "bloodPressure": 85,
  "skinThickness": 25,
  "insulin": 120,
  "bmi": 28.5,
  "diabetesPedigreeFunction": 0.45,
  "age": 42
}
```
- **Response (200 OK)**:
```json
{
  "success": true,
  "data": {
    "riskLevel": "Moderate Risk",
    "riskScore": 0.68,
    "prediction": "positive",
    "keyContributingFactors": ["Glucose", "BMI", "Age"],
    "recommendations": "Recommend HbA1c screening and lifestyle consultation.",
    "disclaimer": "AI risk assessment tool. Consult a licensed physician for clinical diagnosis."
  }
}
```

### 6.3 Heart Disease Risk Assessment
- **Method**: `POST`
- **Path**: `/api/ml/heart-risk`
- **Request Body**:
```json
{
  "age": 55,
  "sex": 1,
  "chestPainType": 2,
  "restingBP": 140,
  "cholesterol": 245,
  "fastingBS": 0,
  "restingECG": 1,
  "maxHR": 150,
  "exerciseAngina": 0,
  "oldpeak": 1.2,
  "stSlope": 2
}
```

### 6.4 Patient Multi-Factor Risk Scoring
- **Method**: `POST`
- **Path**: `/api/ml/patient-risk`

### 6.5 Medical Text / Symptom NLP Classification
- **Method**: `POST`
- **Path**: `/api/ml/text-classification`
- **Request Body**:
```json
{
  "text": "Patient reports sharp epigastric pain radiating to back with vomiting for 2 days"
}
```

---

## 7. West Bengal Healthcare GIS Endpoints (`/api/locations`)

### 7.1 Search Facilities Across West Bengal
- **Method**: `GET`
- **Path**: `/api/locations`
- **Query Params**:
  - `district` (e.g. `Kolkata`, `Darjeeling`, `Murshidabad`, `Howrah`, etc.)
  - `city`
  - `type` (`hospital`, `clinic`, `pharmacy`, `diagnostic_centre`, `emergency`)
  - `specialty` (`Cardiology`, `Neurology`, `Pediatrics`, `Oncology`, `General`)

### 7.2 Nearby Facilities (Geo-Spatial Query)
- **Method**: `GET`
- **Path**: `/api/locations/nearby`
- **Query Params**: `lat`, `lng`, `radiusKm` (default: `10`), `type`

---

## 8. AI Medical Assistant (`/api/ai`)

### 8.1 Conversational Medical Q&A
- **Method**: `POST`
- **Path**: `/api/ai/medical-assistant`
- **Request Body**:
```json
{
  "question": "What does a high SGPT level indicate on a Liver Function Test?",
  "conversationHistory": []
}
```
- **Response (200 OK)**:
```json
{
  "success": true,
  "data": {
    "answer": "SGPT (also known as ALT - Alanine Aminotransferase) is an enzyme found mostly in liver cells. Elevated levels often indicate liver cell inflammation or stress...",
    "disclaimer": "This information is educational and does not constitute medical advice or laboratory interpretation.",
    "model": "gemini-1.5-flash"
  }
}
```