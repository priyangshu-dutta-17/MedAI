# AI MEDICAL SYSTEM
### Master of Computer Applications (MCA) — Minor Project

A full-stack, enterprise-grade healthcare web application designed for patients, certified doctors, and healthcare administrators across all **23 districts of West Bengal, India**. The platform integrates electronic medical records, real-time appointment scheduling, predictive machine learning engines, an AI-powered medical assistant, and a state-wide GIS healthcare locator.

---

## Table of Contents
1. [Project Overview & Key Features](#1-project-overview--key-features)
2. [Technology Stack](#2-technology-stack)
3. [Four-Member Work Division](#3-four-member-work-division)
4. [System Architecture](#4-system-architecture)
5. [Directory Structure](#5-directory-structure)
6. [Prerequisites & Installation](#6-prerequisites--installation)
7. [Environment Configuration](#7-environment-configuration)
8. [Running the Application](#8-running-the-application)
9. [Machine Learning Pipeline](#9-machine-learning-pipeline)
10. [West Bengal Healthcare Locator](#10-west-bengal-healthcare-locator)
11. [Testing & Verification](#11-testing--verification)
12. [Documentation Index](#12-documentation-index)

---

## 1. Project Overview & Key Features

### Public Portal
- **Modern Landing Page**: Comprehensive overview of services, hospital networks across West Bengal, and AI-enabled healthcare tools.
- **Role-Based Authentication**: Secure Registration and Login with JWT token issuance for Patients, Doctors, and Administrators.
- **Informational Pages**: About Us, Healthcare Services Directory, Contact & Emergency Hotlines.

### Patient Portal
- **Health Dashboard**: Real-time overview of upcoming appointments, active prescriptions, recent medical history, and quick links.
- **Interactive Symptom Checker**: Multi-symptom selector predicting probable health conditions with confidence scores.
- **Disease & Risk Calculators**:
  - Diabetes Risk Assessment (based on clinical markers like glucose, insulin, BMI).
  - Cardiovascular / Heart Disease Risk Stratifier.
  - Multi-Factor Patient Risk Triage.
- **AI Medical Assistant**: Conversational health guide explaining medical terms and lab reports in plain language.
- **West Bengal Healthcare Locator**: Interactive Google Map with geo-spatial filtering across all 23 districts of West Bengal.
- **Appointments & Records**: Seamless booking with verified doctors, view historical prescriptions and diagnosis reports.

### Doctor Portal
- **Clinical Dashboard**: Overview of daily appointments, pending patient consultations, and quick actions.
- **Patient Roster & EMR**: Access patient medical history, previous diagnoses, and lab summaries.
- **Digital Prescription Generator**: Create itemized prescriptions with dosage, frequency, and instructions.
- **Availability Management**: Configure weekly consultation days, time windows, and fees.
- **Doctor Verification**: Profile submission with West Bengal Medical Council (WBMC) license verification.

### Administrator Portal
- **System Telemetry & Analytics**: Total user counts, active appointments, doctor verification metrics, and ML prediction volumes.
- **Doctor Verification Queue**: Review and approve medical practitioner licenses and credentials.
- **Healthcare Facilities Manager**: Manage hospitals, clinics, diagnostic centers, and 24x7 pharmacies across West Bengal.

---

## 2. Technology Stack

### Frontend (Member 1)
- **Framework**: Angular 18+ (Standalone Architecture & Modular UI Shell)
- **Language**: TypeScript, HTML5, Modern CSS3
- **Routing & State**: Angular Router, Route Guards (`AuthGuard`, `RoleGuard`)
- **HTTP & Forms**: Angular `HttpClient`, Reactive Forms with strict validation
- **Maps**: Google Maps JavaScript API, Google Places Library

### Backend & Security (Member 2)
- **Runtime & Framework**: Python 3.10+, Flask REST API
- **Authentication**: JSON Web Tokens (`PyJWT`) with 24-hour expiration
- **Security**: Password hashing via `bcrypt` (12 salt rounds), CORS middleware (`Flask-Cors`), Role-Based Access Control (RBAC)
- **Configuration**: `python-dotenv` for secure environment management

### Machine Learning & AI (Member 3)
- **Libraries**: Scikit-Learn, Pandas, NumPy, Joblib, SciPy, Matplotlib, Seaborn
- **Algorithms**: Random Forest, Logistic Regression, Support Vector Machines (SVM), Decision Trees, Multinomial Naive Bayes, TF-IDF Vectorizer
- **AI Assistant**: Modular LLM integration (Google Gemini / OpenAI / Fallback rules) with medical disclaimer guardrails

### Database & Spatial Data (Member 4)
- **Database**: MongoDB 6.0+ / MongoDB Atlas Cloud
- **Driver**: `pymongo` with connection pooling and DNS resolution
- **Spatial Indexing**: 2dsphere indexing for longitude/latitude geo-queries (`$nearSphere`)
- **Coverage**: Full dataset covering all 23 districts of West Bengal, India

---

## 3. Four-Member Work Division

```
+--------------------------------------------------------------------------------+
|                         FOUR-MEMBER WORK DIVISION                              |
+-------------------+--------------------+--------------------+------------------+
| MEMBER 1          | MEMBER 2           | MEMBER 3           | MEMBER 4         |
| Frontend & UI     | Backend REST & Auth| Machine Learning   | Database & GIS   |
+-------------------+--------------------+--------------------+------------------+
| - Angular App     | - Flask Factory    | - ML Pipelines     | - MongoDB Atlas  |
| - Standalone Comps| - JWT Auth & RBAC  | - Model Training   | - Schemas & Seeds|
| - Reactive Forms  | - REST Endpoints   | - Model Registry   | - 23 WB Districts|
| - Route Guards    | - Error Handler    | - NLP Triage       | - Geo-Spatial GIS|
| - UI Dashboards   | - Service Layer    | - AI Assistant     | - Google Places  |
| - Maps & Chat UI  | - API Controllers  | - Model Evaluation | - Facility Data  |
+-------------------+--------------------+--------------------+------------------+
```

---

## 4. System Architecture

```
Angular 18+ Frontend (Port 4200)
         │
         │ REST API (JSON / Bearer JWT)
         ▼
Flask Backend Service (Port 5000)
   ├── Auth Middleware (JWT / Bcrypt)
   ├── Controller & Service Layer
   │
   ├───► MongoDB Atlas (10 Logical Collections)
   ├───► ML Inference Engine (Joblib Serialized Models)
   ├───► Google Maps Platform (Places / Geocoding API)
   └───► Modular AI Assistant (Gemini / OpenAI API)
```

---

## 5. Directory Structure

```
AI-Medical-System/
├── frontend/                     # Member 1: Angular Single Page Application
│   ├── src/
│   │   ├── app/
│   │   │   ├── core/             # Guards, interceptors, core models
│   │   │   ├── shared/           # Reusable components, pipes, UI widgets
│   │   │   ├── features/
│   │   │   │   ├── public/       # Home, About, Services, Contact, Auth
│   │   │   │   ├── patient/      # Patient Dashboard, ML checkers, Locator, AI Chat
│   │   │   │   ├── doctor/       # Doctor Dashboard, Appointments, Prescriptions
│   │   │   │   └── admin/        # Admin Dashboard, User/Doctor/Facility Mgt
│   │   │   └── services/         # Angular API Client Services
│   │   └── environments/         # Environment configurations
│   └── package.json
│
├── backend/                      # Member 2: Flask REST Application
│   ├── app.py                    # Application Entrypoint & Factory
│   ├── config/                   # Configuration settings & DB connections
│   ├── routes/                   # Blueprint definitions & URL routing
│   ├── controllers/              # Request handling & input validation
│   ├── services/                 # Business logic layer
│   ├── models/                   # Data transfer objects & schemas
│   ├── middleware/               # Auth guards, RBAC, error handlers
│   ├── ml/                       # ML model inference wrappers
│   ├── maps/                     # Google Maps & GIS service layer
│   ├── utils/                    # Common helper utilities & formatters
│   ├── tests/                    # Backend unit & integration test suite
│   └── requirements.txt
│
├── ml/                           # Member 3: Machine Learning & AI
│   ├── datasets/                 # Training and benchmarking datasets
│   ├── preprocessing/            # Data cleaning, scaling, vectorization
│   ├── training/                 # Model training & hyperparameter tuning scripts
│   ├── evaluation/               # Model comparison, confusion matrices, metrics
│   ├── models/                   # Serialized .pkl models and metadata
│   ├── predictions/              # Standalone prediction utilities
│   ├── notebooks/                # Jupyter / research notebooks
│   └── requirements.txt
│
├── database/                     # Member 4: MongoDB Schemas & GIS
│   ├── schemas/                  # Collection definitions & validation rules
│   ├── seeds/                    # Database population & dummy data scripts
│   └── data/                     # West Bengal 23 districts & healthcare datasets
│
├── docs/                         # Comprehensive Engineering Specifications
│   ├── architecture.md           # 3-tier architecture & security design
│   ├── api-documentation.md      # Full REST API request/response contracts
│   ├── database-schema.md        # MongoDB collection schemas & indexes
│   ├── ml-documentation.md       # Machine Learning models, metrics & disclaimers
│   ├── west-bengal-coverage.md   # 23-district healthcare coverage directory
│   └── team-division.md          # 4-member responsibilities & Git workflows
│
├── .env.example                  # Environment variables template
├── .gitignore                    # Git ignore specifications
└── README.md                     # Master project documentation
```

---

## 6. Prerequisites & Installation

### Requirements
- **Node.js**: `v18.x` or later (tested with v24.x)
- **Python**: `v3.10` or later
- **MongoDB**: Local MongoDB instance or free MongoDB Atlas Cloud cluster
- **Google Maps API Key** (optional for map tiles and places lookup)

---

## 7. Environment Configuration

1. Copy `.env.example` to create `.env`:
   ```bash
   cp .env.example .env
   ```
2. Update the environment parameters:
   ```ini
   FLASK_ENV=development
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/ai_medical_system
   JWT_SECRET_KEY=your_secure_random_jwt_secret_key_here
   GOOGLE_MAPS_API_KEY=your_google_maps_platform_api_key
   AI_API_KEY=your_gemini_or_openai_api_key
   ```

---

## 8. Running the Application

### 8.1 Backend Service
```bash
cd backend
python -m venv .venv
# On Windows:
.venv\Scripts\activate
# On Linux/macOS:
source .venv/bin/activate

pip install -r requirements.txt
python app.py
```
*The Flask REST API will start at `http://localhost:5000`.*

### 8.2 Database Seeding (West Bengal Data)
```bash
cd database/seeds
python seed_database.py
```

### 8.3 Machine Learning Model Training
```bash
cd ml
pip install -r requirements.txt
python training/train_all_models.py
```

### 8.4 Frontend Application
```bash
cd frontend
npm install
npm start
```
*The Angular UI will be available at `http://localhost:4200`.*

---

## 9. Machine Learning Pipeline

1. **Disease Prediction**: Multi-symptom classifier predicting 41 medical conditions from 132 symptom vectors.
2. **Diabetes Risk**: Stratifies risk based on 8 clinical markers (Glucose, Insulin, BMI, Blood Pressure, etc.).
3. **Heart Disease Risk**: Assesses cardiovascular disease risk using ECG, cholesterol, and exertion indicators.
4. **Patient Multi-Factor Risk**: Calculates overall patient vulnerability score.
5. **Medical NLP Triage**: Categorizes free-text patient descriptions to the appropriate medical department.

> [!NOTE]
> **Medical Disclaimer**:
> The AI Medical System provides risk estimation and clinical decision support. All predictions are probabilistic and must not replace professional diagnosis by a qualified medical doctor.

---

## 10. West Bengal Healthcare Locator

Supports all **23 Districts of West Bengal**:
- Kolkata, North 24 Parganas, South 24 Parganas, Howrah, Hooghly
- Purba Bardhaman, Paschim Bardhaman, Birbhum, Nadia, Murshidabad
- Malda, Uttar Dinajpur, Dakshin Dinajpur, Darjeeling, Kalimpong
- Jalpaiguri, Alipurduar, Cooch Behar, Purba Medinipur, Paschim Medinipur
- Jhargram, Bankura, Purulia

Search facilities by:
- District & City
- Facility Type: Tertiary Hospitals, Clinics, 24x7 Pharmacies, Diagnostic Centers, Emergency Units
- Specialization: Cardiology, Pediatrics, Neurology, Orthopedics, Oncology, General Medicine
- Geo-Distance (in km using GPS coordinates)

---

## 11. Testing & Verification

Run automated backend and ML test suites:
```bash
cd backend
pytest tests/ -v
```

---

## 12. Documentation Index

- [System Architecture](docs/architecture.md)
- [REST API Contract Documentation](docs/api-documentation.md)
- [MongoDB Database Schemas](docs/database-schema.md)
- [Machine Learning & AI Specifications](docs/ml-documentation.md)
- [West Bengal Healthcare Coverage Guide](docs/west-bengal-coverage.md)
- [Four-Member Team Division & Workflow](docs/team-division.md)

---

## Academic Details
- **Project Name**: AI Medical System
- **Course**: Master of Computer Applications (MCA)
- **Project Category**: MCA Minor Project
- **Target Region**: West Bengal, India