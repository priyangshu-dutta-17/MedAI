from flask import Blueprint
from ..controllers.location_controller import LocationController

location_bp = Blueprint('locations', __name__)
location_bp.route('', methods=['GET'])(LocationController.get_locations)
location_bp.route('/nearby', methods=['GET'])(LocationController.get_nearby)