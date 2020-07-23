import React from 'react'

export default function UserList(props) {
    const { userData } = props
    console.log('PROPS', props)

    return (
        userData.map((usr) => {
            return (
                <div key={usr.id}>
                    <h3>{usr.first_name} {usr.last_name}</h3>
                    <p>{usr.email}</p>
                </div>
            )
        })
    )
}