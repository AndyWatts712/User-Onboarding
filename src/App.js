import React, { useState, useEffect } from 'react';
import Form from './components/Form'
import './App.css';

function App() {
  const [userData, setUserData] = useState([])
  const [formValues, setFormValues]= useState()

  const updateForm = (inputName, inputValue) => {
    const updatedFormValues = { ...formValues, [inputName]: inputValue}
    setFormValues(updatedFormValues)
  }

  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;
