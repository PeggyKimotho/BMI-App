import React, { useState } from 'react';
import './App.css';

function App() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmiResult, setBmiResult] = useState('');
  const [heightError, setHeightError] = useState('');
  const [weightError, setWeightError] = useState('');

  const calculateBMI = () => {
    setHeightError('');
    setWeightError('');

    const parsedHeight = parseInt(height);
    const parsedWeight = parseInt(weight);

    let heightStatus = false;
    let weightStatus = false;

    if (isNaN(parsedHeight) || parsedHeight <= 0) {
      setHeightError('Please provide a valid height');
    } else {
      heightStatus = true;
    }

    if (isNaN(parsedWeight) || parsedWeight <= 0) {
      setWeightError('Please provide a valid weight');
    } else {
      weightStatus = true;
    }

    if (heightStatus && weightStatus) {
      const bmi = (parsedWeight / ((parsedHeight * parsedHeight) / 10000)).toFixed(2);

      if (bmi < 18.6) {
        setBmiResult('Underweight: ' + bmi);
      } else if (bmi >= 18.6 && bmi < 24.9) {
        setBmiResult('Normal: ' + bmi);
      } else {
        setBmiResult('Overweight: ' + bmi);
      }
    } else {
      setBmiResult('');
    }
  };

  return (
    <div>
      <div className='header'>
        <h1>Body Mass Index (BMI)</h1>
        <p>This is a screening tool that measures the ratio of your height to your weight to estimate the amount of body fat you have.</p>
        <h2>  BMI Categories</h2>
        <ul>
          <li>Underweight = less than 18.5</li>
          <li>Normal weight = 18.5 - 24.9</li>
          <li>Overweight = 25 - 29.9</li>
          <li>Obese = greater than 30</li>
        </ul>
      </div>
      <div className='center-container'>
    <div className="wrapper">
      <h1>BMI Calculator</h1>
      <p>
        Height in CMs:
        <input
          type="text"
          id="height"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
        <br />
        <span id="height_error">{heightError}</span>
      </p>

      <p>
        Weight in KGs:
        <input
          type="text"
          id="weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <br />
        <span id="weight_error">{weightError}</span>
      </p>

      <button id="btn" onClick={calculateBMI}>
        Calculate BMI
      </button>
      <p id="output" style={{ backgroundColor: bmiResult ? 'aqua' : 'transparent' }}>{bmiResult}</p>
    </div>
    </div>
    </div>
  );
}

export default App;
