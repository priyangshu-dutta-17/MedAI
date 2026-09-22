# Machine Learning & AI Engineering Documentation

## AI Medical System (MCA Minor Project)

---

## 1. Overview & Ethical Machine Learning Principles

The Machine Learning subsystem of the **AI Medical System** provides algorithmic risk stratification and symptom analysis designed for clinical decision-support and patient self-awareness.

> [!IMPORTANT]
> **Ethical & Clinical Disclaimer**:
> All machine learning models provide **probabilistic risk assessments** and decision-support guidance only. They do **not** constitute definitive medical diagnoses. The application interfaces prominently display clinical disclaimers urging users to consult certified healthcare practitioners.

---

## 2. Machine Learning Modules Summary

| Module | Task | Candidate Algorithms | Selected Model | Target Metrics |
|---|---|---|---|---|
| **Disease Prediction** | Multi-class symptom-to-disease classification | Naive Bayes, Decision Tree, Random Forest | **Random Forest Classifier** | Accuracy > 95%, Macro F1 |
| **Diabetes Risk** | Binary risk stratification | Logistic Regression, SVM, Random Forest | **Random Forest / LogReg** | ROC-AUC > 0.85, Recall > 0.80 |
| **Heart Disease Risk** | Binary cardiovascular risk prediction | Logistic Regression, Random Forest, Gradient Boosting | **Random Forest Classifier** | Recall > 0.85, Precision > 0.82 |
| **Patient Risk Scorer** | Multi-tier health risk scoring (Low/Med/High) | Decision Tree, Random Forest | **Decision Tree / Rule Ensemble** | Interpretability & F1 |
| **Medical NLP Triage** | Text symptom triage & department routing | TF-IDF + MultinomialNB, LogReg | **TF-IDF + Logistic Regression** | Accuracy > 90% |

---

## 3. Detailed Module Specifications

### 3.1 Disease Prediction by Symptoms
- **Dataset**: Comprehensive symptom-disease mapping dataset covering 41 distinct medical conditions and 132 standardized binary symptom flags (e.g. `itching`, `skin_rash`, `continuous_sneezing`, `joint_pain`, `vomiting`, `chest_pain`, etc.).
- **Input Vector**: 132-dimensional binary vector $X \in \{0, 1\}^{132}$.
- **Output**: Top-$k$ predicted diseases with posterior probability distributions $P(Y = c \mid X)$.
- **Model Evaluation**:
  - Multinomial Naive Bayes
  - Decision Tree Classifier (Gini Impurity)
  - Random Forest Classifier ($N_{estimators} = 100$)
- **Artifacts Saved**: `ml/models/disease_model.pkl`, `ml/models/symptom_features.json`

### 3.2 Diabetes Risk Prediction
- **Dataset**: Standardized Diabetes Clinical Features (Glucose, Blood Pressure, Insulin, BMI, Age, Diabetes Pedigree Function, Pregnancies, Skin Thickness).
- **Preprocessing Pipeline**:
  - Imputation of zero values in biological markers (Glucose, Insulin, BMI) with robust median values.
  - Standard scaling ($Z$-score normalization) via `StandardScaler`.
- **Model Comparison**:
  - Logistic Regression ($L_2$ regularization)
  - Support Vector Classifier (RBF Kernel, $C=1.0$)
  - Random Forest Classifier ($N_{estimators} = 150$)
- **Artifacts Saved**: `ml/models/diabetes_model.pkl`, `ml/models/diabetes_scaler.pkl`

### 3.3 Heart Disease Risk Assessment
- **Dataset**: Clinical cardiovascular diagnostic dataset (Age, Sex, Chest Pain Type 0-3, Resting BP, Serum Cholesterol, Fasting Blood Sugar, Resting ECG, Max Heart Rate Achieved, Exercise Induced Angina, ST Depression / Oldpeak, Slope of Peak Exercise ST Segment).
- **Objective**: Identify probability of significant coronary artery disease.
- **Model Comparison**:
  - Logistic Regression
  - Support Vector Machine
  - Random Forest Classifier
- **Artifacts Saved**: `ml/models/heart_disease_model.pkl`, `ml/models/heart_scaler.pkl`

### 3.4 Patient Multi-Factor Risk Classifier
- **Features**: Patient age, BMI, systolic/diastolic blood pressure, smoker status, preexisting conditions count, and acute symptom count.
- **Output**: Risk Tier (`Low`, `Moderate`, `High`, `Critical`).
- **Use Case**: Prioritizes doctor triage queues in the Doctor Dashboard.
- **Artifacts Saved**: `ml/models/patient_risk_model.pkl`

### 3.5 Medical Text NLP Classification & Department Triage
- **Features**: Raw natural language text describing patient discomfort or report summary.
- **Pipeline**:
  - Lowercasing, punctuation stripping, stopword removal, lemmatization.
  - TF-IDF Vectorizer with n-grams $(1, 2)$, max features = 2000.
  - Multinomial Naive Bayes / Logistic Regression classifier.
- **Output**: Medical Specialty Recommendation (`Cardiology`, `Dermatology`, `Gastroenterology`, `General Physician`, `Neurology`, `Orthopedics`, `Pediatrics`, `Pulmonology`).
- **Artifacts Saved**: `ml/models/nlp_vectorizer.pkl`, `ml/models/nlp_specialty_model.pkl`

---

## 4. Modular AI Assistant Architecture

The AI Medical Assistant is built with a decoupled adapter pattern:

```
[ Angular Chat UI ] 
        |
        v
[ POST /api/ai/medical-assistant ]
        |
        v
[ AIAssistantService (Backend Abstraction) ]
        |
        +---> Provider Adapter: Gemini 1.5 Flash (Default)
        +---> Provider Adapter: OpenAI GPT-4o-mini
        +---> Provider Adapter: Local / HuggingFace Pipeline (Fallback)
```

**Guardrails & System Prompting**:
- The prompt explicitly instructs the LLM to act as a supportive health educator.
- Prohibits prescribing medications or providing definitive surgical opinions.
- Appends medical emergency advice (e.g. calling local ambulance / 108 / 112) for high-urgency symptoms.