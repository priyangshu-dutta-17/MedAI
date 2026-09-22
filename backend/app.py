import logging
from flask import Flask
from flask_cors import CORS
from .config.config import Config
from .config.db import Database
from .middleware.error_handler import register_error_handlers

# Import All Route Blueprints
from .routes.health_routes import health_bp
from .routes.auth_routes import auth_bp
from .routes.patient_routes import patient_bp
from .routes.doctor_routes import doctor_bp
from .routes.appointment_routes import appointment_bp
from .routes.records_routes import records_bp
from .routes.location_routes import location_bp
from .routes.ai_routes import ai_bp
from .routes.notification_routes import notification_bp
from .routes.ml_routes import ml_bp

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s [%(levelname)s] %(name)s: %(message)s'
)
logger = logging.getLogger('ai_medical.app')

def create_app(config_class=Config):
    """Application Factory for AI Medical System Flask App"""
    app = Flask(__name__)
    app.config.from_object(config_class)

    # Initialize CORS
    CORS(app, resources={r"/api/*": {"origins": config_class.CORS_ORIGINS}}, supports_credentials=True)

    # Initialize Database Connection
    with app.app_context():
        Database.get_db()

    # Register Error Handlers
    register_error_handlers(app)

    # Register All REST API Blueprints
    app.register_blueprint(health_bp, url_prefix='/api')
    app.register_blueprint(auth_bp, url_prefix='/api/auth')
    app.register_blueprint(patient_bp, url_prefix='/api/patients')
    app.register_blueprint(doctor_bp, url_prefix='/api/doctors')
    app.register_blueprint(appointment_bp, url_prefix='/api/appointments')
    app.register_blueprint(records_bp, url_prefix='/api')
    app.register_blueprint(location_bp, url_prefix='/api/locations')
    app.register_blueprint(ai_bp, url_prefix='/api/ai')
    app.register_blueprint(notification_bp, url_prefix='/api/notifications')
    app.register_blueprint(ml_bp, url_prefix='/api/ml')

    logger.info(f"AI Medical System Backend initialized in {config_class.ENV} mode with all 10 REST Blueprints.")
    return app

if __name__ == '__main__':
    app = create_app()
    print("==================================================")
    print("  AI MEDICAL SYSTEM - WEST BENGAL HEALTH PLATFORM")
    print(f"  Running on: http://127.0.0.1:{Config.PORT}")
    print(f"  Health Check: http://127.0.0.1:{Config.PORT}/api/health")
    print("==================================================")
    app.run(host='0.0.0.0', port=Config.PORT, debug=Config.DEBUG)