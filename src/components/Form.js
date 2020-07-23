import React from 'react'

export default function Form(props) {
    const {
        submit,
        errors,
        values,
        disabled,
        inputChange,
        checkboxChange
    } = props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onInputChange = evt => {
        const { name, value } = evt.target
        inputChange(name, value)
    }

    const onCheckboxChange = evt => {
        const { name, checked } = evt.target
        checkboxChange(name, checked)
    }
    return (
        <form onSubmit={onSubmit}>
            <div>
                <div>{errors.first_name}</div>
            </div>
            <label>First Name:
                <input
                    type='text'
                    name='first_name'
                    value={values.first_name}
                    onChange={onInputChange}
                />
            </label>
            <label>Last Name:
                <input
                    type='text'
                    name='last_name'
                    value={values.last_name}
                    onChange={onInputChange}
                />
            </label>
            <label>email:
                <input
                    type='text'
                    name='email'
                    value={values.email}
                    onChange={onInputChange}
                />
            </label>
            <label>Terms:
                <input id = 'termsCheck'
                    type='checkbox'
                    name='terms'
                    checked = {values.terms === true}
                    onChange={onCheckboxChange}
                />
            </label>
            <button disabled={disabled}>Submit</button>
        </form>
    )
}