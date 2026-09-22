from flask import request
from ..services.location_service import LocationService
from ..utils.response import success_response, error_response

class LocationController:
    @staticmethod
    def get_locations():
        try:
            filters = {
                'district': request.args.get('district'),
                'city': request.args.get('city'),
                'type': request.args.get('type'),
                'specialty': request.args.get('specialty')
            }
            results = LocationService.get_facilities(filters)
            return success_response(data=results, message="West Bengal healthcare facilities retrieved")
        except Exception as e:
            return error_response(message=str(e), status_code=500)

    @staticmethod
    def get_nearby():
        try:
            lat = float(request.args.get('lat', 22.5726))
            lng = float(request.args.get('lng', 88.3639))
            radius = float(request.args.get('radiusKm', 25.0))
            fac_type = request.args.get('type')
            results = LocationService.get_nearby(lat, lng, radius, fac_type)
            return success_response(data=results, message="Nearby healthcare facilities retrieved")
        except Exception as e:
            return error_response(message=str(e), status_code=500)