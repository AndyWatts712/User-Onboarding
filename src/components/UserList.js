import React from 'react'

export default function UserList(props) {
    const { userData } = props
    console.log('PROPS', props)

    return (
        userData.map((usr) => {
            return (
                <div key={usr.id}>
                    <h3>Name: {usr.first_name}</h3>
                </div>
            )
        })
    )
}