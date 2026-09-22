import os
from pathlib import Path
from dotenv import load_dotenv

# Load .env from project root
BASE_DIR = Path(__file__).resolve().parent.parent.parent
load_dotenv(BASE_DIR / '.env')

class Config:
    """Application Configuration Settings"""
    ENV = os.getenv('FLASK_ENV', 'development')
    DEBUG = os.getenv('DEBUG', 'True').lower() in ('true', '1', 't')
    PORT = int(os.getenv('PORT', 5000))
    SECRET_KEY = os.getenv('SECRET_KEY', 'default-dev-secret-key-change-in-production')

    # MongoDB Atlas Settings
    MONGO_URI = os.getenv('MONGO_URI', 'mongodb://localhost:27017/ai_medical_system')
    DB_NAME = os.getenv('DB_NAME', 'ai_medical_system')

    # JWT Authentication
    JWT_SECRET_KEY = os.getenv('JWT_SECRET_KEY', 'super-secret-jwt-key-for-ai-medical-system-2026')
    JWT_ACCESS_TOKEN_EXPIRES_HOURS = int(os.getenv('JWT_ACCESS_TOKEN_EXPIRES_HOURS', 24))
    JWT_ALGORITHM = os.getenv('JWT_ALGORITHM', 'HS256')

    # Google Maps Platform
    GOOGLE_MAPS_API_KEY = os.getenv('GOOGLE_MAPS_API_KEY', '')

    # Modular AI Assistant Config
    AI_PROVIDER = os.getenv('AI_PROVIDER', 'gemini')
    AI_API_KEY = os.getenv('AI_API_KEY', '')
    AI_MODEL_NAME = os.getenv('AI_MODEL_NAME', 'gemini-1.5-flash')

    # CORS Origins
    CORS_ORIGINS = [origin.strip() for origin in os.getenv('CORS_ORIGINS', 'http://localhost:4200,http://127.0.0.1:4200').split(',')]

    # Machine Learning Models Directory
    ML_MODELS_PATH = Path(__file__).resolve().parent.parent / 'ml' / 'models'
