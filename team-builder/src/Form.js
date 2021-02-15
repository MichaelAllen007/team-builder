import React, { useState } from 'react'

const Form = ({addNewMember}) => {
    const [teamMate, setTeamMate] = useState({
        name: '',
        email: '',
        role: ''
    })

    const handler = event => {
        setTeamMate({...teamMate, [event.target.name] : [event.target.value]})
    }

    const submitMember = event => {
        event.preventDefault()
        addNewMember(teamMate)
    }

    return (
        <form onSubmit = {submitMember}>
            <label>Name:</label>
                <input
                    onChange={handler}
                    type='text'
                    name='name'
                    value={teamMate.name}
                />
            <label>Email:</label>
                <input 
                    onChange={handler}
                    type='text'
                    name='email'
                    value={teamMate.email}
                />
            <label>Role:</label>
                <input 
                    onChange={handler}
                    type='text'
                    name='role'
                    value={teamMate.role}
                />
            <button type='submit'>Add new member</button>
        </form>

    )
}

export default Form