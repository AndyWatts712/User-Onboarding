import React from 'react'

export default function Form() {

    return(
        <form>
            <label>Name: 
                <input
                 type='text'
                 name='name'
                 />
            </label>
            <button>Submit</button>
        </form>
    )
}