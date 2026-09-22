# System Architecture Specification

## AI Medical System (MCA Minor Project)

---

## 1. Architectural Overview

The **AI Medical System** follows a clean, decoupled **3-Tier Enterprise Architecture** adhering to separation of concerns (SoC), single responsibility principle (SRP), and modular domain-driven design.

```
+-------------------------------------------------------------------------+
|                        TIER 1: PRESENTATION                             |
|               Angular 18+ Single Page Application (SPA)                 |
|                                                                         |
|  [Public UI]       [Patient Portal]     [Doctor Portal]  [Admin Panel]  |
|  - Landing Page    - Health Dashboard   - Patient Roster - User Mgt     |
|  - Auth (Login/Reg)- Symptom Checker    - Consultations  - Verification |
|  - Contact / About - Records & Rx       - Rx Generator   - Stats & Logs |
|                    - Maps Locator       - Availability   - Facility Mgt |
|                    - AI Assistant                                       |
+------------------------------------+------------------------------------+
                                     | HTTPS / JSON REST API
                                     v
+------------------------------------+------------------------------------+
|                         TIER 2: APPLICATION                             |
|                       Python Flask REST Backend                         |
|                                                                         |
|  [Middleware]     [Controllers & Routes]    [Core Services]             |
|  - JWT Auth Guard - /api/auth               - AuthService               |
|  - Role Guard     - /api/patients           - PatientService            |
|  - Error Handler  - /api/doctors            - DoctorService             |
|  - CORS Config    - /api/appointments       - AppointmentService        |
|  - Validation     - /api/medical-records    - MedicalRecordService      |
|                   - /api/prescriptions      - PrescriptionService       |
|                   - /api/locations          - LocationGISService        |
|                   - /api/ml                 - MLInferenceService        |
|                   - /api/ai                 - AIAssistantService        |
+-------------------+-------------------------+---------------------------+
                    |                         |
         Internal   |                         |   Inference Calls
         Data Ops   v                         v
+-------------------+---------+     +---------+---------------------------+
|          TIER 3A:           |     |                  TIER 3B:           |
|      DATA PERSISTENCE       |     |          MACHINE LEARNING & AI      |
|                             |     |                                     |
|       MongoDB Atlas         |     |   [ML Engine / Joblib Serialized]   |
|  - users                    |     |   - Disease Prediction (RF/NB/DT)   |
|  - patients                 |     |   - Diabetes Risk (LogReg/RF/SVM)   |
|  - doctors                  |     |   - Heart Disease Risk (LogReg/RF)  |
|  - appointments             |     |   - Patient Risk Scorer             |
|  - medical_records          |     |   - NLP Medical Triage              |
|  - prescriptions            |     |                                     |
|  - healthcare_facilities    |     |   [Modular LLM Service]             |
|  - notifications            |     |   - Health Q&A / Term Explainer     |
|  - ml_predictions           |     |   - Medical Disclaimer Engine       |
+-----------------------------+     +-------------------------------------+
```

---

## 2. Component Boundaries & Member Work Allocation

| Member | Primary Focus Area | Key Deliverables & Boundary |
|---|---|---|
| **Member 1** | **Angular Frontend / UI** | Standalone Components, Reactive Forms, Route Guards, Dashboards, Google Maps UI, AI Chat UI, API Clients. |
| **Member 2** | **Flask Backend / REST APIs** | Flask Factory, JWT Authentication, RBAC Middleware, Service Layer, REST Endpoints, Controller Logic. |
| **Member 3** | **Machine Learning & AI** | Preprocessing, Training, Evaluation Reports, Serialized Models (.pkl), Prediction Service, LLM Wrapper. |
| **Member 4** | **MongoDB & West Bengal GIS** | MongoDB Schemas, Atlas Setup, 23-District Healthcare Facilities Seed Data, Google Places/Geocoding Service. |

---

## 3. Communication Protocols & Security Boundaries

1. **Client-Server Communication**:
   - Strictly stateless HTTP/1.1 or HTTP/2 over TLS.
   - All payloads are standardized JSON format.
   - Authentication via Bearer JWT tokens in the `Authorization` header.

2. **Security & Data Isolation**:
   - **Frontend Isolation**: The Angular client never directly connects to MongoDB or holds database credentials.
   - **Credential Management**: All secrets (`JWT_SECRET`, `MONGO_URI`, `GOOGLE_MAPS_API_KEY`, `AI_API_KEY`) reside exclusively in server-side `.env` files.
   - **Password Security**: Passwords hashed using `bcrypt` with salt rounds = 12 before persistence.
   - **Role-Based Access Control (RBAC)**: Enforced both at Angular route guard level (UI state) and Flask middleware level (API security).

3. **Machine Learning Serving**:
   - ML models are trained offline and serialized via `joblib` into `ml/models/`.
   - The Flask backend loads models into memory on startup (or lazy load on first request) and executes fast vector inferences without spawning external sub-processes.

4. **GIS & Location Services**:
   - West Bengal spatial queries utilize MongoDB 2dsphere indexes (`coordinates: [longitude, latitude]`).
   - Server-side caching for Google Places API responses reduces external API cost and latency.

---

## 4. Error Handling & Standardization

All API endpoints return standard enveloped JSON responses:

**Success Response:**
```json
{
  "success": true,
  "message": "Operation completed successfully",
  "data": { ... }
}
```

**Error Response:**
```json
{
  "success": false,
  "error": {
    "code": "RESOURCE_NOT_FOUND",
    "message": "The requested doctor profile was not found",
    "details": null
  }
}
```