import streamlit as st
import pandas as pd
import numpy as np
import joblib

model = joblib.load("heart_disease.joblib")

def main():
    st.title("Heart Disease Prediction")

    age = st.number_input("Age", min_value=0, max_value=150, value=25)
    resting_bp = st.number_input("Resting Blood Pressure (mm Hg)", min_value=0, max_value=300, value=120)
    cholesterol = st.number_input("Cholesterol (mg/dL)", min_value=0, max_value=600, value=200)
    fasting_bs = st.radio("Fasting Blood Sugar > 120 mg/dl", options=["0", "1"])
    max_hr = st.number_input("Maximum Heart Rate Achieved", min_value=0, max_value=300, value=150)
    oldpeak = st.number_input("ST Depression Induced by Exercise Relative to Rest", value=0.0)
    sex = st.radio("Sex", options=["M", "F"])
    chest_pain_type = st.radio("Chest Pain Type", options=["ATA", "NAP", "ASY"])
    resting_ecg = st.radio("Resting Electrocardiographic Results", options=["Normal", "ST"])
    exercise_angina = st.radio("Exercise Induced Angina", options=["N", "Y"])
    st_slope = st.radio("ST Slope", options=["Flat", "Up"])

    # Convert categorical variables to one-hot encoding
    sex_M = 1 if sex.lower() == 'm' else 0
    chest_pain_type_ATA = 1 if chest_pain_type == 'ATA' else 0
    chest_pain_type_NAP = 1 if chest_pain_type == 'NAP' else 0
    chest_pain_type_ASY = 1 if chest_pain_type == 'ASY' else 0
    resting_ecg_Normal = 1 if resting_ecg == 'Normal' else 0
    resting_ecg_ST = 1 if resting_ecg == 'ST' else 0
    exercise_angina_Y = 1 if exercise_angina == 'Y' else 0
    st_slope_Flat = 1 if st_slope == 'Flat' else 0
    st_slope_Up = 1 if st_slope == 'Up' else 0

    # Button to trigger prediction
    if st.button("Predict"):
        # Prepare input data as a DataFrame
        input_data = pd.DataFrame({
            'Age': [age],
            'RestingBP': [resting_bp],
            'Cholesterol': [cholesterol],
            'FastingBS': [int(fasting_bs)],
            'MaxHR': [max_hr],
            'Oldpeak': [oldpeak],
            'Sex_M': [sex_M],
            'ChestPainType_ATA': [chest_pain_type_ATA],
            'ChestPainType_NAP': [chest_pain_type_NAP],
            'ChestPainType_ASY': [chest_pain_type_ASY],
            'RestingECG_Normal': [resting_ecg_Normal],
            'RestingECG_ST': [resting_ecg_ST],
            'ExerciseAngina_Y': [exercise_angina_Y],
            'ST_Slope_Flat': [st_slope_Flat],
            'ST_Slope_Up': [st_slope_Up]
        })
        # Predict heart disease
        prediction = model.predict(input_data)
        # Display prediction result
        if prediction[0] == 0:
            st.write("Prediction: No Heart Disease")
        else:
            st.write("Prediction: Heart Disease Detected")

if __name__ == "__main__":
    main()
