export interface DiseasePredictionRequest {
  symptoms: string[];
}

export interface DiseasePredictionResult {
  prediction: string;
  confidence: number;
  topPredictions: Array<{ disease: string; probability: number }>;
  disclaimer: string;
  modelVersion: string;
}

export interface DiabetesRiskRequest {
  pregnancies: number;
  glucose: number;
  bloodPressure: number;
  skinThickness: number;
  insulin: number;
  bmi: number;
  diabetesPedigreeFunction: number;
  age: number;
}

export interface DiabetesRiskResult {
  riskLevel: string;
  riskScore: number;
  prediction: string;
  keyContributingFactors: string[];
  recommendations: string;
  disclaimer: string;
}

export interface HeartRiskRequest {
  age: number;
  sex: number;
  chestPainType: number;
  restingBP: number;
  cholesterol: number;
  fastingBS: number;
  restingECG: number;
  maxHR: number;
  exerciseAngina: number;
  oldpeak: number;
  stSlope: number;
}

export interface HeartRiskResult {
  riskLevel: string;
  riskScore: number;
  prediction: string;
  recommendations: string;
  disclaimer: string;
}

export interface PatientRiskRequest {
  age: number;
  bmi: number;
  systolicBP: number;
  diastolicBP: number;
  isSmoker: boolean;
  conditionsCount: number;
}

export interface PatientRiskResult {
  overallRiskTier: 'Low' | 'Moderate' | 'High' | 'Critical';
  vulnerabilityScore: number;
  actionItems: string[];
  disclaimer: string;
}

export interface NLPClassificationResult {
  recommendedSpecialty: string;
  triageUrgency: 'Routine' | 'Urgent' | 'Emergency';
  keyExtractedKeywords: string[];
  disclaimer: string;
}
