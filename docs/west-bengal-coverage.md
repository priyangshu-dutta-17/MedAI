# West Bengal State-Wide Healthcare Coverage Specification

## AI Medical System (MCA Minor Project)

---

## 1. West Bengal Complete 23 Districts Registry

The AI Medical System provides comprehensive, state-wide healthcare facility coverage across all 5 administrative divisions and 23 revenue districts of West Bengal, India.

| # | District Name | Division | Headquarters | Center Latitude | Center Longitude | Major Healthcare Hubs |
|---|---|---|---|---|---|---|
| 1 | **Kolkata** | Presidency | Kolkata | 22.5726 | 88.3639 | SSKM, Medical College, Calcutta National, RG Kar, NRS |
| 2 | **North 24 Parganas** | Presidency | Barasat | 22.7230 | 88.4800 | Barasat District Hospital, College of Medicine & Sagore Dutta |
| 3 | **South 24 Parganas** | Presidency | Alipore / Baruipur | 22.3600 | 88.4300 | Diamond Harbour Govt Medical College, Baruipur SDH |
| 4 | **Howrah** | Presidency | Howrah | 22.5958 | 88.2636 | Howrah District Hospital, Uluberia SDH |
| 5 | **Nadia** | Presidency | Krishnanagar | 23.4000 | 88.5000 | Kalyani AIIMS, College of Medicine & JNM Hospital, Shaktinagar DH |
| 6 | **Hooghly** | Burdwan | Chinsurah | 22.9000 | 88.3900 | Imambara Sadar Hospital, Chandannagar SDH, Serampore Walsh |
| 7 | **Purba Bardhaman** | Burdwan | Bardhaman | 23.2324 | 87.8615 | Burdwan Medical College & Hospital, Katwa SDH |
| 8 | **Paschim Bardhaman** | Burdwan | Asansol | 23.6889 | 86.9661 | Asansol District Hospital, Durgapur Sub-Divisional Hospital |
| 9 | **Birbhum** | Burdwan | Suri | 23.9100 | 87.5300 | Suri Sadar Hospital, Rampurhat Govt Medical College |
| 10 | **Murshidabad** | Malda | Berhampore | 24.1000 | 88.2500 | Murshidabad Medical College, Jangipur SDH |
| 11 | **Malda** | Malda | English Bazar | 25.0000 | 88.1400 | Malda Medical College & Hospital, Chanchal SDH |
| 12 | **Uttar Dinajpur** | Malda | Raiganj | 25.6200 | 88.1200 | Raiganj Govt Medical College & Hospital, Islampur SDH |
| 13 | **Dakshin Dinajpur** | Malda | Balurghat | 25.2200 | 88.7600 | Balurghat District Hospital, Gangarampur SDH |
| 14 | **Darjeeling** | Jalpaiguri | Darjeeling | 27.0360 | 88.2627 | North Bengal Medical College (Siliguri), Darjeeling Sadar |
| 15 | **Kalimpong** | Jalpaiguri | Kalimpong | 27.0600 | 88.4700 | Kalimpong District Hospital |
| 16 | **Jalpaiguri** | Jalpaiguri | Jalpaiguri | 26.5400 | 88.7200 | Jalpaiguri Govt Medical College & Hospital, Malbazar SDH |
| 17 | **Alipurduar** | Jalpaiguri | Alipurduar | 26.4900 | 89.5200 | Alipurduar District Hospital, Birpara State General |
| 18 | **Cooch Behar** | Jalpaiguri | Cooch Behar | 26.3200 | 89.4500 | Cooch Behar Govt Medical College (MJN Hospital) |
| 19 | **Purba Medinipur** | Medinipur | Tamluk | 22.3000 | 87.9200 | Tamluk Medical College, Contai Sub-Divisional Hospital |
| 20 | **Paschim Medinipur** | Medinipur | Medinipur | 22.4200 | 87.3200 | Midnapore Medical College & Hospital, Kharagpur SDH |
| 21 | **Jhargram** | Medinipur | Jhargram | 22.4500 | 86.9800 | Jhargram Govt Medical College & Hospital |
| 22 | **Bankura** | Medinipur | Bankura | 23.2300 | 87.0700 | Bankura Sammilani Medical College, Bishnupur SDH |
| 23 | **Purulia** | Medinipur | Purulia | 23.3300 | 86.3600 | Deben Mahata Govt Medical College (Purulia Sadar) |

---

## 2. Healthcare Facility Classification System

Facilities across all 23 districts are categorized into 5 tiers:

1. **Tertiary Medical Colleges & Apex Hospitals** (`hospital`):
   - Multi-specialty, intensive care units (ICU/CCU/NICU), 24x7 trauma & emergency centers.
2. **Sub-Divisional & District Hospitals / Clinics** (`clinic`):
   - Outpatient departments (OPD), inpatient care, general surgery, maternal health.
3. **Primary Health Centres (PHC) & Community Health Units** (`clinic`):
   - Rural healthcare coverage, immunization, basic diagnostic triage.
4. **24x7 Diagnostic & Imaging Centres** (`diagnostic_centre`):
   - Pathology, Digital X-Ray, CT Scan, MRI, Ultrasound, 2D Echo.
5. **Retail & 24x7 Pharmacy Outlets** (`pharmacy`):
   - Prescription dispensing, emergency medical supplies, Jan Aushadhi Kendras.

---

## 3. Spatial GIS Search Architecture

```
User Location (GPS / Selected District)
             |
             v
[ GET /api/locations/nearby?lat=22.57&lng=88.36&radiusKm=15&type=hospital ]
             |
             v
MongoDB $geoWithin / $nearSphere with 2dsphere index
             |
             v
GeoJSON Response with Lat/Lng, Distance (km), Facilities List, Contact & Route URL
             |
             v
Angular Google Maps Platform Component (Interactive Markers, InfoWindows, Route Nav)
```