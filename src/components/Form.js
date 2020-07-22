import React from 'react'

export default function Form() {

    return(
        <form>
            <label>First Name: 
                <input
                 type='text'
                 name='first_name'
                 />
            </label>
            <button>Submit</button>
        </form>
    )
}