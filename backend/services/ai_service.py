import os
import requests
from ..config.config import Config

class AIAssistantService:
    @staticmethod
    def get_medical_advice(question: str, history: list = None) -> dict:
        api_key = Config.AI_API_KEY
        
        # Modular LLM Integration via Gemini or OpenAI if API key provided
        if api_key and Config.AI_PROVIDER == 'gemini':
            try:
                url = f"https://generativelanguage.googleapis.com/v1beta/models/{Config.AI_MODEL_NAME}:generateContent?key={api_key}"
                system_prompt = (
                    "You are an AI Medical Assistant for the AI Medical System in West Bengal, India. "
                    "Provide clear, empathetic, educational explanations of health symptoms, terms, and tests. "
                    "Never claim to provide a definitive diagnosis. Recommend consulting a certified doctor."
                )
                payload = {
                    "contents": [
                        {"role": "user", "parts": [{"text": f"{system_prompt}\n\nUser Question: {question}"}]}
                    ]
                }
                res = requests.post(url, json=payload, timeout=10)
                if res.status_code == 200:
                    data = res.json()
                    answer = data['candidates'][0]['content']['parts'][0]['text']
                    return {
                        "answer": answer,
                        "disclaimer": "This information is educational and does not constitute a clinical medical diagnosis.",
                        "model": Config.AI_MODEL_NAME
                    }
            except Exception:
                pass

        # Intelligent Rule-Based Medical Fallback Engine
        q_lower = question.lower()
        if "sgpt" in q_lower or "liver" in q_lower or "alt" in q_lower:
            ans = (
                "**SGPT (Alanine Aminotransferase / ALT)** is a primary enzyme found inside liver cells.\n\n"
                "- **Normal Range:** Typically 7 to 56 units per liter (U/L).\n"
                "- **Elevated Levels:** Suggest liver inflammation, fatty liver change, medication effect, or viral hepatitis.\n"
                "- **Next Steps:** Consider repeating LFT in 4 weeks, avoiding alcohol and processed foods, and scheduling a consultation with a Gastroenterologist or Physician."
            )
        elif "glucose" in q_lower or "sugar" in q_lower or "diabetes" in q_lower or "hba1c" in q_lower:
            ans = (
                "**Blood Glucose & Diabetes Indicators:**\n\n"
                "- **Fasting Normal:** 70-99 mg/dL\n"
                "- **Prediabetes:** 100-125 mg/dL\n"
                "- **Diabetes:** Fasting >= 126 mg/dL or HbA1c >= 6.5%\n"
                "- **Management:** Regular aerobic exercise, low glycemic index diet, and medical evaluation."
            )
        elif "blood pressure" in q_lower or "bp" in q_lower or "hypertension" in q_lower:
            ans = (
                "**Blood Pressure Classifications:**\n\n"
                "- **Normal:** Systolic < 120 mmHg and Diastolic < 80 mmHg\n"
                "- **Elevated:** 120-129 / <80 mmHg\n"
                "- **Stage 1 Hypertension:** 130-139 / 80-89 mmHg\n"
                "- **Stage 2 Hypertension:** >= 140 / >= 90 mmHg\n"
                "- **Advice:** Limit daily dietary sodium to under 2,000 mg (DASH diet) and consult a cardiologist."
            )
        elif "chest pain" in q_lower or "emergency" in q_lower or "breath" in q_lower:
            ans = (
                "🚨 **URGENT MEDICAL WARNING:**\n\n"
                "Sudden crushing chest pain, pain radiating to left arm or jaw, or acute shortness of breath are potential symptoms of cardiac emergency.\n"
                "Please call **108 / 112 (Ambulance Helpline)** immediately or visit your nearest emergency room (e.g. SSKM Hospital in Kolkata or your district medical college)."
            )
        else:
            ans = (
                f"Regarding your query on **{question}**:\n\n"
                "Medical symptoms and clinical reports should always be correlated with your vitals, physical examination, and medical history. "
                "You can book an appointment with our verified medical specialists across West Bengal via the **Appointments** portal or consult your primary care doctor."
            )

        return {
            "answer": ans,
            "disclaimer": "This information is educational decision support and does not replace certified clinical advice.",
            "model": "Rule-Based Clinical Triage Engine"
        }