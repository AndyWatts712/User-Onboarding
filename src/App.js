import React, { useState, useEffect } from 'react';
import Form from './components/Form'
import './App.css';
import axios from 'axios';
import * as yup from 'yup'
import formSchema from './validation/formSchema'

const initialFormValues = {
  first_name: '',
  last_name: '',
  email: ''
}

const initialFormErrors = {
  first_name: '',
  last_name: '',
  email: ''
}

const initialUserData = []
const initialDisabled = true

export default function App() {
  const [userData, setUserData] = useState(initialUserData)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  const updateForm = (inputName, inputValue) => {
    const updatedFormValues = { ...formValues, [inputName]: inputValue }
    setFormValues(updatedFormValues)
  }

  const postNewUser = newUser => {
    axios.post('https://reqres.in/api/users', newUser)
     .then(res => {
       console.log(res.data)
     })
  }
/////////////////FORM ACTIONS///////////////
const inputChange = (name, value) => {
  yup
      .reach(formSchema, name)
      //we can then run validate using the value
      .validate(value)
      // if the validation is successful, we can clear the error message
      .then(valid => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        })
      })
      /* if the validation is unsuccessful, we can set the error message to the message 
        returned from yup (that we created in our schema) */
      .catch(err => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        })
      })
      setFormValues({
        ...formValues,
        [name]: value
      })
}
  return (
    <div className="App">
      <Form />
    </div>
  );
}

