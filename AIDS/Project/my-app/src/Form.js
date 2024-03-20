import React, { useState } from 'react';
import './Form.css'; // Importing CSS file

function Form() {
  const [result, setResult] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Extract values from form inputs and convert to integers
    const ageValue = parseInt(document.getElementById("inputEmail4").value);
    const chestPainValue = parseInt(document.getElementById("inputState").value);
    const exerciseAnginaValue = parseInt(document.getElementById("exerciseAnginaSelect").value);
    const stSlopeValue = parseInt(document.getElementById("stSlopeSelect").value);
    const oldPeakValue = parseInt(document.getElementById("inputOldPeak").value);

    // Send POST request with the converted values
    fetch('http://127.0.0.1:5000/predict', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        Age: ageValue,
        ChestPainType: chestPainValue,
        ExerciseAngina: exerciseAnginaValue,
        ST_Slope: stSlopeValue,
        Oldpeak: oldPeakValue
      }),
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setResult(data.result);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }

  return (
    <div className="form-container">
      <h1>Health Disease Prediction</h1>
      <h2>Enter Your Health Details</h2>
      <form>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputEmail4">Age</label>
            <input type="text" className="form-control" id="inputEmail4" placeholder="Age" />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="inputState">Chest Pain</label>
            <select id="inputState" className="form-control">
              <option selected>Choose...</option>
              <option value="2">ASY</option>
              <option value="1">NAP</option>
              <option value="0">ATA</option>
              <option value="3">TA</option>
            </select>
          </div>
        </div>

        <div>
          <p>Exercise Angina</p>
          <div className="form-group">
            <select id="exerciseAnginaSelect" className="form-control">
              <option selected>Choose...</option>
              <option value="1">Yes</option>
              <option value="0">No</option>
            </select>
          </div>
        </div>
        <div>
          <p>Please enter your ST Slope</p>
          <div className="form-row">
            <select id="stSlopeSelect" className="form-control">
              <option selected>Choose...</option>
              <option value="1">Flat</option>
              <option value="0">Up</option>
              <option value="2">Down</option>
            </select>
          </div>
        </div>

        <div>
          <p>Old Peak</p>
          <div className="form-group">
            <input type="text" className="form-control" id="inputOldPeak" placeholder="Old Peak" />
          </div>
        </div>
        <div>
          <p>Result</p>
          <div className="form-group">
            <input type="text" className="form-control" id="inputResult" value={result} readOnly />
          </div>
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default Form;
