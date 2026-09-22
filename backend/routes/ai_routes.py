from flask import Blueprint
from ..controllers.ai_controller import AIController

ai_bp = Blueprint('ai', __name__)
ai_bp.route('/medical-assistant', methods=['POST'])(AIController.ask_assistant)