import logging
from werkzeug.exceptions import HTTPException
from ..utils.response import error_response

logger = logging.getLogger('ai_medical.error')

def register_error_handlers(app):
    """Register centralized error handlers for the Flask app"""

    @app.errorhandler(HTTPException)
    def handle_http_exception(e):
        logger.warning(f"HTTP Exception {e.code}: {e.description}")
        code_map = {
            400: "BAD_REQUEST",
            401: "UNAUTHORIZED",
            403: "FORBIDDEN",
            404: "NOT_FOUND",
            405: "METHOD_NOT_ALLOWED",
            422: "UNPROCESSABLE_ENTITY",
            429: "TOO_MANY_REQUESTS",
            500: "INTERNAL_SERVER_ERROR"
        }
        err_code = code_map.get(e.code, "HTTP_ERROR")
        return error_response(message=e.description, code=err_code, status_code=e.code)

    @app.errorhandler(Exception)
    def handle_generic_exception(e):
        logger.error(f"Unhandled Exception: {str(e)}", exc_info=True)
        return error_response(
            message="An unexpected server error occurred. Please try again later.",
            code="INTERNAL_SERVER_ERROR",
            status_code=500
        )
