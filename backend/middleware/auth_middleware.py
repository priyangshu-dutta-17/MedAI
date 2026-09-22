from functools import wraps
from flask import request, g
from ..utils.auth_utils import decode_jwt_token
from ..utils.response import error_response

def jwt_required(f):
    """Decorator to enforce valid JWT token in Authorization header"""
    @wraps(f)
    def decorated_function(*args, **kwargs):
        auth_header = request.headers.get('Authorization', None)
        if not auth_header:
            return error_response(
                message="Authorization header is required (Bearer <token>)",
                code="UNAUTHORIZED",
                status_code=401
            )

        parts = auth_header.split()
        if len(parts) != 2 or parts[0].lower() != 'bearer':
            return error_response(
                message="Invalid Authorization header format. Expected 'Bearer <token>'",
                code="UNAUTHORIZED",
                status_code=401
            )

        token = parts[1]
        try:
            payload = decode_jwt_token(token)
            g.current_user = {
                'userId': payload.get('userId'),
                'role': payload.get('role'),
                'email': payload.get('email')
            }
        except ValueError as e:
            return error_response(message=str(e), code="UNAUTHORIZED", status_code=401)
        except Exception:
            return error_response(message="Authentication failed", code="UNAUTHORIZED", status_code=401)

        return f(*args, **kwargs)
    return decorated_function

def roles_required(*allowed_roles):
    """Decorator to enforce role-based authorization"""
    def decorator(f):
        @wraps(f)
        @jwt_required
        def decorated_function(*args, **kwargs):
            current_user = getattr(g, 'current_user', None)
            if not current_user or current_user.get('role') not in allowed_roles:
                return error_response(
                    message=f"Forbidden. Required role(s): {', '.join(allowed_roles)}",
                    code="FORBIDDEN",
                    status_code=403
                )
            return f(*args, **kwargs)
        return decorated_function
    return decorator
