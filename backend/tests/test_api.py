import unittest
import json
import sys
from pathlib import Path

# Add project root to sys.path
root_dir = Path(__file__).resolve().parent.parent.parent
if str(root_dir) not in sys.path:
    sys.path.insert(0, str(root_dir))

from backend.app import create_app

class TestAIMedicalSystemAPI(unittest.TestCase):
    def setUp(self):
        self.app = create_app()
        self.app.config['TESTING'] = True
        self.client = self.app.test_client()

    def test_01_health_check(self):
        """Test System Health Endpoint"""
        response = self.client.get('/api/health')
        self.assertEqual(response.status_code, 200)
        data = json.loads(response.data)
        self.assertTrue(data['success'])
        self.assertEqual(data['data']['region'], "West Bengal, India")

    def test_02_auth_register_and_login(self):
        """Test User Registration and Login"""
        login_res = self.client.post('/api/auth/login', json={
            "email": "patient@wbhealth.in",
            "password": "Password123!"
        })
        self.assertEqual(login_res.status_code, 200)
        login_data = json.loads(login_res.data)
        self.assertTrue(login_data['success'])
        self.assertIn('token', login_data['data'])

    def test_03_ml_disease_prediction(self):
        """Test ML Disease Prediction Endpoint"""
        res = self.client.post('/api/ml/disease-prediction', json={
            "symptoms": ["itching", "skin_rash", "nodal_skin_eruptions"]
        })
        self.assertEqual(res.status_code, 200)
        data = json.loads(res.data)
        self.assertTrue(data['success'])
        self.assertIn('prediction', data['data'])
        self.assertGreater(data['data']['confidence'], 0.5)

    def test_04_ml_diabetes_risk(self):
        """Test Diabetes Risk Evaluation"""
        res = self.client.post('/api/ml/diabetes-risk', json={
            "glucose": 140,
            "bmi": 28.5,
            "age": 45,
            "bloodPressure": 85
        })
        self.assertEqual(res.status_code, 200)
        data = json.loads(res.data)
        self.assertTrue(data['success'])
        self.assertIn('riskLevel', data['data'])

    def test_05_west_bengal_locations(self):
        """Test West Bengal Healthcare Facilities Query"""
        res = self.client.get('/api/locations?district=Kolkata')
        self.assertEqual(res.status_code, 200)
        data = json.loads(res.data)
        self.assertTrue(data['success'])
        self.assertGreater(len(data['data']), 0)

    def test_06_ai_assistant(self):
        """Test AI Medical Assistant Query"""
        res = self.client.post('/api/ai/medical-assistant', json={
            "question": "What is normal fasting blood glucose?"
        })
        self.assertEqual(res.status_code, 200)
        data = json.loads(res.data)
        self.assertTrue(data['success'])
        self.assertIn('answer', data['data'])

if __name__ == '__main__':
    unittest.main()