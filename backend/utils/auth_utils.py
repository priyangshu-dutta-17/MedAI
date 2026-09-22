import bcrypt
import jwt
from datetime import datetime, timedelta, timezone
from ..config.config import Config

def hash_password(password: str) -> str:
    """Hash a plaintext password with bcrypt salt rounds = 12"""
    salt = bcrypt.gensalt(rounds=12)
    return bcrypt.hashpw(password.encode('utf-8'), salt).decode('utf-8')

def check_password(password: str, hashed_password: str) -> bool:
    """Verify plaintext password against bcrypt hash"""
    try:
        return bcrypt.checkpw(password.encode('utf-8'), hashed_password.encode('utf-8'))
    except Exception:
        return False

def generate_jwt_token(user_id: str, role: str, email: str) -> str:
    """Generate a signed JWT access token with expiration"""
    payload = {
        'sub': str(user_id),
        'userId': str(user_id),
        'role': role,
        'email': email,
        'iat': datetime.now(timezone.utc),
        'exp': datetime.now(timezone.utc) + timedelta(hours=Config.JWT_ACCESS_TOKEN_EXPIRES_HOURS)
    }
    return jwt.encode(payload, Config.JWT_SECRET_KEY, algorithm=Config.JWT_ALGORITHM)

def decode_jwt_token(token: str) -> dict:
    """Decode and validate a JWT access token"""
    try:
        return jwt.decode(token, Config.JWT_SECRET_KEY, algorithms=[Config.JWT_ALGORITHM])
    except jwt.ExpiredSignatureError:
        raise ValueError("Token has expired. Please log in again.")
    except jwt.InvalidTokenError:
        raise ValueError("Invalid authentication token.")
