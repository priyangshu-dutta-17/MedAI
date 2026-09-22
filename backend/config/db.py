import logging
from pymongo import MongoClient
from pymongo.errors import ConnectionFailure, ServerSelectionTimeoutError
from .config import Config

logger = logging.getLogger('ai_medical.db')

class Database:
    """Singleton MongoDB Database Connection Manager"""
    _client = None
    _db = None

    @classmethod
    def get_client(cls):
        if cls._client is None:
            try:
                logger.info(f"Connecting to MongoDB at {Config.MONGO_URI}...")
                cls._client = MongoClient(
                    Config.MONGO_URI,
                    serverSelectionTimeoutMS=5000,
                    connectTimeoutMS=5000
                )
                # Verify connection with ping
                cls._client.admin.command('ping')
                logger.info("Successfully connected to MongoDB Atlas.")
            except (ConnectionFailure, ServerSelectionTimeoutError) as e:
                logger.warning(f"MongoDB connection failed ({e}). Operating in memory/fallback mode.")
        return cls._client

    @classmethod
    def get_db(cls):
        if cls._db is None:
            client = cls.get_client()
            if client is not None:
                cls._db = client[Config.DB_NAME]
                cls.init_indexes(cls._db)
        return cls._db

    @classmethod
    def init_indexes(cls, db):
        """Ensure indexes exist for performance and geo-queries"""
        try:
            # Users indexes
            db.users.create_index("email", unique=True)
            db.users.create_index("role")

            # Doctors indexes
            db.doctors.create_index("userId", unique=True)
            db.doctors.create_index("specialization")
            db.doctors.create_index("district")

            # Patients indexes
            db.patients.create_index("userId", unique=True)

            # Appointments indexes
            db.appointments.create_index([("patientId", 1), ("date", -1)])
            db.appointments.create_index([("doctorId", 1), ("date", 1)])

            # Healthcare Facilities 2dsphere spatial index
            db.healthcare_facilities.create_index([("location", "2dsphere")])
            db.healthcare_facilities.create_index("district")
            db.healthcare_facilities.create_index("type")

            logger.info("MongoDB collections and indexes initialized.")
        except Exception as e:
            logger.warning(f"Index initialization warning: {e}")

    @classmethod
    def is_connected(cls) -> bool:
        """Check if active DB connection is live"""
        try:
            if cls._client is not None:
                cls._client.admin.command('ping')
                return True
        except Exception:
            return False
        return False
