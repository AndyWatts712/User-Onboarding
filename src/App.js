import React, { useState, useEffect } from 'react';
import Form from './components/Form'
import './App.css';
import axios from 'axios';
import * as yup from 'yup'
import formSchema from './validation/formSchema'
import UserList from './components/UserList'

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

 
  const getUser = () => {
    axios.get('https://reqres.in/api/users')
      .then((res) => {
        setUserData(res.data.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const postNewUser = newUser => {
    axios.post('https://reqres.in/api/users', newUser)
     .then(res => {
       setUserData([res.data, ...userData])
       setFormValues(initialFormValues)
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

const submit = () => {
  const newUser = {
    first_name: formValues.first_name.trim(),
    last_name: formValues.last_name.trim(),
    email: formValues.email.trim()
  }
  postNewUser(newUser)
}
useEffect(() => {
  getUser()
}, [setUserData])

useEffect(() => {
  formSchema.isValid(formValues).then(valid => {
    setDisabled(!valid)
  })
}, [formValues])
  return (
    <div className="App">
      <h1>User Onboarding</h1>
      <Form 
        values = {formValues}
        errors = {formErrors}
        submit = {submit}
        disabled = {disabled}
        inputChange = {inputChange}
        />
        <UserList userData = {userData} />
    </div>
  );
}

