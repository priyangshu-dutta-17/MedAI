import math
from ..config.db import Database

# Complete 23 Districts Registry of West Bengal, India
WEST_BENGAL_FACILITIES = [
    # Kolkata
    {"id": "wb_fac_01", "name": "IPGMER and SSKM Hospital", "type": "hospital", "district": "Kolkata", "city": "Kolkata", "address": "244 AJC Bose Road, Bhowanipore, Kolkata - 700020", "phone": "+91 33 2223 1589", "lat": 22.5398, "lng": 88.3426, "specialties": ["Cardiology", "Neurology", "General Surgery", "Trauma", "Nephrology"], "emergencyServices": True, "rating": 4.8},
    {"id": "wb_fac_02", "name": "Medical College and Hospital (Calcutta Medical College)", "type": "hospital", "district": "Kolkata", "city": "Kolkata", "address": "88 College Street, Bowbazar, Kolkata - 700073", "phone": "+91 33 2255 1621", "lat": 22.5735, "lng": 88.3630, "specialties": ["General Medicine", "Pediatrics", "Cardiology", "Oncology"], "emergencyServices": True, "rating": 4.7},
    {"id": "wb_fac_03", "name": "Apollo 24/7 Pharmacy - Park Street", "type": "pharmacy", "district": "Kolkata", "city": "Kolkata", "address": "54 Park Street, Kolkata - 700016", "phone": "+91 33 4000 1234", "lat": 22.5510, "lng": 88.3520, "specialties": ["24x7 Medicines", "Vaccination Supplies"], "emergencyServices": True, "rating": 4.9},
    {"id": "wb_fac_04", "name": "Suraksha Diagnostic Centre - Salt Lake", "type": "diagnostic_centre", "district": "North 24 Parganas", "city": "Kolkata / Bidhannagar", "address": "Sector 1, Salt Lake City, Kolkata - 700064", "phone": "+91 33 6619 1000", "lat": 22.5867, "lng": 88.4178, "specialties": ["Digital X-Ray", "MRI 3T", "CT Scan", "Pathology", "Echo"], "emergencyServices": True, "rating": 4.6},
    
    # North & South 24 Parganas
    {"id": "wb_fac_05", "name": "Barasat Government Medical College & Hospital", "type": "hospital", "district": "North 24 Parganas", "city": "Barasat", "address": "Banamalipur, Barasat, North 24 Parganas - 700124", "phone": "+91 33 2552 3211", "lat": 22.7230, "lng": 88.4800, "specialties": ["General Medicine", "Pediatrics", "Emergency"], "emergencyServices": True, "rating": 4.5},
    {"id": "wb_fac_06", "name": "Diamond Harbour Govt Medical College", "type": "hospital", "district": "South 24 Parganas", "city": "Diamond Harbour", "address": "Harindanga, Diamond Harbour, South 24 Parganas - 743331", "phone": "+91 3174 255 101", "lat": 22.1900, "lng": 88.1900, "specialties": ["Trauma", "General Surgery", "Maternity"], "emergencyServices": True, "rating": 4.4},
    
    # Howrah & Hooghly
    {"id": "wb_fac_07", "name": "Howrah District Hospital", "type": "hospital", "district": "Howrah", "city": "Howrah", "address": "Biplabi Haren Ghosh Sarani, Howrah - 711101", "phone": "+91 33 2641 2450", "lat": 22.5958, "lng": 88.2636, "specialties": ["Emergency", "Orthopedics", "Cardiology"], "emergencyServices": True, "rating": 4.5},
    {"id": "wb_fac_08", "name": "Imambara Sadar Hospital", "type": "hospital", "district": "Hooghly", "city": "Chinsurah", "address": "Hospital Road, Chinsurah, Hooghly - 712101", "phone": "+91 33 2680 2341", "lat": 22.9000, "lng": 88.3900, "specialties": ["General Medicine", "General Surgery", "Pediatrics"], "emergencyServices": True, "rating": 4.4},
    
    # Burdwan & Birbhum
    {"id": "wb_fac_09", "name": "Burdwan Medical College & Hospital", "type": "hospital", "district": "Purba Bardhaman", "city": "Bardhaman", "address": "Baburbag, Rajbati, Bardhaman - 713104", "phone": "+91 342 255 8641", "lat": 23.2324, "lng": 87.8615, "specialties": ["Cardiology", "Neurology", "Oncology", "Trauma ICU"], "emergencyServices": True, "rating": 4.7},
    {"id": "wb_fac_10", "name": "Asansol District Hospital", "type": "hospital", "district": "Paschim Bardhaman", "city": "Asansol", "address": "S.B. Gorai Road, Asansol - 713301", "phone": "+91 341 228 2001", "lat": 23.6889, "lng": 86.9661, "specialties": ["Emergency", "General Medicine", "Orthopedics"], "emergencyServices": True, "rating": 4.5},
    {"id": "wb_fac_11", "name": "Rampurhat Govt Medical College & Hospital", "type": "hospital", "district": "Birbhum", "city": "Rampurhat", "address": "Rampurhat, Birbhum - 731224", "phone": "+91 3461 255 010", "lat": 24.1700, "lng": 87.7800, "specialties": ["General Medicine", "Maternity", "Pediatrics"], "emergencyServices": True, "rating": 4.3},
    
    # Nadia & Murshidabad
    {"id": "wb_fac_12", "name": "AIIMS Kalyani (All India Institute of Medical Sciences)", "type": "hospital", "district": "Nadia", "city": "Kalyani", "address": "NH-34 Connector, Basantapur, Kalyani, Nadia - 741245", "phone": "+91 33 2999 1520", "lat": 22.9750, "lng": 88.4344, "specialties": ["Apex Multi-Specialty", "Cardiology", "Neurology", "Oncology", "Robotic Surgery"], "emergencyServices": True, "rating": 4.9},
    {"id": "wb_fac_13", "name": "Murshidabad Medical College & Hospital", "type": "hospital", "district": "Murshidabad", "city": "Berhampore", "address": "Station Road, Berhampore, Murshidabad - 742101", "phone": "+91 3482 252 023", "lat": 24.1000, "lng": 88.2500, "specialties": ["Emergency Trauma", "General Surgery", "Pediatrics"], "emergencyServices": True, "rating": 4.6},
    
    # Malda, Dinajpur, Darjeeling, Jalpaiguri, Alipurduar, Cooch Behar
    {"id": "wb_fac_14", "name": "Malda Medical College & Hospital", "type": "hospital", "district": "Malda", "city": "English Bazar", "address": "Singatala, English Bazar, Malda - 732101", "phone": "+91 3512 221 087", "lat": 25.0000, "lng": 88.1400, "specialties": ["Trauma", "General Medicine", "Cardiology"], "emergencyServices": True, "rating": 4.5},
    {"id": "wb_fac_15", "name": "Raiganj Govt Medical College & Hospital", "type": "hospital", "district": "Uttar Dinajpur", "city": "Raiganj", "address": "Raiganj, Uttar Dinajpur - 733134", "phone": "+91 3523 252 201", "lat": 25.6200, "lng": 88.1200, "specialties": ["General Medicine", "Pediatrics"], "emergencyServices": True, "rating": 4.3},
    {"id": "wb_fac_16", "name": "Balurghat District Hospital", "type": "hospital", "district": "Dakshin Dinajpur", "city": "Balurghat", "address": "Balurghat, Dakshin Dinajpur - 733101", "phone": "+91 3522 255 102", "lat": 25.2200, "lng": 88.7600, "specialties": ["Emergency", "General Surgery"], "emergencyServices": True, "rating": 4.3},
    {"id": "wb_fac_17", "name": "North Bengal Medical College and Hospital", "type": "hospital", "district": "Darjeeling", "city": "Siliguri", "address": "Sushrutanagar, Siliguri, Darjeeling - 734012", "phone": "+91 353 258 5478", "lat": 26.6870, "lng": 88.3840, "specialties": ["Apex Tertiary Care", "Cardiology", "Neurology", "Trauma", "Pulmonology"], "emergencyServices": True, "rating": 4.7},
    {"id": "wb_fac_18", "name": "Kalimpong District Hospital", "type": "hospital", "district": "Kalimpong", "city": "Kalimpong", "address": "Rishi Road, Kalimpong - 734301", "phone": "+91 3552 255 204", "lat": 27.0600, "lng": 88.4700, "specialties": ["General Medicine", "Emergency", "Maternity"], "emergencyServices": True, "rating": 4.4},
    {"id": "wb_fac_19", "name": "Jalpaiguri Govt Medical College & Hospital", "type": "hospital", "district": "Jalpaiguri", "city": "Jalpaiguri", "address": "Jalpaiguri - 735101", "phone": "+91 3561 224 011", "lat": 26.5400, "lng": 88.7200, "specialties": ["Emergency", "Pediatrics", "General Surgery"], "emergencyServices": True, "rating": 4.5},
    {"id": "wb_fac_20", "name": "Alipurduar District Hospital", "type": "hospital", "district": "Alipurduar", "city": "Alipurduar", "address": "Hospital Road, Alipurduar - 736121", "phone": "+91 3564 255 101", "lat": 26.4900, "lng": 89.5200, "specialties": ["General Medicine", "Trauma"], "emergencyServices": True, "rating": 4.3},
    {"id": "wb_fac_21", "name": "Cooch Behar Govt Medical College (MJN Hospital)", "type": "hospital", "district": "Cooch Behar", "city": "Cooch Behar", "address": "Silver Jubilee Road, Cooch Behar - 736101", "phone": "+91 3582 222 240", "lat": 26.3200, "lng": 89.4500, "specialties": ["Emergency", "General Surgery", "Pediatrics"], "emergencyServices": True, "rating": 4.5},
    
    # Medinipur, Jhargram, Bankura, Purulia
    {"id": "wb_fac_22", "name": "Midnapore Medical College and Hospital", "type": "hospital", "district": "Paschim Medinipur", "city": "Medinipur", "address": "Station Road, Midnapore - 721101", "phone": "+91 3222 275 239", "lat": 22.4200, "lng": 87.3200, "specialties": ["Cardiology", "General Surgery", "Trauma ICU"], "emergencyServices": True, "rating": 4.6},
    {"id": "wb_fac_23", "name": "Tamluk Govt Medical College & Hospital", "type": "hospital", "district": "Purba Medinipur", "city": "Tamluk", "address": "Tamluk, Purba Medinipur - 721636", "phone": "+91 3228 266 010", "lat": 22.3000, "lng": 87.9200, "specialties": ["General Medicine", "Maternity"], "emergencyServices": True, "rating": 4.4},
    {"id": "wb_fac_24", "name": "Jhargram Govt Medical College & Hospital", "type": "hospital", "district": "Jhargram", "city": "Jhargram", "address": "Jhargram - 721507", "phone": "+91 3221 255 101", "lat": 22.4500, "lng": 86.9800, "specialties": ["General Medicine", "Pediatrics", "Emergency"], "emergencyServices": True, "rating": 4.4},
    {"id": "wb_fac_25", "name": "Bankura Sammilani Medical College & Hospital", "type": "hospital", "district": "Bankura", "city": "Bankura", "address": "Kenduadihi, Bankura - 722102", "phone": "+91 3242 250 311", "lat": 23.2300, "lng": 87.0700, "specialties": ["Cardiology", "Neurology", "Trauma", "General Surgery"], "emergencyServices": True, "rating": 4.7},
    {"id": "wb_fac_26", "name": "Deben Mahata Govt Medical College (Purulia Sadar)", "type": "hospital", "district": "Purulia", "city": "Purulia", "address": "Purulia - 723101", "phone": "+91 3252 222 301", "lat": 23.3300, "lng": 86.3600, "specialties": ["Emergency", "General Surgery", "Pediatrics"], "emergencyServices": True, "rating": 4.5}
]

def haversine_distance(lat1, lon1, lat2, lon2):
    R = 6371.0 # Earth radius in km
    dlat = math.radians(lat2 - lat1)
    dlon = math.radians(lon2 - lon1)
    a = math.sin(dlat / 2)**2 + math.cos(math.radians(lat1)) * math.cos(math.radians(lat2)) * math.sin(dlon / 2)**2
    c = 2 * math.atan2(math.sqrt(a), math.sqrt(1 - a))
    return R * c

class LocationService:
    @staticmethod
    def get_facilities(filters: dict = None):
        results = WEST_BENGAL_FACILITIES
        if filters:
            if filters.get('district'):
                results = [f for f in results if filters['district'].lower() in f['district'].lower()]
            if filters.get('city'):
                results = [f for f in results if filters['city'].lower() in f['city'].lower()]
            if filters.get('type'):
                results = [f for f in results if filters['type'].lower() == f['type'].lower()]
            if filters.get('specialty'):
                results = [f for f in results if any(filters['specialty'].lower() in s.lower() for s in f.get('specialties', []))]
        return results

    @staticmethod
    def get_nearby(lat: float, lng: float, radius_km: float = 25.0, facility_type: str = None):
        facilities = LocationService.get_facilities({'type': facility_type} if facility_type else None)
        nearby = []
        for f in facilities:
            dist = haversine_distance(lat, lng, f['lat'], f['lng'])
            if dist <= radius_km:
                item = dict(f)
                item['distanceKm'] = round(dist, 1)
                nearby.append(item)
        nearby.sort(key=lambda x: x.get('distanceKm', 0))
        return nearby if nearby else facilities[:5]