import React from 'react'

export default function Form(props) {
    const {
        submit,
        errors,
        values,
        disabled,
        inputChange
    } = props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onInputChange = evt => {
        const { name, value } = evt.target
        inputChange(name, value)
    }

    return (
        <form onSubmit={submit}>
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
            <button disabled = {disabled}>Submit</button>
        </form>
    )
}