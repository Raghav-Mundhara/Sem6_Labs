from flask import Flask, request, jsonify
import joblib
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

model = joblib.load('temp.joblib')
feature_names = ['Age', 'ChestPainType', 'ExerciseAngina', 'Oldpeak', 'ST_Slope']  # Adjust feature names based on your model

@app.route('/predict', methods=['POST'])
def predict():
    response = request.get_json()
    print(response)
    features = [response[feature] for feature in feature_names]
    print(features)
    prediction = model.predict([features])[0]
    
    if prediction == 0:
        return jsonify({'result': 'No Heart Disease'})
    else:
        return jsonify({'result': 'Heart Disease'})

if __name__ == '__main__':
    app.run(debug=True)
