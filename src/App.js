import React, { useState } from 'react';
import './App.css';

function App() {
  const [birthDate, setBirthDate] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    const birthDateObj = new Date(birthDate);
    const currentDate = new Date();
    const ageDiff = currentDate - birthDateObj;
    const ageDate = new Date(ageDiff);
    const calculatedAge = Math.abs(ageDate.getUTCFullYear() - 1970);
    setAge(calculatedAge);
  };

  return (
    <div className="app-container">
      <h1 className="title">Age Calculator</h1>
      <h3>Enter your date of birth</h3>
      <input
        type="date"
        value={birthDate}
        onChange={(e) => setBirthDate(e.target.value)}
      />
      <div className="button-container">
        <button className="calculate-button" onClick={calculateAge}>
          Calculate Age
        </button>
      </div>
      {age !== null && <p>You are {age} years old</p>}
    </div>
  );
}

export default App;
