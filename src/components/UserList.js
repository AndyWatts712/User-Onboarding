import React from 'react'

export default function UserList(props) {
    const { first_name } = props
    return (
        <div>
            <h3>Name: {first_name}</h3>
        </div>
    )
}