# Four-Member Work Division & Collaboration Strategy

## AI Medical System (MCA Minor Project)

---

## 1. Member Roles & Module Ownership

To support independent parallel development by four MCA team members, the codebase is partitioned into distinct domains with strictly defined interface contracts:

```
                          AI MEDICAL SYSTEM
                                  │
    ┌────────────────┬────────────┴───┬────────────────┬────────────────┐
    ▼                ▼                ▼                ▼                ▼
[ MEMBER 1 ]     [ MEMBER 2 ]     [ MEMBER 3 ]     [ MEMBER 4 ]     [ INTEGRATION ]
Angular Client   Flask Backend    ML & AI Engine   DB & WB GIS      Automated Tests
  Frontend UI     REST / Auth     Model Pipelines  Atlas & Maps     E2E Verification
```

---

### Member 1: Frontend & UI Architect (Angular)
- **Directory Scope**: `frontend/`
- **Core Responsibilities**:
  - Angular 18+ SPA architecture (Standalone components, reactive forms, router, guards).
  - Public portals: Landing page, About, Services, Authentication (Login/Register), Contact.
  - Role-based Portals:
    - **Patient Dashboard**: Health vitals, appointment booking, medical records viewer, prescription manager, ML risk calculators, West Bengal healthcare locator, AI Medical Assistant chat window.
    - **Doctor Dashboard**: Today's schedule, patient roster, electronic prescription writer, medical record entry form, verification profile.
    - **Admin Dashboard**: System metrics, doctor license verification queue, healthcare facilities manager, ML usage analytics.
  - Integration: Angular `HttpClient` services consuming REST endpoints from Member 2, Google Maps JS API for GIS locator.

---

### Member 2: Backend & Security Architect (Flask & REST API)
- **Directory Scope**: `backend/`
- **Core Responsibilities**:
  - Flask Application Factory, configuration management, `.env` parsing.
  - Security Architecture: JWT token issuance/verification, password hashing with `bcrypt` (12 rounds), CORS middleware, RBAC guards (`@require_auth`, `@require_role`).
  - RESTful Endpoints:
    - Auth (`/api/auth/*`)
    - Patients (`/api/patients/*`)
    - Doctors (`/api/doctors/*`)
    - Appointments (`/api/appointments/*`)
    - Medical Records (`/api/medical-records/*`)
    - Prescriptions (`/api/prescriptions/*`)
    - Notifications (`/api/notifications/*`)
  - Integration: Controller layer interfacing with Member 3 (ML inference service) and Member 4 (MongoDB PyMongo client & GIS service).

---

### Member 3: Machine Learning & AI Architect (Python & Scikit-Learn)
- **Directory Scope**: `ml/`, `backend/ml/`, `backend/services/ai_service.py`
- **Core Responsibilities**:
  - Machine Learning Pipeline: Data preprocessing, feature engineering, train-test splits, cross-validation.
  - Algorithm Implementations:
    - Multi-Symptom Disease Classifier (Random Forest vs Naive Bayes vs Decision Tree)
    - Diabetes Risk Assessment (Logistic Regression vs Random Forest vs SVM)
    - Heart Disease Risk Stratification (Logistic Regression vs Random Forest)
    - Multi-Factor Patient Risk Triage
    - NLP Medical Text Classification & Department Routing (TF-IDF + LogReg)
  - Evaluation & Benchmarking: Accuracy, Precision, Recall, F1-Score, Confusion Matrices, ROC-AUC curves.
  - Model Serialization: Exporting trained models and scalers via `joblib` into `ml/models/`.
  - Inference Service: Python serving wrapper consumed by Member 2 REST API.
  - AI Assistant Service: Decoupled LLM integration adapter (Gemini 1.5 Flash / OpenAI / Fallback) with strict medical disclaimer guardrails.

---

### Member 4: Database, Healthcare Data & GIS Architect (MongoDB Atlas & Maps)
- **Directory Scope**: `database/`, `backend/maps/`, `backend/services/location_service.py`
- **Core Responsibilities**:
  - MongoDB Atlas configuration, connection pooling via `pymongo.MongoClient`.
  - Schema design and 2dsphere spatial indexing for all 10 logical collections.
  - Database Seeding: Realistic seed scripts for demo users, patients, verified doctors, sample appointments, medical records, and prescriptions.
  - **West Bengal State-Wide GIS Coverage**: Compiling and seeding healthcare facilities across all 23 districts of West Bengal (Hospitals, Clinics, Diagnostic Centres, 24x7 Pharmacies).
  - GIS Query Engine: Geo-spatial search (`$nearSphere`, `$geoWithin`, district and specialty filters) and Google Maps / Places API integration.

---

## 2. Git Branching & Collaboration Workflow

```
main (Production Ready / Release Tags)
  └── develop (Integration Branch)
        ├── feature/frontend-ui (Member 1)
        ├── feature/backend-api (Member 2)
        ├── feature/ml-models   (Member 3)
        └── feature/database-gis (Member 4)
```

1. Each member works exclusively in their designated feature branch and directories.
2. Cross-module communication strictly relies on documented contracts in `docs/api-documentation.md` and `docs/database-schema.md`.
3. Pull requests require unit tests to pass before merging into `develop`.